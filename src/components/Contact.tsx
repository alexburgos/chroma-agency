import styles from './Contact.module.css'

export function Contact() {
  return (
    <div className={styles.contact}>
      <div className={styles.sectionContent}>
        <div className={styles.contactInfo}>
          <a href="mailto:bookings@chroma-agency.com" className={styles.contactLink}>
            bookings@chroma-agency.com
          </a>
          <a href="mailto:info@chroma-agency.com" className={styles.contactLink}>
            info@chroma-agency.com
          </a>
        </div>
      </div>
    </div>
  )
}
