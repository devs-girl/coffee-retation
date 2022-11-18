import React from 'react';
import KitImg from '../../img/kit.png';
import ListStyle from '../../img/list-style.png';


const Kit = () => {
    return (
        <div className='main  py-16' style={{ fontFamily: "Merienda" }}>
            <div className='flex justify-around items-center'>
                <div className=''>
                    <img src={KitImg} alt="" />
                </div>
                <div>
                    <h1 className='title'>Get your Bulletproof Coffee Making Kit</h1>
                    <ul>
                        <li className='list-fl pragraph'> <img className='pr-2' src={ListStyle} alt="" /> 1 cup unsweetened cocoa powder</li>
                        <li className='list-fl pragraph'> <img className='pr-2' src={ListStyle} alt="" />1/2 cup butter, cut into 1–inch pieces</li>
                        <li className='list-fl pragraph'> <img className='pr-2' src={ListStyle} alt="" />1 1/4 cups granulated sugar</li>
                        <li className='list-fl pragraph'> <img className='pr-2' src={ListStyle} alt="" />1/2 cup firmly packed dark brown sugar</li>
                        <li className='list-fl pragraph'> <img className='pr-2' src={ListStyle} alt="" />1 1/4 tsp baking soda</li>
                        <li className='list-fl pragraph'> <img className='pr-2' src={ListStyle} alt="" />Add a Klean Kanteen Insulated Coffee Flask / Shaker & a Cafe Cap</li>
                    </ul>

                </div>
            </div>
            <h3 className='tiny-title text-center py-8'>“The easiest and most convenient way I have used in making Bulletproof coffee. We use it very day.”</h3>

        </div>
    );
};

export default Kit;