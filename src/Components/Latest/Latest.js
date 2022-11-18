import React from 'react';
import GalleryOne from '../../img/latest/gallery/img-1.jpg';
import GalleryTwo from '../../img/latest/gallery/img-2.jpg';
import GalleryThree from '../../img/latest/gallery/img-3.jpg';
import GalleryFour from '../../img/latest/gallery/img-4.jpg';
import GalleryFive from '../../img/latest/gallery/img-5.jpg';
import GallerySix from '../../img/latest/gallery/img-6.jpg';
import HappyImg1 from '../../img/latest/img-1.png';
import HappyImg2 from '../../img/latest/img-2.png';
import LatestBg from '../../img/latest/latest-bg.png';

const Latest = () => {
    return (
        <div className='main bg-no-repeat bg-right-top py-16' style={{ fontFamily: "Merienda", backgroundImage: 'url(' + LatestBg + ')' }} >
            <div className='main fl'>
                <div className='mr-16 w-2/3' >
                    <h1 className='section-title text-center'  >Latest Update</h1>
                    {/* top  */}
                    <div className='fl my-14'>
                        <div>
                            <img src={HappyImg1} alt="" />
                        </div>
                        <div className='w-3/4 ml-10'>
                            <h4 className='tiny-title'>Happy Hour, between 4pm & 5pm</h4>
                            <p className='pragraph  '>In specialty coffee culture an ability to properly brew coffee is summing it all up. In one cup of coffee we bring together efforts of all of those who worked o...</p>
                        </div>
                    </div>
                    <hr />
                    {/* bottom  */}
                    <div className='fl my-14'>

                        <div className='w-3/4 mr-10'>
                            <h4 className='tiny-title'>Brew coffee is summing it all up</h4>
                            <p className='pragraph'>In specialty coffee culture an ability to properly brew coffee is summing it all up. In one cup of coffee we bring together efforts of all of those who worked o...</p>
                        </div>
                        <div>
                            <img src={HappyImg2} alt="" />
                        </div>
                    </div>
                    <hr />

                </div>
                <div className=' '>
                    <div className='grid grid-cols-2 border border-8 border-[#E6D7C7]'>
                        <img className='opacity-50 bg-[black] hover hover' src={GalleryOne} alt="" />
                        <img className='opacity-50 bg-[black] hover hover' src={GalleryTwo} alt="" />
                        <img className='opacity-50 bg-[black] hover hover' src={GalleryThree} alt="" />
                        <img className='opacity-50 bg-[black] hover hover' src={GalleryFour} alt="" />
                        <img className='opacity-50 bg-[black] hover hover' src={GalleryFive} alt="" />
                        <img className='opacity-50 bg-[black] hover hover' src={GallerySix} alt="" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Latest;