import styles from '@/styles/Home.module.css'
import Image from 'next/image';


function Head() {
    const text = Array.from("Fullstack Software Developer. Fullstack Software Developer ");
    const radius = 'var(--radius)';
    return (<>
        <div className={styles.MenuLayout}>
            <div className={styles.NavbarLayout}>
                <div className={styles.Homebtn}>
                    <p className={styles.Head} >JN</p>
                    <p className={styles.descript}>Fullstack Software <br /> Developer</p>
                </div>
                <div className={styles.Menu}>
                    <a href="Home" className={styles.NavbarMenu} >Home</a>
                    <a href="About" className={styles.NavbarMenu} >about</a>
                    <a href="Work" className={styles.NavbarMenu} >Work</a>
                    <a href="News" className={styles.NavbarMenu} >News</a>
                    <a href="Contract" className={styles.NavbarMenu} >Contract</a>
                </div>
            </div>
            <div>
                <div className={styles.HeaderTextLayout}>
                    <div style={{ display: 'flex', flexDirection: 'row', gap: '80px' }}>
                        <div>
                            <h1 className={styles.HeaderTextSmall}>Hello people !</h1>
                            <h1 className={styles.HeaderTextLarge}>We’re creative <br /> digital studio.</h1>
                        </div>
                        <div className={styles.circle}>
                            <div className={styles.logo}></div>
                            <div className={styles.text}>
                                <p>
                                    {text.map((char, i) => (
                                        <span
                                            key={i}
                                            style={{
                                                position: "absolute",
                                                left: "50%",
                                                fontSize: "1.2em",
                                                transformOrigin: `0 ${radius}`,
                                                transform: `rotate(${i * 5.8}deg)`,
                                            }}
                                        >
                                            {char}
                                        </span>
                                    ))}
                                </p>
                            </div>

                        </div>
                    </div>
                    <div className={styles.HeadSocialLayout}>
                        <a href='instagram'><Image alt='instagram' src='image/instagram.svg' width={24} height={24}></Image></a>
                        <a href='twitter'><Image alt='twitter' src='image/twitter.svg' width={24} height={24}></Image></a>
                        <a href='linkein'><Image alt='linkedin' src='image/linkedin.svg' width={24} height={24}></Image></a>
                        <a href='behance'><Image alt='behance' src='image/behance.svg' width={24} height={24}></Image></a>
                        <a href='figma'><Image alt='figma' src='image/figma.svg' width={24} height={24}></Image></a>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default Head;