import React from 'react'
import Link from 'next/link'
import classes from './Footer.module.css'

const Footer = () => (
    <footer>
        <div style={{backgroundColor: '#333333'}}>
            <div style={{maxWidth: 1170, padding: '40px 15px', margin: 'auto'}}>
                <nav className={classes.FooterLinksWrap}>
                    <ul className={`${classes.UlLinks} ${classes.footerNav}`}>
                        <li><Link href="/en/privacy-policy">Privacy</Link></li>
                        <li><Link href="/en/contact">Contact</Link></li>
                    </ul>
                </nav>
                <div className={classes.copyright}>© 2003-{new Date().getFullYear()} CPM-CA™ • Center of Psychotraumatology and Mediation</div>
            </div>
        </div>
        <div className={classes.crisisInfo}>
            <div className={classes.crisisInfoContent}>
                <p>
                    If you are in a critical situation or someone is in danger, do not use this site. <Link href="/en/crisis-line">These resources</Link> can provide immediate help.
                </p>
                <p className={classes.crisisLine}>
                    Crisis Line (Ottawa): <a href="tel:+16137226914">613-722-6914</a>
                </p>
            </div>
        </div>
    </footer>
)

export default Footer;