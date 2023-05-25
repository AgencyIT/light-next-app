import Script from 'next/script'
import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <div>
            <>
                <div className="footer">
                    <div className="container">
                        <div className="footer-info-wrapper">
                            <img className="footer-logo" src="./images/digitale-kanzlei.svg" alt="Predx" />
                            <div className="footer-desc">Ludwig + Ludwig digitale kanzlei</div></div>
                        <div className="footer-info-wrapper con_row2">
                            {/* <nav> */}
                            <div className='footer-desc con_col2 footer_nav'>
                                <ul style={{ textAlign: 'left' }} className='footer_m'>
                                    <h2 style={{ fontSize: '1.1rem'}}>Leistungsübersicht</h2>
                                    <Link className='txt_code' href={'/'}>Finanzbuchhaltung</Link>
                                    <Link className='txt_code' href={'/'}>Lohnbuchhaltung</Link>
                                    <Link className='txt_code' href={'/'}>jahresabschlüsse</Link>
                                    <Link className='txt_code' href={'/'}>Testamentsvollstreckung</Link>
                                    <Link className='txt_code' href={'/'}>Steuerklärungen</Link>
                                    <Link className='txt_code' href={'/'}>Steuerliche Beratung</Link>
                                    <Link className='txt_code' href={'/'}>Steuerliche Optimierung</Link>
                                    <Link className='txt_code' href={'/'}>landwirtschaftliche Buchstelle</Link>
                                </ul>
                                <ul style={{ textAlign: 'left' }} className='footer_m'>
                                    <h2 style={{ fontSize: '1.1rem' }}>Leistungsübersicht</h2>
                                    <Link className='txt_code' href={'/'}>Die Steuerberater</Link>
                                    <Link className='txt_code' href={'/'}>Ihr erste Termin</Link>
                                    <Link className='txt_code' href={'/'}>Formulare</Link>
                                    <Link className='txt_code' href={'/'}>stellenangebote</Link>
                                    <Link className='txt_code' href={'/'}>Online bewerben</Link>
                                </ul>

                            </div>
                            <div className='footer-desc con_col2 footer_nav' style={{gap: '2em'}}>
                                <ul style={{ textAlign: 'left' }} className='footer_m'>
                                    <h2 style={{ fontSize: '1.1rem' }}>Leistungsübersicht</h2>
                                    <Link className='txt_code' href={'/'}>Die Steuerberater</Link>
                                    <Link className='txt_code' href={'/'}>Ihr erste Termin</Link>
                                    <Link className='txt_code' href={'/'}>Formulare</Link>
                                    <Link className='txt_code' href={'/'}>stellenangebote</Link>
                                    <Link className='txt_code' href={'/'}>Online bewerben</Link>
                                    <Link className='txt_code' href={'/'}>Online bewerben</Link>
                                    <Link className='txt_code' href={'/'}>Online bewerben</Link>
                                    <Link className='txt_code' href={'/'}>Online bewerben</Link>
                                </ul>
                                <ul style={{ textAlign: 'left' }} className='footer_m'>
                                    <h2 style={{ fontSize: '1.1rem' }}>Leistungsübersicht</h2>
                                    <Link className='txt_code' href={'/'}>Die Steuerberater</Link>
                                    <Link className='txt_code' href={'/'}>Ihr erste Termin</Link>
                                    <Link className='txt_code' href={'/'}>Formulare</Link>
                                    <Link className='txt_code' href={'/'}>stellenangebote</Link>
                                    <Link className='txt_code' href={'/'}>Online bewerben</Link>
                                    <Link className='txt_code' href={'/'}>Online bewerben</Link>
                                    <Link className='txt_code' href={'/'}>Online bewerben</Link>
                                    <Link className='txt_code' href={'/'}>Online bewerben</Link>
                                </ul>
                            </div>
                            {/* </nav> */}
                            {/* <img className="footer-logo" src="./images/digitale-kanzlei.svg" alt="Predx"/> */}
                            {/* <div className="footer-desc">Ludwig + Ludwig digitale kanzlei</div>*/}</div>
                    </div>
                </div>

                <div className="copyright">
                    <div className="container">
                        © <a href="https://predx.de">predx.de</a> all right reserved.
                    </div>
                </div>

            </>

        </div>
    )
}

export default Footer