import styles from './Artists.module.css'

const artists = [
  'AURORA BEATS',
  'NEON PULSE',
  'CRYSTAL WAVE',
  'MIDNIGHT ECHO',
]

export function Artists() {
  return (
    <div>
      <div className={styles.sectionContent}>
        <div className={styles.artistGrid}>
          {artists.map((artist, index) => (
            <a key={artist} className={`${styles.artistItem} color-${(index % 6) + 1}`} href={`#${artist.toLowerCase().replace(/\s+/g, '-')}`}>
              {artist}
            </a>
          ))}
        </div>
      </div>
    </div >
  )
}
