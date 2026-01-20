"use client";

import { useState } from "react";
import styles from "./placeOrder.module.css";

import { createOrder } from "../lib/actions";

export default function PlaceOrder() {
  const [stringPreference, setStringPreference] = useState(false);
  const [tensionPreference, setTensionPreference] = useState(false);
  const [deliveryDate, setDeliveryDate] = useState("");


  // function handleSubmit(e: React.FormEvent) {
  //   e.preventDefault();
  //   console.log("Form submitted");
  // }

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Place Your Order</h1>
        <p className={styles.subtitle}>
          Fill out the form below to submit your racket stringing request. I'll get back to you shortly!
        </p>
      </header>

      <form action={createOrder} className={styles.formCard}>
        {/* Contact Information Section */}
        <section className={styles.formSection}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.sectionIcon}>👤</span>
            Contact Information
          </h2>
          <div className={styles.formGrid}>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="name">
                Name<span className={styles.required}>*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className={styles.input}
                placeholder="name"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="phoneNumber">
                Phone Number<span className={styles.required}>*</span>
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                className={styles.input}
                placeholder="5087352217"
                required
              />
            </div>
          </div>
        </section>

        {/* Racket Details Section */}
        <section className={styles.formSection}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.sectionIcon}>🎾</span>
            Racket Details
          </h2>
          <div className={styles.formGrid}>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="racketBrand">
                Racket Brand
              </label>
              <select id="racketBrand" name="racketBrand" className={styles.select} required>
                <option value="">Select a brand</option>
                <option value="wilson">Wilson</option>
                <option value="babolat">Babolat</option>
                <option value="head">Head</option>
                <option value="yonex">Yonex</option>
                <option value="prince">Prince</option>
                <option value="dunlop">Dunlop</option>
                <option value="tecnifibre">Tecnifibre</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="racketModel">
                Racket Model
              </label>
              <input
                type="text"
                id="racketModel"
                name="racketModel"
                className={styles.input}
                placeholder="e.g., Pro Staff 97"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="numberOfRackets">
                Number of Rackets
              </label>
              <select id="numberOfRackets" name="numberOfRackets" className={styles.select}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5+">5+</option>
              </select>
            </div>
          </div>
        </section>

        {/* String Preferences Section */}
        <section className={styles.formSection}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.sectionIcon}>🧵</span>
            String/Tension Preferences
          </h2>
          <div className={styles.infoBox}>
            <span className={styles.infoIcon}>ℹ️</span>
            <input
              type="checkbox"
              id="noStringPreference"
              name="noStringPreference"
              className={styles.checkbox}
              onChange={(e) => setStringPreference(e.target.checked)}
              checked={stringPreference}
            />
            <label className={styles.label} htmlFor="noStringPreference">
              Please check this box if you do not have a string preference. We can discuss options when you drop off your racket.
            </label>
          </div>
          <div className={styles.infoBox}>
            <span className={styles.infoIcon}>ℹ️</span>
            <input
              type="checkbox"
              id="noTensionPreference"
              name="noTensionPreference"
              className={styles.checkbox}
              onChange={(e) => setTensionPreference(e.target.checked)}
              checked={tensionPreference}
            />
            <label className={styles.label} htmlFor="noTensionPreference">
              Please check this box if you do not have a tension preference. We can discuss options when you drop off your racket.
            </label>
          </div>
          <div className={styles.formGrid}>
            {!stringPreference && (
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="stringType">
                  String Type
                </label>
                <select id="stringType" name="stringType" className={styles.select}>
                  <option value="">Select a string type</option>
                  <option value="polyester">Polyester</option>
                  <option value="synthetic">Synthetic Gut</option>
                  <option value="multifilament">Multifilament</option>
                  <option value="natural">Natural Gut</option>
                  <option value="hybrid">Hybrid</option>
                </select>
              </div>
            )}
            {!stringPreference && (
              <div className={styles.formGroup}>

                <label className={styles.label} htmlFor="stringBrand">
                  String Brand / Model
                </label>
                <input
                  type="text"
                  id="stringBrand"
                  name="stringBrand"
                  className={styles.input}
                  placeholder="e.g., Luxilon ALU Power"
                />

              </div>
            )}
            {!tensionPreference && (
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="tensionMains">
                  Mains Tension (lbs)<span className={styles.required}>*</span>
                </label>
                <input
                  type="number"
                  id="tensionMains"
                  name="tensionMains"
                  className={styles.input}
                  placeholder="52"
                  min="35"
                  max="70"
                  required
                />
              </div>
            )}
            {!tensionPreference && (
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="tensionCrosses">
                  Crosses Tension (lbs)<span className={styles.required}>*</span>
                </label>
                <input
                  type="number"
                  id="tensionCrosses"
                  name="tensionCrosses"
                  className={styles.input}
                  placeholder="50"
                  min="35"
                  max="70"
                  required
                />
              </div>
            )}
          </div>
        </section>

        {/* Additional Options Section */}
        <section className={styles.formSection}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.sectionIcon}>🕐</span>
            Delivery Date
          </h2>
          <div className={styles.formGrid}>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="deliveryDate">
                Select Delivery Date
              </label>
              <input
                type="date"
                id="deliveryDate"
                name="deliveryDate"
                className={styles.input}
                value={deliveryDate}
                onChange={(e) => setDeliveryDate(e.target.value)}
              />
            </div>
            <p className={`${styles.checkboxDescription} ${styles.formGroupFull}`}>
              Please select a delivery date if you need the racket done by a certain date. Otherwise, I will complete it as soon as I can.
            </p>
          </div>
        </section>

        {/* Special Instructions Section */}
        <section className={styles.formSection}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.sectionIcon}>📝</span>
            Special Instructions
          </h2>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="notes">
              Additional Notes or Requests
            </label>
            <textarea
              id="notes"
              name="notes"
              className={styles.textarea}
              placeholder="Any special requests, preferred drop-off times, or additional information..."
            ></textarea>
          </div>
        </section>

        {/* Submit Section */}
        <div className={styles.submitSection}>
          <button type="submit" className={styles.submitButton} style={{ color: "var(--foreground)" }}>
            Submit Order Request
          </button>

        </div>
        <p className={styles.disclaimer}>
          By submitting this form, you agree to be contacted regarding your stringing order.
        </p>
      </form>
    </main >
  );
}
