import Link from 'next/link';
import React from 'react'
import { FaEnvelope, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FaYoutube } from "react-icons/fa6";
import { FaLocationDot, FaSquareXTwitter } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";


const Footer = () => {
  return (
    <>
      <footer>
        <div className='footer-container'>
          <div className='__mainContainer'>
            <div className="flex flex-wrap gap-7 max-w-[1140px] mx-auto">
              <div className='w-full sm:w-[calc(50%-14px)] md:w-[calc(33.33%-18.67px)] lg:w-[calc(33.33%-18.67px)] my-[0px] sm:my-[50px] md:my-[100px]'>
                <div className='__ttcmColum'>
                  <h5>Store Information</h5>
                  <ul>
                    <li className='__snpxD mb-4 '>
                      <span className='pt-1.5 leading-normal'><FaLocationDot /></span>
                      <div> 361/14 Tarana, District Ujjain <br/> Madhya Pradesh India, 456665 </div>
                    </li>

                    <li className='__snpxD mb-4 '>
                      <span className='pt-1.5 leading-normal'><IoIosCall /></span>
                      <div> <Link href='tel:+91 9244228801'> +91 9244228801 </Link> </div>
                    </li>

                    <li className='__snpxD mb-4 '>
                      <span className='pt-1.5 leading-normal'><FaEnvelope /></span>
                      <div> <Link href='mailto:info@synergyoversea.com'> info@synergyoversea.com </Link> </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='w-full sm:w-[calc(50%-14px)] md:w-[calc(25.33%-18.67px)] lg:w-[calc(33.33%-18.67px)] my-[0px] sm:my-[50px] md:my-[100px]'>
                <div className='__ttcmColum'>
                  <h5>Extras</h5>

                  <ul>
                    <li className='__snpxD '>
                      <div><Link href='/contacts'> Enquiry </Link> </div>
                    </li>

                    <li className='__snpxD '>
                      <div><Link href='/certificates'> Certificates </Link> </div>
                    </li>

                    <li className='__snpxD '>
                      <div><Link href='/blogs'> Blogs </Link> </div>
                    </li>

                    <li className='__snpxD '>
                      <div><Link href='#'>Specials</Link> </div>
                    </li>

                    <li className='__snpxD '>
                      <div><Link href='#'>Site Map</Link> </div>
                    </li>

                    <li className='__snpxD '>
                      <div><Link href='/contacts'>Contact Us</Link> </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='w-full md:w-[calc(41.33%-18.67px)] lg:w-[calc(33.33%-18.67px)] mb-[50px] md:mb-[100px]'>
                <div className='newletter-subscribe'>
                  <div className='newletter-container'>
                    <div className='nww_bx'>
                      <div className='newletter-title'>
                        <h2 className='tt-title'>Sign Up For Newsletter</h2>
                        <p className='newsletter-desc'>Wants to get latest updates! sign up for free.</p>
                      </div>
                      <div className='box-content newleter-content'>
                        <div id='form_subscribe'>
                          <form id='subscribe'>
                            <input type="text" placeholder='Your email address' name='subscribe_email' id='subscribe_email' autoComplete='off' />

                            <Link href='' className='btn'><span>Subscribe</span></Link>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='footer-bottom'>
          <div className='__mainContainer'>
            <div className="flex items-center">
              <div className="w-1/2">
                <p> Powered By <Link href='https://www.synergyoversea.com/'> synergyoversea.com </Link> © 2025</p>
              </div>

              <div className="w-1/2">
                <div className='follow-us'>
                  <ul className='flex justify-end items-center'>
                    <li className='facebook'><Link href='#'target='_blank'><FaYoutube /></Link></li>
                    <li className='facebook'><Link href='#'target='_blank'><FaFacebookF /></Link></li>
                    <li className='twitter'><Link href='#'target='_blank'><FaSquareXTwitter /></Link></li>
                    <li className='instagram'><Link href='#'target='_blank'><FaInstagram /></Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer