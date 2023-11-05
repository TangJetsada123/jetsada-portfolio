import styles from '@/styles/AboutMe.module.css'
export default function AboutMe() {
    return (<>
        <div className={styles.AbouteLayout}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <p style={{ color: 'black' }} className={styles.Header}>Our Philosophy</p>
                <p style={{ color: 'black' }} className={styles.Detail}>Lorem Ipsum is simply dummy text of <br /> the printing and typesetting industry. </p>
                <p style={{ color: 'black', marginTop: '50px' }} className={styles.Detail}>Lorem Ipsum has been the industry's <br/> standard dummy text ever since the <br/> 1500s, when an unknown printer took <br/> a galley of type and scrambled it to <br/> make a type specimen book. </p>
                <button style={{ marginTop: '58px',marginBottom: '150px' }} className={styles.MeetTeamBtn}>Meet team</button>
            </div>
            <div className={styles.ProfileImage}></div>
        </div>

    </>)
}