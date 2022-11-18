import React from 'react';
import BgMenu from '../../../img/bg_menu.jpg';

const Menu = () => {
    return (<div className='bg-no-repeat bg-center h-full py-6 bg-cover' style={{
        backgroundImage: 'url(' + BgMenu + ')',
    }}>
        <div className='main'>
            <ul id="services-item">
                <li class="service">
                    <aside>
                        <div class="service-inner">
                            <h3>
                                <a href="menu.html#coffee" title="Coffee">Coffee</a>
                            </h3>
                            <p>We the same levels of commitment to cocktail know-how
                                from all of the people we work with</p>
                        </div>
                    </aside>
                    {/* <em class="animated animation infinite bullets"></em> */}
                </li>
                <li class="service">
                    <aside>
                        <div class="service-inner">
                            <h3>
                                <a href="menu.html#cocktail" title="Cocktail">Cocktail</a>
                            </h3>
                            <p>We the same levels of commitment to cocktail know-how
                                from all of the people we work with</p>
                        </div>
                    </aside>
                    {/* <em class="animated animation infinite bullets animation-delay-50"></em> */}
                </li>
                <li class="service active">
                    <aside>
                        <div class="service-inner">
                            <h3>
                                <a href="menu.html#tea" title="Tea">Tea</a>
                            </h3>
                            <p>We the same levels of commitment to cocktail know-how
                                from all of the people we work with</p>
                        </div>
                    </aside>
                    {/* <em class="animated animation infinite animation-delay-100"></em> */}
                </li>
                <li class="service">
                    <aside>
                        <div class="service-inner">
                            <h3>
                                <a href="menu.html#cake" title="Cake">Cake</a>
                            </h3>
                            <p>We the same levels of commitment to cocktail know-how
                                from all of the people we work with</p>
                        </div>
                    </aside>
                    {/* <em class="animated animation infinite bullets animation-delay-150"></em> */}
                </li>
                <li class="service">
                    <aside>
                        <div class="service-inner">
                            <h3>
                                <a href="menu.html#milk" title="Milk">Milk</a>
                            </h3>
                            <p>We the same levels of commitment to cocktail know-how
                                from all of the people we work with</p>
                        </div>
                    </aside>
                    <em class="animated animation infinite animation-delay-200 bullets"></em>
                </li>
                <li class="service">
                    <aside>
                        <div class="service-inner">
                            <h3>
                                <a href="menu.html#beverages" title="Beverages">Beverages</a>
                            </h3>
                            <p>We the same levels of commitment to cocktail know-how
                                from all of the people we work with</p>
                        </div>
                    </aside>
                    {/* <em class="animated animation infinite bullets animation-delay-250"></em> */}
                </li>
            </ul>
        </div>

    </div>
    );
};

export default Menu;