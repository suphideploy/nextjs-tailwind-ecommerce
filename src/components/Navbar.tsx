
import Link from "next/link";
import React from 'react';
import { Fragment, useState } from 'react';

import { AiOutlineDown } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";



const Navbar = () => {
 
  return (
    <div className="hidden lg:block">
    <div className="container">
      <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">
         <Link className="navbar__link relative" href="/">
          HOME
        </Link>
        <Link className="navbar__link relative" href="/categories">
          CATEGORIES
        </Link>
        <Link className="navbar__link relative" href="#">
          {`MEN'S`}
        </Link>
        <Link className="navbar__link relative" href="#">
          {`WOMEN'S`}
        </Link>
        <div className="group relative">
        <Link className="navbar__link relative" href="#">
        {`WOMEN'S`}
       
        </Link>
        <nav tabindex="0" className="border border-2 z-10 bg-white invisible border-red-300 rounded w-60 absolute left-0 top-full transition-all opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-1">
            <ul className="py-1">
                <li>
                    <a href="#" className="block px-4 py-2 hover:bg-red-300">
                        Edit
                    </a>
                </li>
                <li>
                    <a href="#" className="block px-4 py-2 hover:bg-red-300">
                        Delete
                    </a>
                </li>
                <li>
                    <a href="#" className="block px-4 py-2 hover:bg-red-300">
                        Reply
                    </a>
                </li>
            </ul>
        </nav>
    </div>
        <Link className="navbar__link relative" href="/blogs">
          BLOG
        </Link> 
      </div>
     
    </div>
  </div>
  );
}

export default Navbar;