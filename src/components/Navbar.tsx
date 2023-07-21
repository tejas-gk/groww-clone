import React from 'react'

function Navbar() {
  return (
    <div className='border-b border-gray-300 z-10 w-full my-0 min-h-79
    '>
      
      <div className='rodal
    hidden bg-constantHalfTransparent duration-300
    fixed
'> 
        {/* TODO:this rodal part */}
      </div>




      <div className="container w-full max-w-[1110px] mx-0 my-auto">
        <div className="float-left ml-auto w-full md:min-h-[1px]">
          <div className="w-1/3 mx-auto float-left min-h-[1px] md:border-box">
            <div className="w-full mx-auto float-left border-box " style={{ minHeight: '81px' }}>
              <div className="mx-auto float-left w-[41.66667%]  min-h-[1px] flex justify-left">
                <div style={{ marginLeft: '-2px' }}>
                  <a href="/#">
                    <div className="flex items-center relative"  style={{ minWidth: '150px', minHeight: '79px' }}>
                      <img className="" src="https://storage.googleapis.com/groww-assets/web-assets/img/website-logo/logo-dark-groww.svg" width="148" height="40" alt="Groww Logo" />
                    </div>
                  </a>
                </div>
              </div>
              <div className="col l7 hdQuickLinks valign-wrapper">
                <div className="hdQuickLabel" style={{ minWidth: '91px' }}></div>
                <div className="hdQuickLabel" style={{ minWidth: '91px' }}></div>
              </div>
            </div>
          </div>
          <div className="col l8">
            <div className="col l12">
              <div className="col l8">
                <div className="col l12 absolute-center pos-rel gsc23SearchDiv">
                  <div id="searchWrapperElem23" className="gsc23SearchWidth" style={{ zIndex: 'auto' }}>
                    <div className="pos-rel ">
                      <div id="globalSearch23-searchMainDivId" className="valign-wrapper pos-rel fs16 se27SeSearchMainDiv card " style={{ borderRadius: '8px' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="24" width="24" className="pos-rel se27SeIcon se27SeSearch">
                          <path d="M0 0h24v24H0z" fill="none"></path>
                          <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                        </svg>
                        <div className="c-jCqGRU c-jCqGRU-cwHiVH-variant-unstyled">
                          <div className="c-UazGY">
                            <input className="c-kDbNPa fw400 fs16" id="globalSearch23" placeholder="What are you looking for today?" autoComplete="off" value="" style={{ outline: '0px', border: '0px' }} />
                          </div>
                        </div>
                        <div className="se27SeSearchRightMargin"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col l4">
            <div className="col l12" style={{ minHeight: '79px' }}>
              <div className="col l12 valign-wrapper" style={{ minHeight: '79px', justifyContent: 'flex-end' }}>
                <div style={{ minWidth: '115px', minHeight: '45px' }}>
                  <div className="onMount-appear-done onMount-enter-done">
                    <div className="">
                      <div className="btn51Btn btn51RipplePrimary btn51Primary" style={{ width: '175px', height: '45px', fontSize: '16px' }}>
                        <div className="absolute-center btn51ParentDimension">
                          <span className="absolute-center" style={{ padding: '0px 25px' }}><span>Login/Register</span></span>
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