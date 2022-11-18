import React from 'react';
import InfoImgBg from '../../img/info-bg.jpg';
import InfoImg1 from '../../img/info-img-1.png';
import InfoImg2 from '../../img/info-img-2.png';

const Welcome = () => {
    return (
        <div className='bg-no-repeat bg-right py-16 mt-14' style={{
            backgroundImage: 'url(' + InfoImgBg + ')',
        }}>
            <div className='main fl '>
                <div className='w-2/4 text-center' style={{ fontFamily: "Merienda" }}>
                    <h1 className='section-title'>WELCOME TO OUR RETATION</h1>
                    <aside className=''>
                        <p className='mb-8 ' >Cmspresso is the process that slowly and gradually releases the purest of essence. As tea leaves unravel and coffee patiently drips, it is the best representation of the making of tea and coffee. We want the tea and coffee from Cmspresso to express their many levels of character through a thoughtful and caring hand.</p>
                        <p>Cmspresso is a concept that we wish to pass for-ward. Cmspresso means a healthy and positive outlook for the adopters of this great attitude.</p>
                    </aside>

                </div>

                <div className='mr-52'>
                    <img className='relative z-10' src={InfoImg1} alt="" />
                    <img className='-mt-10' src={InfoImg2} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Welcome;