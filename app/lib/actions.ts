'use server';

import { PutCommand, UpdateCommand } from '@aws-sdk/lib-dynamodb';
import { db } from './dynamodb';
import { redirect } from 'next/navigation';

async function getNextOrderNumber() {
    try {
        const result = await db.send(new UpdateCommand({
            TableName: 'counters',
            Key: { counter_name: 'orders' },
            UpdateExpression: 'ADD current_value :inc',
            ExpressionAttributeValues: { ':inc': 1 },
            ReturnValues: 'UPDATED_NEW'
        }));
        return result.Attributes?.current_value;
    } catch (error) {
        console.error('Counter error:', error);
        // Fallback if counter table fails (or doesn't exist yet)
        return Date.now();
    }
}

export async function createOrder(formData: FormData) {
    const orderId = await getNextOrderNumber();
    const createdAt = new Date().toISOString();

    // Extract values from FormData
    // We use .toString() to ensure we get the string value or empty string
    const order = {
        order_number: orderId, // Matched to DynamoDB KeySchema
        createdAt,
        status: 'PENDING',
        name: formData.get('name')?.toString(),
        phoneNumber: formData.get('phoneNumber')?.toString(),
        racketBrand: formData.get('racketBrand')?.toString(),
        racketModel: formData.get('racketModel')?.toString(),
        numberOfRackets: formData.get('numberOfRackets')?.toString(),
        stringType: formData.get('stringType')?.toString() || 'No Preference',
        stringBrand: formData.get('stringBrand')?.toString() || '',
        tensionMains: formData.get('tensionMains')?.toString() || 'No Preference',
        tensionCrosses: formData.get('tensionCrosses')?.toString() || 'No Preference',
        deliveryDate: formData.get('deliveryDate')?.toString() || '',
        notes: formData.get('notes')?.toString() || '',
    };

    try {
        console.log("attempting send");
        await db.send(new PutCommand({
            TableName: 'orders', // Make sure your table name matches what you created in AWS
            Item: order,
        }));

        // On success, we can redirect or return a success message
        // For now, let's redirect to a success page (we need to create this later)
        // or just console log for now if you prefer
        console.log('Order saved:', orderId);
    } catch (error) {
        console.error('Failed to save order:', error);
        throw new Error('Failed to create order');
    }
}
