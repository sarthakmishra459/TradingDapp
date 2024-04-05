import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className='absolute navbar w-full flex flex-row justify-between text-zinc-400 p-4'>
            <div className='icon flex items-center justify-between text-white pr-4'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="white"><path d="M3 12H7V21H3V12ZM17 8H21V21H17V8ZM10 2H14V21H10V2Z"></path></svg>
                <div className='ml-2'>Crypto</div>
            </div>
            <div className='hover:text-white'>Product</div>
            <div className='hover:text-white'>Pricing</div>

            <Link href={"/exchange"} className='hover:text-white'>Exchange</Link>
        </div>
    );
};

export default Navbar;
