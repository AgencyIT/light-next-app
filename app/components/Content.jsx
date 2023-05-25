import React from 'react'
import Carousel from './Carousel'

const Content = () => {
	return (
		<div className="content">
			{/* Hero banner */}
			<div className="hero-banner hero-banner-bg-2">
				<div className="hero-banner-inside">
					{/* <div className="banner-subtitle">IHR STEUERBERATER IN GEROLZHOFEN UND BAD KISSINGEN</div>
					<div className="banner-title">Landwirtschaftliche Buchstelle in Gerolzhofen und Bad Kissingen</div>
					<div className="button btn-color-1 scroll-to"> */}
					<Carousel>

						<a href="#scrollTo">Predx</a>
					</Carousel>
					{/* </div> */}
					{/* <div className="button btn-color-2">
						<a href="https://codecanyon.net/item/navik-responsive-header-navigation-menu/21787122">
							Purchase
						</a>
					</div> */}
				</div>
			</div>
		</div>

	)
}

export default Content