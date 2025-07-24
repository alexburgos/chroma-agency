import styles from './About.module.css'

export function About() {
  return (
    <div className={styles.about}>
      <h2 className={styles.sectionTitle}>About</h2>
      <div className={styles.sectionContent}>
        <p className={styles.description}>
          We represent forward-thinking electronic artists and DJs,
          connecting them with venues and festivals worldwide.
        </p>
        <p className={styles.description}>
          Founded in 2024, Chroma has quickly become a leading force in electronic music booking,
          specializing in cutting-edge artists who push the boundaries of sound and performance.
        </p>
      </div>
    </div>
  )
}
