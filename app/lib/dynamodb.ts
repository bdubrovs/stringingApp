import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';

const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

if (!accessKeyId || !secretAccessKey) {
    throw new Error('Missing AWS credentials');
}

const client = new DynamoDBClient({
    region: 'us-east-2',
    credentials: {
        accessKeyId,
        secretAccessKey,
    },
});

export const db = DynamoDBDocumentClient.from(client);
