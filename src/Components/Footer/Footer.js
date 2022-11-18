import React from 'react';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaFacebookF, FaHome } from 'react-icons/fa';
import { IoMdCall } from 'react-icons/io';
import { MdEmail, MdOutlineWifi } from 'react-icons/md';
import { TiSocialGooglePlus } from 'react-icons/ti';

const Footer = () => {
    return (
        <div className='bg-[#EFE6DA] pt-16' style={{ fontFamily: "Merienda" }}>
            <div>
                <div className='main flex justify-between space-x-6 '>
                    {/* 1  */}
                    <div className='w-1/4'>
                        <h3 className='footer-title'>About Us</h3>
                        <p className='pragraph mb-4'>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.</p>
                        <ul>
                            <li className='fooList-fl pragraph'><MdEmail className=' mt-1 mr-2 text-2xl' />hello@mtheme.org</li>
                            <li className='fooList-fl pragraph'><IoMdCall className=' mt-1 mr-2 text-2xl' />+(84)123456789</li>
                            <li className='fooList-fl pragraph'><FaHome className=' mt-1 mr-2 text-2xl' />198 West 21th Street, Suite 721 New York NY 10010</li>
                        </ul>
                    </div>
                    {/* 2  */}
                    <div className='w-1/4'>
                        <h3 className='footer-title'>For Business</h3>
                        <ul>
                            <li className='fooList-fl pragraph'>Office Coffee</li>
                            <li className='fooList-fl pragraph'>Food Service</li>
                            <li className='fooList-fl pragraph'>Affiliate Program</li>
                        </ul>
                    </div>
                    {/* 3  */}
                    <div className='w-1/4'>
                        <h3 className='footer-title'>Newsletter</h3>
                        <p className='pragraph mb-4'>If you world like sign-up to the origin newsletter,please enter your email address below</p>
                        <div>
                            <input className='input-field' type="text" placeholder='Name' />

                            <input className='input-field' type="email" placeholder='Email' />

                            <button className='sub-btn'>Subscribe</button>
                        </div>
                    </div>
                    {/* 4  */}
                    <div className='w-1/4'>
                        <h3 className='footer-title'>Follow Us</h3>
                        <p className='pragraph mb-4'>Follow Origin on the following social network sites.</p>
                        <div className='flex space-x-4'>
                            <FaFacebookF className='text-black hover:bg-[#E27A01] hover:text-white delay-200 text-4xl bg-white p-2 cursor-pointer' />
                            <AiOutlineTwitter className='text-black hover:bg-[#E27A01] hover:text-white delay-200 text-4xl bg-white p-2 cursor-pointer' />
                            <TiSocialGooglePlus className='text-black hover:bg-[#E27A01] hover:text-white delay-200 text-4xl bg-white p-2 cursor-pointer' />
                            <MdOutlineWifi className='text-black hover:bg-[#E27A01] hover:text-white delay-200 text-4xl bg-white p-2 cursor-pointer' />
                        </div>
                    </div>

                </div>
                {/* copyright-area  */}
                <hr className='border  border-b-[#dad1c2] mt-5' />
                <div className='main text-center py-5'>
                    <p className='text-sm'>Copyright © 2022 by <b className='uppercase font-medium text-[#E27900]'>Saifun Nahar Sumi</b>. All Rights Reserved. </p>
                </div>
            </div>



        </div>
    );
};

export default Footer;