import React from 'react'
import Button from '../Button'

function RightSide() {
  return (



          <div className="flex-1">
              <div className="
              float-right
            w-[340px]
            text-center
            mt-[77px] mb-[24px]
              onMount-appear-done onMount-enter-done">
                  <div className="
                  text-center
                  relative
                   w-[340px] h-[450px]
                   p-[16px]
                   rounded-8 bg-primaryBg border border-border
                   onMount-appear-done onMount-enter-done">
                      <div className="lazyload-wrapper">
                          <img className="" src="//assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/_next/static/media/stocks.f1bfa5c8.svg" width="180" height="190" alt="Groww" loading="lazy" />
                      </div>
                      <div className="text-base leading-6 tracking-tighter font-[400px] text-subText">Open a free Demat account in minutes to start investing in stocks.</div>
                      <div className="
                        absolute
                        bottom-[16px]
                        w-[calc(100%-32px)]
                      ">
                          <div className="">
                              <Button />
                          </div>
                      </div>
                  </div>
              </div>
              <div>
                  <div className="
                  border border-border min-w-[348px] mb-34 rounded-5
                  float-right onMount-appear-done onMount-enter-done">
                      <div className="
                      flex justify-between border-b border-border py-2 px-3 items-center
                      ">
                          <div className="text-base font-medium capitalize tracking-tighter leading-6">top gainers</div>
                          <a className="
                          h-6 w-6 cursor-pointer text-primaryClr no-underline
                          " href="/markets/top-gainers">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6">
                                  <g fill="none" fillRule="evenodd">
                                      <circle cx="12" cy="12" r="12" fill="#00D09C"></circle>
                                      <path fill="#FFF" stroke="#FFF" strokeLinecap="round" strokeLinejoin="round" d="M12 17.455H6.545V12L12 17.455zm0-10.91h5.455V12L12 6.545z"></path>
                                      <path stroke="#FFF" strokeLinecap="square" strokeWidth="2" d="M9.025 14.975l5.95-5.95"></path>
                                  </g>
                              </svg>
                          </a>
                      </div>
                      <div className="">
                          <div className="
                          border-b border-subText70
                           onMount-appear-done onMount-enter-done">
                              <a className="" href="/stocks/one-communications-ltd">
                                  <div className="
                                  text-base text-text tracking-tighter py-2 px-3 flex items-center justify-between
                                  ">
                                      <div className="tracking-[.16px]">Paytm</div>
                                      <div className="font-medium flex flex-col items-end w-[110px]">
                                          <span className="text-text text-base">₹854.75</span>
                                          <span className="mt-[5px] flex font-[12px] text-primaryClr">
                                              <span>48.00</span>
                                              <span className="ml-5">(5.95%)</span>
                                          </span>
                                      </div>
                                  </div>
                              </a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
  )
}

export default RightSide