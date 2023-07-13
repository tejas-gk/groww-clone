import React from 'react'
import Button from './Button'

function Navbar() {
  return (
      <div>
          <div className="mx-auto z-1000 w-full m-0 min-h-79 onMount-appear-done onMount-enter-done border-b border-border">
              <div className="fixed top-0 left-0 w-full h-full z-50 animate-rodal-fade-leave hidden animate-none duration-300 rodal-background bg-constantHalfTransparent"  style={{ display: "none", animationDuration: "300ms" }}>
                  <div className="rodal-mask"></div>
                  <div className="rodal-dialog rodal-zoom-leave" style={{ width: "900px", height: "240px", animationDuration: "300ms" }}>
                      <div className="child-wrapper lpw107LoginPopupWrapper">
                          <span className="rodal-close" data-test-id="rodal-close-icon"></span>
                      </div>
                  </div>
              </div>
              <div className="container max-w-[1110px] w-full mx-auto">
                  <div className="w-[33.33%] md:w-full max-w-full">
                      <div className="w-full mx-auto min-h-[1px] float-left">
                          <div className="col l12 w-full ml-auto" style={{ minHeight: "81px" }}>
                              <div className="col l5 absolute-center hdGrowwLogoDiv">
                                  <div style={{ marginLeft: "-2px" }}>
                                      <a href="/#">
                                          <div className="valign-wrapper pos-rel"  itemType="http://schema.org/Brand" style={{ minWidth: "150px", minHeight: "79px" }}>
                                              <img className="" src="https://storage.googleapis.com/groww-assets/web-assets/img/website-logo/logo-dark-groww.svg" width="148" height="40" alt="Groww Logo" />
                                          </div>
                                      </a>
                                  </div>
                              </div>
                              <div className="col l7 hdQuickLinks valign-wrapper">
                                  <div className="hdQuickLabel" style={{ minWidth: "91px" }}></div>
                                  <div className="hdQuickLabel" style={{ minWidth: "91px" }}></div>
                              </div>
                          </div>
                      </div>
                      <div className="col l8">
                          <div className="col l12">
                              <div className="col l8">
                                  <div className="col l12 absolute-center pos-rel gsc23SearchDiv">
                                      <div id="searchWrapperElem23" className="gsc23SearchWidth">
                                          <div className="pos-rel">
                                              <div id="globalSearch23-searchMainDivId" className="valign-wrapper pos-rel fs16 se27SeSearchMainDiv card">
                                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="24" width="24" className="pos-rel se27SeIcon se27SeSearch">
                                                      <path d="M0 0h24v24H0z" fill="none"></path>
                                                      <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                                                  </svg>
                                                  <div className="c-jCqGRU c-jCqGRU-cwHiVH-variant-unstyled">
                                                      <div className="c-UazGY">
                                                          <input className="c-kDbNPa fw400 fs16" id="globalSearch23" placeholder="What are you looking for today?" autoComplete="off" value="" style={{ outline: "0px", border: "0px" }} />
                                                      </div>
                                                  </div>
                                                  <div className="se27SeSearchRightMargin"></div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="col l4">
                              <div className="col l12" style={{ minHeight: "79px" }}>
                                  <div className="col l12 valign-wrapper" style={{ minHeight: "79px", justifyContent: "flex-end" }}>
                                      <div style={{ minWidth: "115px", minHeight: "45px" }}>
                                          <div className="onMount-appear-done onMount-enter-done">
                                              <div className="">
                                                  <Button text='Login/Register' />
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

    </div>
  )
}

export default Navbar