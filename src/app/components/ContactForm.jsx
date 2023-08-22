"use client"
import React, { useState } from "react";
import styles from "@/app/contact/contact.module.css";
import { Mulish } from "next/font/google";

const mulish = Mulish({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const ContactForm = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser ((prevUser) => ({ ...prevUser, [name]:value}))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('/api/contact', {
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify({
                username:user.username,
                email:user.email,
                phone:user.phone,
                message:user.message
            })
        })

        if(response===200) {
            setUser({
                name: "",
                email: "",
                phone: "",
                message: "",
              })
              setStatus('success')
        }
        else {
            setStatus('error')
        }
    } catch (error) {
        console.log(error)
    }
  };

  return (
    <form className={styles.contact_form} onSubmit={handleSubmit}>
      <div className={styles.input_field}>
        <label htmlFor="username" className={styles.label}>
          Username:
          <input
            type="text"
            value={user.username}
            name="username"
            id="username"
            placeholder="Enter your name"
            className={mulish.className}
            onChange={handleChange}
            required
          ></input>
        </label>
      </div>

      <div className={styles.input_field}>
        <label htmlFor="email" className={styles.label}>
          Email:
          <input
            type="email"
            value={user.email}
            name="email"
            id="email"
            placeholder="Enter your email"
            className={mulish.className}
            onChange={handleChange}
            required
          ></input>
        </label>
      </div>

      <div className={styles.input_field}>
        <label htmlFor="phone" className={styles.label}>
          Phone Number:
          <input
            type="number"
            value={user.phone}
            name="phone"
            id="phone"
            placeholder="9887766554"
            className={mulish.className}
            onChange={handleChange}
            required
          ></input>
        </label>
      </div>

      <div className={styles.input_field}>
        <label htmlFor="message" className={styles.label}>
          Message:
          <textarea
            type="text"
            value={user.message}
            name="message"
            id="message"
            rows={5}
            placeholder="Write something here ..."
            className={mulish.className}
            onChange={handleChange}
            required
          ></textarea>
        </label>
      </div>

      <div>
        <button type="submit" className={mulish.className}>
        {status === 'success' && <p className={styles.success_msg}>Thank you for your message!</p>}
        {status === 'error' && <p className={styles.error_msg}>There was an error submitting your message. Please try again.</p>}
          
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
