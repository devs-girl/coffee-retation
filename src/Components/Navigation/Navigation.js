import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Link from '../Link/Link';

const Navigation = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, name: 'home', path: '/home' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Galleries', path: '/galleries' },
        { id: 4, name: 'Contacts', path: '/contacts' },
        { id: 5, name: 'Menu', path: '/menu' }
    ]
    return (
        <div className=' bg-[#EFE6DA] '>
            <div className=' w-full'>
                <div onClick={() => setOpen(!open)} className='h-6 w-6 md:hidden'>
                    {
                        open ? <AiOutlineClose /> : <AiOutlineMenu />
                    }
                </div>

                <ul className={`bg-[#EFE6DA] w-full  md:flex justify-center md:static absolute duration-500  ease-in ${open ? 'top-6' : 'top-[-120px]'}`}>
                    {
                        routes.map(route => <Link
                            key={route.id}
                            route={route}
                        >
                        </Link>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default Navigation;