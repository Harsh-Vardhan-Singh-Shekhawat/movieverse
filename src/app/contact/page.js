import React from 'react'
import styles from './contact.module.css'
import ContactCard from '../components/ContactCard'
import ContactForm from '../components/ContactForm'

const page = () => {
  return (
    <>
      <div>
        <h1>Contact Us</h1>
        <ContactCard />

        <section className={styles.contact_section}>
          <ContactForm />
        </section>

        <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7114.53803728979!2d75.71695444109875!3d26.926684772275365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3490679770f%3A0xe353c2ab2f618b2f!2sPrithviraj%20Nagar%20(B%20Sector)%2C%20Jaipur%2C%20Rajasthan%20302012!5e0!3m2!1sen!2sin!4v1692727214563!5m2!1sen!2sin" width={600} height={450} style={{border:0}}  allowfullscreen="allowfullscreen" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className={styles.mapping}></iframe>
        </div>
      </div>
    </>
  )
}

export default page
