import React from 'react';
import RecipeImg from '../../img/recipe.png';

const Recipe = () => {
    return (
        <div className='bg-[#EFE6DA] py-16' style={{ fontFamily: "Merienda" }} >
            <div className='main fl'>
                {/* left  */}
                <div className='fl'>
                    <div className='w-1/2'>
                        <h3 className='tiny-title'>Do you want to Retation the video recipe?</h3>
                        <p className='pragraph'>Coffee is a ritual, a small treat in the morning, “fuel”, a break, chat, affair that makes up our lives. Making the coffee better, we make our lives better.</p>
                    </div>
                    <div className='w-1/2'>
                        <img src={RecipeImg} alt="" />
                    </div>

                </div>
                {/* right  */}
                <div className='flex space-x-4'>
                    <h4 className='text-sm font-medium text-black '>Gather more knowledge from coffee</h4>
                    <h4 className='text-sm font-medium text-black'>work with green and roasted coffee provides</h4>
                </div>
            </div>
        </div>
    );
};

export default Recipe;