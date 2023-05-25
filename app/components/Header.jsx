import React from 'react'
import Link from 'next/link';

const Header = () => {
	return (
		<div className="navik-header header-shadow header-dark">
			<div className="container">
				{/* Navik header */}
				<div className="navik-header-container">
					{/*Logo*/}
					<div
						className="logo"
						data-mobile-logo="demo/images/logo-light.png"
						data-sticky-logo="demo/images/logo-light.png"
					>
						<a href="/">
							<img src="../images/logo.svg" alt="logo" />
						</a>
					</div>
					{/* Burger menu */}
					<div className="burger-menu">
						<div className="line-menu line-half first-line" />
						<div className="line-menu" />
						<div className="line-menu line-half last-line" />
					</div>
					{/*Navigation menu*/}
					<nav className="navik-menu menu-caret submenu-top-border submenu-scale">
						<ul>
							<li className="current-menu">
								<Link href="/steuerkanzlei">Steuerberater</Link>
								<ul>
									<li>
										{/* <a href="/die-steuerberater">Die Steuerberater</a> */}
										<Link href="/steuerkanzlei/die-steuerberater">Die Steuerberater</Link>
									</li>
									<li>
										<Link href="/steuerkanzlei/steuerkanzlei-online">Steuerkanzlei online</Link>
									</li>
									<li>
										<Link href="/steuerkanzlei/steuerkanzlei-gerolzhofen">Steuerkanzlei Gerolzhofen</Link>
									</li>
									<li>
										<Link href="/steuerkanzlei/steuerberater-bad-kissingen">Steuerkanzlei Bad Kissingen</Link>
									</li>
									<li>
										<Link href="/steuerkanzlei/datenschutz">Datenschutz</Link>
									</li>
									<li>
										<Link href="/steuerkanzlei/impressum">Impressum</Link>
									</li>
								</ul>
							</li>
							<li>
								<Link href="/leistungsuebersicht">Leistungsübersicht</Link>
								<ul>
									<li>
										<Link href="/leistungsuebersicht/testamentsvollstreckung">Testamentsvollstreckung</Link>
									</li>
									<li>
										<Link href="/leistungsuebersicht/streuerliche-Beratung">Streuerliche Bratung</Link>
									</li>
									<li>
										<Link href="/leistungsuebersicht/steuerliche-optimierung">Steuerliche Optimierung</Link>
									</li>
									<li>
										<Link href="/leistungsuebersicht/landwirtschaftliche-buchstelle">Landwirtschaftliche Buchstelle</Link>
									</li>
									<li>
										<Link href="/leistungsuebersicht/finanzbuchhaltung">Finanzbuchhaltung</Link>
									</li>
									<li>
										<Link href="/leistungsuebersicht/lohnbuchhaltung">Lohnbuchhaltung</Link>
									</li>
									<li>
										<Link href="/leistungsuebersicht/steuererklaerung">Steuererklärung</Link>
									</li>
									<li>
										<Link href="/leistungsuebersicht/jahresabschluesse">Jahresabshlüsse</Link>
									</li>
								</ul>
							</li>
							<li>
								<Link href="/formular">Formular</Link>
							</li>
							<li>
								<Link href="/karriere">Karriere</Link>
								<ul>
									<li>
										<Link href='/karriere/offene-stelle'>Offene stelle</Link>
									</li>
									<li>
										<Link href='/karriere/online-bewerben'>Online bewerben</Link>
									</li>
								</ul>
							</li>
							<li>
								<Link href="/kontakt">Kontakt</Link>
							</li>
							<li className="submenu-right">
								<Link href="/login">login</Link>
								{/* <ul>
									<li>
										<a href="#">Dropdown menu</a>
									</li>
									<li>
										<a href="#">Dropdown menu</a>
									</li>
									<li>
										<a href="#">Dropdown menu</a>
									</li>
									<li>
										<a href="#">Dropdown menu</a>
									</li>
								</ul> */}
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</div>

	)
}

export default Header