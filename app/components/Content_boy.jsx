'use client'

import React from 'react'
import Image from 'next/image';
import Lottie from 'lottie-react';
// import animationData from '../../public/anim_space/134358-dollar-exchange-with-indian-coins.json';
import animationData from '../../public/anim_space/121102-two-businessmen-work-in-the-office-collaboration-search-for-solutions.json';
import animationData1 from '../../public/anim_space/132540-loading-funny-animation.json'

const Content_boy = () => {
  return (
    <div className="content-body">
      {/* Features */}
      <div className="section section-features">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="box">
                <h2 className="section-title section-title-light">LUDWIG + LUDWIG</h2>
                <div className="divider divider-dark">
                  <span />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {/* <div className="col-md-6 col-lg-4">
              <div className="box">
                <div className="icon-list-wrapper icon-dark">
                  <div className="icon-list-icon">
                    <span>
                      <img src="./images/bad-kissingen.jpg" alt="feature" />
                    </span>
                  </div>
                  <div className="icon-list-details">
                    <h4>Flexible layouts</h4>

                    <p>
                      Various layout styles, including sidebar slide menu and
                      fullscreen overlay menu
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
            <div className='row_img_box'>
              <div>

              <p>Bernd Ludwig</p>
              <Image className='first_img' src={'/images/steuerberater-bernd-ludwig.jpg'} width={300} height={500}></Image>
              </div>
              <div>

              <Image className='first_img' src={'/images/steuerberaterin-nicole-ludwig.jpg'} width={300} height={500}></Image>
              <p>Nicole Ludwig</p>
              </div>
            </div>
            {/* <div className="col-md-6 col-lg-4">
              <div className="box">
                <div className="icon-list-wrapper icon-dark">
                  <div className="icon-list-icon">
                    <span>
                      <img src="demo/svg/basic_gear_2.svg" alt="feature" />
                    </span>
                  </div>
                  <div className="icon-list-details">
                    <h4>Ludwig + Ludwig - ausgezeichnete Betreuung in Steuerfragen.</h4>
                    <p>
                      Easily choose layout &amp; color scheme by change CSS class,
                      including well commented code
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="box">
                <div className="icon-list-wrapper icon-dark">
                  <div className="icon-list-icon">
                    <span>
                      <img src="demo/svg/basic_tablet_2.svg" alt="feature" />
                    </span>
                  </div>
                  <div className="icon-list-details">
                    <h4>Mobile responsive</h4>
                    <p>
                      Compatible with Mobile devices, including iOS, Android and
                      cross browser compatibility
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="box">
                <div className="icon-list-wrapper icon-dark">
                  <div className="icon-list-icon">
                    <span>
                      <img
                        src="demo/svg/basic_elaboration_browser_check_2.svg"
                        alt="feature"
                      />
                    </span>
                  </div>
                  <div className="icon-list-details">
                    <h4>Code Quality</h4>
                    <p>
                      Clean and simple CSS, javascript which you can easily adapt
                      the item style to suit your needs
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="box">
                <div className="icon-list-wrapper icon-dark">
                  <div className="icon-list-icon">
                    <span>
                      <img src="demo/svg/basic_sheet_txt_2.svg" alt="feature" />
                    </span>
                  </div>
                  <div className="icon-list-details">
                    <h4>Well documented</h4>
                    <p>
                      Well documented which makes easy to understand and helps you
                      to place it on your website
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="box">
                <div className="icon-list-wrapper icon-dark">
                  <div className="icon-list-icon">
                    <span>
                      <img src="demo/svg/basic_headset_2.svg" alt="feature" />
                    </span>
                  </div>
                  <div className="icon-list-details">
                    <h4>Support help</h4>
                    <p>
                      Support Help via email, you can get the answers you need
                      quickly
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className=''></div> */}
          </div>
        </div>
      </div>
      {/* Demo */}
      <div id="scrollTo" className="section section-demo">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="box">
                <h2 className="section-title section-title-light">Predx</h2>
                <div className="divider divider-dark-color">
                  <span />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {/* <div className="col-md-6 col-xl-3">
              <div className="box">
                <div className="thumbnail-wrapper">
                  <div className="thumb-btn-wrapper">
                    <div className="thumb-btn-inner">
                      <div className="btn-vertical-mid">
                        <div className="button btn-light-custom">
                          <a href="01-default-light.html" target="_blank">
                            Light
                          </a>
                        </div>
                        <div className="button btn-dark-custom">
                          <a href="02-default-dark.html" target="_blank">
                            Dark
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <figure>
                    <img src="demo/images/thumbnail-01.jpg" alt="thumbnail" />
                  </figure>
                </div>
                <h4 className="thumb-title">Default</h4>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="box">
                <div className="thumbnail-wrapper">
                  <div className="thumb-btn-wrapper">
                    <div className="thumb-btn-inner">
                      <div className="btn-vertical-mid">
                        <div className="button btn-light-custom">
                          <a
                            href="03-default-with-separate-line-light.html"
                            target="_blank"
                          >
                            Light
                          </a>
                        </div>
                        <div className="button btn-dark-custom">
                          <a
                            href="04-default-with-separate-line-dark.html"
                            target="_blank"
                          >
                            Dark
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <figure>
                    <img src="demo/images/thumbnail-02.jpg" alt="thumbnail" />
                  </figure>
                </div>
                <h4 className="thumb-title">Default with separate line</h4>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="box">
                <div className="thumbnail-wrapper">
                  <a href="05-default-transparent.html" target="_blank">
                    <figure>
                      <img src="demo/images/thumbnail-03.jpg" alt="thumbnail" />
                    </figure>
                  </a>
                </div>
                <h4 className="thumb-title">Default transparent</h4>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="box">
                <div className="thumbnail-wrapper">
                  <a href="06-default-overlay-header.html" target="_blank">
                    <figure>
                      <img src="demo/images/thumbnail-04.jpg" alt="thumbnail" />
                    </figure>
                  </a>
                </div>
                <h4 className="thumb-title">Default overlay header</h4>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="box">
                <div className="thumbnail-wrapper">
                  <div className="thumb-btn-wrapper">
                    <div className="thumb-btn-inner">
                      <div className="btn-vertical-mid">
                        <div className="button btn-light-custom btn-sm-text">
                          <a href="47-navigation-menu-icons.html" target="_blank">
                            Main menu icons
                          </a>
                        </div>
                        <div className="button btn-dark-custom btn-sm-text">
                          <a href="48-dropdown-menu-icons.html" target="_blank">
                            Dropdown menu icons
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <figure>
                    <img src="demo/images/thumbnail-27.jpg" alt="thumbnail" />
                  </figure>
                </div>
                <h4 className="thumb-title">Horizontal Menu Icons</h4>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="box">
                <div className="thumbnail-wrapper">
                  <div className="thumb-btn-wrapper">
                    <div className="thumb-btn-inner">
                      <div className="btn-vertical-mid">
                        <div className="button btn-light-custom btn-sm-text">
                          <a
                            href="49-fullscreen-overlay-menu-icons.html"
                            target="_blank"
                          >
                            Fullscreen menu icons
                          </a>
                        </div>
                        <div className="button btn-color-custom btn-sm-text">
                          <a
                            href="50-sidebar-slide-menu-icons.html"
                            target="_blank"
                          >
                            Slide menu icons
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <figure>
                    <img src="demo/images/thumbnail-28.jpg" alt="thumbnail" />
                  </figure>
                </div>
                <h4 className="thumb-title">Overlay Menu Icons</h4>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="box">
                <div className="thumbnail-wrapper">
                  <div className="thumb-btn-wrapper">
                    <div className="thumb-btn-inner">
                      <div className="btn-vertical-mid">
                        <div className="button btn-light-custom">
                          <a href="43-mega-menu-light.html" target="_blank">
                            Light
                          </a>
                        </div>
                        <div className="button btn-dark-custom">
                          <a href="44-mega-menu-dark.html" target="_blank">
                            Dark
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <figure>
                    <img src="demo/images/thumbnail-25.jpg" alt="thumbnail" />
                  </figure>
                </div>
                <h4 className="thumb-title">Mega Menu</h4>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="box">
                <div className="thumbnail-wrapper">
                  <div className="thumb-btn-wrapper">
                    <div className="thumb-btn-inner">
                      <div className="btn-vertical-mid">
                        <div className="button btn-light-custom">
                          <a
                            href="45-mega-menu-fullwidth-light.html"
                            target="_blank"
                          >
                            Light
                          </a>
                        </div>
                        <div className="button btn-dark-custom">
                          <a
                            href="46-mega-menu-fullwidth-dark.html"
                            target="_blank"
                          >
                            Dark
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <figure>
                    <img src="demo/images/thumbnail-26.jpg" alt="thumbnail" />
                  </figure>
                </div>
                <h4 className="thumb-title">Mega Menu Fullwidth</h4>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="box">
                <div className="thumbnail-wrapper">
                  <div className="thumb-btn-wrapper">
                    <div className="thumb-btn-inner">
                      <div className="btn-vertical-mid">
                        <div className="button btn-light-custom">
                          <a href="07-center-1-light.html" target="_blank">
                            Light
                          </a>
                        </div>
                        <div className="button btn-dark-custom">
                          <a href="08-center-1-dark.html" target="_blank">
                            Dark
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <figure>
                    <img src="demo/images/thumbnail-05.jpg" alt="thumbnail" />
                  </figure>
                </div>
                <h4 className="thumb-title">Center 1</h4>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="box">
                <div className="thumbnail-wrapper">
                  <div className="thumb-btn-wrapper">
                    <div className="thumb-btn-inner">
                      <div className="btn-vertical-mid">
                        <div className="button btn-light-custom">
                          <a
                            href="09-center-1-with-separate-line-light.html"
                            target="_blank"
                          >
                            Light
                          </a>
                        </div>
                        <div className="button btn-dark-custom">
                          <a
                            href="10-center-1-with-separate-line-dark.html"
                            target="_blank"
                          >
                            Dark
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <figure>
                    <img src="demo/images/thumbnail-06.jpg" alt="thumbnail" />
                  </figure>
                </div>
                <h4 className="thumb-title">Center 1 with separate line</h4>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="box">
                <div className="thumbnail-wrapper">
                  <a href="11-center-1-transparent.html" target="_blank">
                    <figure>
                      <img src="demo/images/thumbnail-07.jpg" alt="thumbnail" />
                    </figure>
                  </a>
                </div>
                <h4 className="thumb-title">Center 1 transparent</h4>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="box">
                <div className="thumbnail-wrapper">
                  <a href="12-center-1-overlay-header.html" target="_blank">
                    <figure>
                      <img src="demo/images/thumbnail-08.jpg" alt="thumbnail" />
                    </figure>
                  </a>
                </div>
                <h4 className="thumb-title">Center 1 overlay header</h4>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="box">
                <div className="thumbnail-wrapper">
                  <div className="thumb-btn-wrapper">
                    <div className="thumb-btn-inner">
                      <div className="btn-vertical-mid">
                        <div className="button btn-light-custom">
                          <a href="13-center-2-light.html" target="_blank">
                            Light
                          </a>
                        </div>
                        <div className="button btn-dark-custom">
                          <a href="14-center-2-dark.html" target="_blank">
                            Dark
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <figure>
                    <img src="demo/images/thumbnail-09.jpg" alt="thumbnail" />
                  </figure>
                </div>
                <h4 className="thumb-title">Center 2</h4>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="box">
                <div className="thumbnail-wrapper">
                  <div className="thumb-btn-wrapper">
                    <div className="thumb-btn-inner">
                      <div className="btn-vertical-mid">
                        <div className="button btn-light-custom">
                          <a
                            href="15-center-2-with-separate-line-light.html"
                            target="_blank"
                          >
                            Light
                          </a>
                        </div>
                        <div className="button btn-dark-custom">
                          <a
                            href="16-center-2-with-separate-line-dark.html"
                            target="_blank"
                          >
                            Dark
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <figure>
                    <img src="demo/images/thumbnail-10.jpg" alt="thumbnail" />
                  </figure>
                </div>
                <h4 className="thumb-title">Center 2 with separate line</h4>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="box">
                <div className="thumbnail-wrapper">
                  <a href="17-center-2-transparent.html" target="_blank">
                    <figure>
                      <img src="demo/images/thumbnail-11.jpg" alt="thumbnail" />
                    </figure>
                  </a>
                </div>
                <h4 className="thumb-title">Center 2 transparent</h4>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="box">
                <div className="thumbnail-wrapper">
                  <a href="18-center-2-overlay-header.html" target="_blank">
                    <figure>
                      <img src="demo/images/thumbnail-12.jpg" alt="thumbnail" />
                    </figure>
                  </a>
                </div>
                <h4 className="thumb-title">Center 2 overlay header</h4>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="box">
                <div className="thumbnail-wrapper">
                  <div className="thumb-btn-wrapper">
                    <div className="thumb-btn-inner">
                      <div className="btn-vertical-mid">
                        <div className="button btn-light-custom">
                          <a
                            href="19-fullscreen-overlay-light.html"
                            target="_blank"
                          >
                            Light
                          </a>
                        </div>
                        <div className="button btn-dark-custom">
                          <a href="20-fullscreen-overlay-dark.html" target="_blank">
                            Dark
                          </a>
                        </div>
                        <div className="button btn-color-custom">
                          <a
                            href="21-fullscreen-overlay-background-color.html"
                            target="_blank"
                          >
                            Background Color
                          </a>
                        </div>
                        <div className="button btn-img-custom">
                          <a
                            href="22-fullscreen-overlay-background-image.html"
                            target="_blank"
                          >
                            Background Image
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <figure>
                    <img src="demo/images/thumbnail-13.jpg" alt="thumbnail" />
                  </figure>
                </div>
                <h4 className="thumb-title">Fullscreen overlay</h4>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="box">
                <div className="thumbnail-wrapper">
                  <div className="thumb-btn-wrapper">
                    <div className="thumb-btn-inner">
                      <div className="btn-vertical-mid">
                        <div className="button btn-light-custom">
                          <a
                            href="23-fullscreen-overlay-center-light.html"
                            target="_blank"
                          >
                            Light
                          </a>
                        </div>
                        <div className="button btn-dark-custom">
                          <a
                            href="24-fullscreen-overlay-center-dark.html"
                            target="_blank"
                          >
                            Dark
                          </a>
                        </div>
                        <div className="button btn-color-custom">
                          <a
                            href="25-fullscreen-overlay-center-background-color.html"
                            target="_blank"
                          >
                            Background Color
                          </a>
                        </div>
                        <div className="button btn-img-custom">
                          <a
                            href="26-fullscreen-overlay-center-background-image.html"
                            target="_blank"
                          >
                            Background Image
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <figure>
                    <img src="demo/images/thumbnail-14.jpg" alt="thumbnail" />
                  </figure>
                </div>
                <h4 className="thumb-title">Fullscreen overlay center</h4>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="box">
                <div className="thumbnail-wrapper">
                  <div className="thumb-btn-wrapper">
                    <div className="thumb-btn-inner">
                      <div className="btn-vertical-mid">
                        <div className="button btn-light-custom">
                          <a
                            href="51-fullscreen-overlay-vertical-submenu-light.html"
                            target="_blank"
                          >
                            Light
                          </a>
                        </div>
                        <div className="button btn-dark-custom">
                          <a
                            href="52-fullscreen-overlay-vertical-submenu-dark.html"
                            target="_blank"
                          >
                            Dark
                          </a>
                        </div>
                        <div className="button btn-color-custom">
                          <a
                            href="53-fullscreen-overlay-vertical-submenu-background-color.html"
                            target="_blank"
                          >
                            Background Color
                          </a>
                        </div>
                        <div className="button btn-img-custom">
                          <a
                            href="54-fullscreen-overlay-vertical-submenu-background-image.html"
                            target="_blank"
                          >
                            Background Image
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <figure>
                    <img src="demo/images/thumbnail-13.jpg" alt="thumbnail" />
                  </figure>
                </div>
                <h4 className="thumb-title">
                  Fullscreen overlay with vertical submenu
                </h4>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="box">
                <div className="thumbnail-wrapper">
                  <div className="thumb-btn-wrapper">
                    <div className="thumb-btn-inner">
                      <div className="btn-vertical-mid">
                        <div className="button btn-light-custom">
                          <a
                            href="55-fullscreen-overlay-center-vertical-submenu-light.html"
                            target="_blank"
                          >
                            Light
                          </a>
                        </div>
                        <div className="button btn-dark-custom">
                          <a
                            href="56-fullscreen-overlay-center-vertical-submenu-dark.html"
                            target="_blank"
                          >
                            Dark
                          </a>
                        </div>
                        <div className="button btn-color-custom">
                          <a
                            href="57-fullscreen-overlay-center-vertical-submenu-background-color.html"
                            target="_blank"
                          >
                            Background Color
                          </a>
                        </div>
                        <div className="button btn-img-custom">
                          <a
                            href="58-fullscreen-overlay-center-vertical-submenu-background-image.html"
                            target="_blank"
                          >
                            Background Image
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <figure>
                    <img src="demo/images/thumbnail-14.jpg" alt="thumbnail" />
                  </figure>
                </div>
                <h4 className="thumb-title">
                  Fullscreen overlay center with vertical submenu
                </h4>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="box">
                <div className="thumbnail-wrapper">
                  <div className="thumb-btn-wrapper">
                    <div className="thumb-btn-inner">
                      <div className="btn-vertical-mid">
                        <div className="button btn-light-custom">
                          <a
                            href="27-sidebar-slide-menu-light.html"
                            target="_blank"
                          >
                            Light
                          </a>
                        </div>
                        <div className="button btn-dark-custom">
                          <a href="28-sidebar-slide-menu-dark.html" target="_blank">
                            Dark
                          </a>
                        </div>
                        <div className="button btn-color-custom">
                          <a
                            href="29-sidebar-slide-menu-background-color.html"
                            target="_blank"
                          >
                            Background Color
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <figure>
                    <img src="demo/images/thumbnail-15.jpg" alt="thumbnail" />
                  </figure>
                </div>
                <h4 className="thumb-title">Sidebar slide menu</h4>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="box">
                <div className="thumbnail-wrapper">
                  <div className="thumb-btn-wrapper">
                    <div className="thumb-btn-inner">
                      <div className="btn-vertical-mid">
                        <div className="button btn-light-custom">
                          <a
                            href="59-fixed-sidebar-menu-light.html"
                            target="_blank"
                          >
                            Light
                          </a>
                        </div>
                        <div className="button btn-dark-custom">
                          <a href="60-fixed-sidebar-menu-dark.html" target="_blank">
                            Dark
                          </a>
                        </div>
                        <div className="button btn-color-custom">
                          <a
                            href="61-fixed-sidebar-menu-background-color.html"
                            target="_blank"
                          >
                            Background Color
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <figure>
                    <img src="demo/images/thumbnail-29.jpg" alt="thumbnail" />
                  </figure>
                </div>
                <h4 className="thumb-title">
                  Fixed sidebar left menu<span>New</span>
                </h4>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="box">
                <div className="thumbnail-wrapper">
                  <div className="thumb-btn-wrapper">
                    <div className="thumb-btn-inner">
                      <div className="btn-vertical-mid">
                        <div className="button btn-light-custom">
                          <a
                            href="62-fixed-sidebar-menu-right-light.html"
                            target="_blank"
                          >
                            Light
                          </a>
                        </div>
                        <div className="button btn-dark-custom">
                          <a
                            href="63-fixed-sidebar-menu-right-dark.html"
                            target="_blank"
                          >
                            Dark
                          </a>
                        </div>
                        <div className="button btn-color-custom">
                          <a
                            href="64-fixed-sidebar-menu-right-background-color.html"
                            target="_blank"
                          >
                            Background Color
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <figure>
                    <img src="demo/images/thumbnail-30.jpg" alt="thumbnail" />
                  </figure>
                </div>
                <h4 className="thumb-title">
                  Fixed sidebar right menu<span>New</span>
                </h4>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="box">
                <div className="thumbnail-wrapper coming-soon">
                  <img src="demo/images/thumbnail-16.jpg" alt="thumbnail" />
                </div>
              </div>
            </div> */}
            <div className='con_col'>
              <h2 style={{textAlign: "center"}} className='ludwig_title'>Ludwig + Ludwig - ausgezeichnete Betreuung in Steuerfragen.</h2>
              <div className='con_row mx_w'>
                <div className='md_x'>
                  <p>
                  Wir unterstützen Sie bei allen steuerlichen Fragen, ob als Gründer, Privatperson oder bestehendes Unternehmen. Wir sind für Sie in Bad Kissingen und Gerolzhofen als Steuerberater und als landwirtschaftliche Buchstelle tätig und beantworten Ihnen alle Fragen, die das deutsche Steuerrecht betreffen. Die betriebswirtschaftliche Beratung ist die Voraussetzung für Ihren unternehmerischen Erfolg und ergänzt unser Beratungskonzept. Unser Team aus engagierten Mitarbeitern setzt sich mit Begeisterung und Fachkompetenz für Sie ein.
                  </p>
                </div>
                <div className='md_y'>
                  <p>
                  Unsere Dienstleistung beginnt damit, die Steuerlast Ihres Unternehmens auf ein Minimum zu senken! Wir können aber noch viel mehr für Sie leisten. So bietet Ihnen unsere Steuerkanzlei in Gerolzhofen und Bad Kissingen die Sicherheit, alle gesetzlichen Pflichten erfüllt zu haben. Sie haben somit die Gewissheit, dass nichts vergessen wird und alles seine Richtigkeit hat. Wir halten Ihnen den Rücken frei und unterstützen Sie, wo wir können. Sie können sich dadurch auf das Wesentliche konzentrieren und sparen Zeit.
                  </p>
                </div>
              </div>
                <span className='kanzlei'></span>
            </div>
          </div>
        </div>
      </div>
      {/* Hover transitions */}
      <div className="section section-hover-transitions">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="box">
                <h2 className="section-title section-title-light">
                  Standorte
                </h2>
                <div className="divider divider-dark">
                  <span />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-xl-3">
              <div className="box">
                <div className="thumbnail-wrapper">
                  <a
                    href="30-navigation-menu-hover-transition-1.html"
                    target="_blank"
                  >
                    <figure>
                      <img src="../images/wuerzburg.jpg" alt="thumbnail" />
                    </figure>
                  </a>
                </div>
                <h4 className="thumb-title">wuerzburg</h4>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="box">
                <div className="thumbnail-wrapper">
                  <a
                    href="31-navigation-menu-hover-transition-2.html"
                    target="_blank"
                  >
                    <figure>
                      <img src="../images/bad-kissingen.jpg" alt="thumbnail" />
                    </figure>
                  </a>
                </div>
                <h4 className="thumb-title">bad kissingen</h4>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="box">
                <div className="thumbnail-wrapper">
                  <a
                    href="32-navigation-menu-hover-transition-3.html"
                    target="_blank"
                  >
                    <figure>
                      <img src="../images/schweinfurt.jpg" alt="thumbnail" />
                    </figure>
                  </a>
                </div>
                <h4 className="thumb-title">schweinfurt</h4>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="box">
                <div className="thumbnail-wrapper">
                  <a
                    href="33-navigation-menu-hover-transition-4.html"
                    target="_blank"
                  >
                    <figure>
                      <img src="../images/wuerzburg.jpg" alt="thumbnail" />
                    </figure>
                  </a>
                </div>
                <h4 className="thumb-title">wuerzburg</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Dropdown menu */}
      <div className="section section-dropdown-menu">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="box">
                {/* <h2 className="section-title section-title-light">Dropdown menu</h2> */}
                <div className="divider divider-dark-color">
                  <span />
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-9 con_row">
              <div className="box1">

                {/* <div className="row">
                  <div className="col-md-6 col-xl-4">
                    <div className="box">
                      <div className="thumbnail-wrapper">
                        <div className="thumb-btn-wrapper">
                          <div className="thumb-btn-inner">
                            <div className="btn-vertical-mid">
                              <div className="button btn-light-custom">
                                <a
                                  href="34-dropdown-menu-minimal-light.html"
                                  target="_blank"
                                >
                                  Light
                                </a>
                              </div>
                              <div className="button btn-dark-custom">
                                <a
                                  href="35-dropdown-menu-minimal-dark.html"
                                  target="_blank"
                                >
                                  Dark
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <figure>
                          <img src="../images/wuerzburg.jpg" alt="thumbnail" />
                        </figure>
                      </div>
                      <h4 className="thumb-title">Minimal</h4>
                    </div>
                  </div>
                  <div className="col-md-6 col-xl-4">
                    <div className="box">
                      <div className="thumbnail-wrapper">
                        <div className="thumb-btn-wrapper">
                          <div className="thumb-btn-inner">
                            <div className="btn-vertical-mid">
                              <div className="button btn-light-custom">
                                <a
                                  href="36-dropdown-with-top-border-light.html"
                                  target="_blank"
                                >
                                  Light
                                </a>
                              </div>
                              <div className="button btn-dark-custom">
                                <a
                                  href="37-dropdown-with-top-border-dark.html"
                                  target="_blank"
                                >
                                  Dark
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <figure>
                          <img src="../images/wuerzburg.jpg" alt="thumbnail" />
                        </figure>
                      </div>
                      <h4 className="thumb-title">Dropdown with top border</h4>
                    </div>
                  </div>
                  <div className="col-md-6 col-xl-4">
                    <div className="box">
                      <div className="thumbnail-wrapper">
                        <div className="thumb-btn-wrapper">
                          <div className="thumb-btn-inner">
                            <div className="btn-vertical-mid">
                              <div className="button btn-light-custom">
                                <a
                                  href="38-dropdown-with-separate-line-light.html"
                                  target="_blank"
                                >
                                  Light
                                </a>
                              </div>
                              <div className="button btn-dark-custom">
                                <a
                                  href="39-dropdown-with-separate-line-dark.html"
                                  target="_blank"
                                >
                                  Dark
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <figure>
                          <img src="../images/wuerzburg.jpg" alt="thumbnail" />
                        </figure>
                      </div>
                      <h4 className="thumb-title">Dropdown with separate line</h4>
                    </div>
                  </div>
                  <div className="col-md-6 col-xl-4">
                    <div className="box">
                      <div className="thumbnail-wrapper">
                        <a
                          href="40-dropdown-menu-transition-fade.html"
                          target="_blank"
                        >
                          <figure>
                            <img
                              src="../images/wuerzburg.jpg"
                              alt="thumbnail"
                            />
                          </figure>
                        </a>
                      </div>
                      <h4 className="thumb-title">Transition fade</h4>
                    </div>
                  </div>
                  <div className="col-md-6 col-xl-4">
                    <div className="box">
                      <div className="thumbnail-wrapper">
                        <a
                          href="41-dropdown-menu-transition-scale.html"
                          target="_blank"
                        >
                          <figure>
                            <img
                              src="../images/wuerzburg.jpg"
                              alt="thumbnail"
                            />
                          </figure>
                        </a>
                      </div>
                      <h4 className="thumb-title">Transition scale</h4>
                    </div>
                  </div>
                  <div className="col-md-6 col-xl-4">
                    <div className="box">
                      <div className="thumbnail-wrapper">
                        <a
                          href="42-dropdown-menu-transition-flip.html"
                          target="_blank"
                        >
                          <figure>
                            <img
                              src="../images/wuerzburg.jpg"
                              alt="thumbnail"
                            />
                          </figure>
                        </a>
                      </div>
                      <h4 className="thumb-title">Transition flip</h4>
                    </div>
                  </div>
                </div> */}
                <Lottie style={{width: '100%', height: '400px'}} animationData={animationData1}/>
              </div>
              <div className="box1">

                {/* <div className="row">
                  <div className="col-md-6 col-xl-4">
                    <div className="box">
                      <div className="thumbnail-wrapper">
                        <div className="thumb-btn-wrapper">
                          <div className="thumb-btn-inner">
                            <div className="btn-vertical-mid">
                              <div className="button btn-light-custom">
                                <a
                                  href="34-dropdown-menu-minimal-light.html"
                                  target="_blank"
                                >
                                  Light
                                </a>
                              </div>
                              <div className="button btn-dark-custom">
                                <a
                                  href="35-dropdown-menu-minimal-dark.html"
                                  target="_blank"
                                >
                                  Dark
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <figure>
                          <img src="../images/wuerzburg.jpg" alt="thumbnail" />
                        </figure>
                      </div>
                      <h4 className="thumb-title">Minimal</h4>
                    </div>
                  </div>
                  <div className="col-md-6 col-xl-4">
                    <div className="box">
                      <div className="thumbnail-wrapper">
                        <div className="thumb-btn-wrapper">
                          <div className="thumb-btn-inner">
                            <div className="btn-vertical-mid">
                              <div className="button btn-light-custom">
                                <a
                                  href="36-dropdown-with-top-border-light.html"
                                  target="_blank"
                                >
                                  Light
                                </a>
                              </div>
                              <div className="button btn-dark-custom">
                                <a
                                  href="37-dropdown-with-top-border-dark.html"
                                  target="_blank"
                                >
                                  Dark
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <figure>
                          <img src="../images/wuerzburg.jpg" alt="thumbnail" />
                        </figure>
                      </div>
                      <h4 className="thumb-title">Dropdown with top border</h4>
                    </div>
                  </div>
                  <div className="col-md-6 col-xl-4">
                    <div className="box">
                      <div className="thumbnail-wrapper">
                        <div className="thumb-btn-wrapper">
                          <div className="thumb-btn-inner">
                            <div className="btn-vertical-mid">
                              <div className="button btn-light-custom">
                                <a
                                  href="38-dropdown-with-separate-line-light.html"
                                  target="_blank"
                                >
                                  Light
                                </a>
                              </div>
                              <div className="button btn-dark-custom">
                                <a
                                  href="39-dropdown-with-separate-line-dark.html"
                                  target="_blank"
                                >
                                  Dark
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <figure>
                          <img src="../images/wuerzburg.jpg" alt="thumbnail" />
                        </figure>
                      </div>
                      <h4 className="thumb-title">Dropdown with separate line</h4>
                    </div>
                  </div>
                  <div className="col-md-6 col-xl-4">
                    <div className="box">
                      <div className="thumbnail-wrapper">
                        <a
                          href="40-dropdown-menu-transition-fade.html"
                          target="_blank"
                        >
                          <figure>
                            <img
                              src="../images/wuerzburg.jpg"
                              alt="thumbnail"
                            />
                          </figure>
                        </a>
                      </div>
                      <h4 className="thumb-title">Transition fade</h4>
                    </div>
                  </div>
                  <div className="col-md-6 col-xl-4">
                    <div className="box">
                      <div className="thumbnail-wrapper">
                        <a
                          href="41-dropdown-menu-transition-scale.html"
                          target="_blank"
                        >
                          <figure>
                            <img
                              src="../images/wuerzburg.jpg"
                              alt="thumbnail"
                            />
                          </figure>
                        </a>
                      </div>
                      <h4 className="thumb-title">Transition scale</h4>
                    </div>
                  </div>
                  <div className="col-md-6 col-xl-4">
                    <div className="box">
                      <div className="thumbnail-wrapper">
                        <a
                          href="42-dropdown-menu-transition-flip.html"
                          target="_blank"
                        >
                          <figure>
                            <img
                              src="../images/wuerzburg.jpg"
                              alt="thumbnail"
                            />
                          </figure>
                        </a>
                      </div>
                      <h4 className="thumb-title">Transition flip</h4>
                    </div>
                  </div>
                </div> */}
                <Lottie style={{width: '100%', height: '900px'}} animationData={animationData}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Content_boy