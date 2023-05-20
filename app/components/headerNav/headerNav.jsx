'use client'
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { signIn, signOut, useSession } from 'next-auth/react';
import {useState} from 'react'


export default function HeaderNav() {
  const navRef = useRef(null);
  const data = useSession()

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(navRef.current, {
      backgroundColor: 'black',
      color: 'white',
      scrollTrigger: {
        trigger: navRef.current,
        start: 'top top',
        scrub: true,
      }
    });
  }, []);


  return (
    <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary mb-5" ref={navRef}>
    <div className="container d-flex justify-content-between align-items-center px-5">
      <div className='w-25 text-center brand'>
        <p className='fs-4 m-0 text-white'>Evascal</p>
      </div>
      <ul className="navbar-nav justify-content-center mb-lg-0 d-flex flex-wrap flex-row w-100" style={{ maxWidth: '800px' }}>
        <li className="nav-item me-3 nav-list">
          <a href="#Home">Home</a> 
        </li>
        <li className="nav-item me-3 nav-list">
        <a href="#price-div">Prices</a>
        </li>
        <li className="nav-item me-3 nav-list">
        <a href="#DownloadApp">Our App</a>
        </li>
        <li className="nav-item me-3 nav-list">
          <a href="#Topbooks">Books</a> 
        </li>
        {data?

        <li className="nav-item nav-list">
        <a onClick={()=>{signOut({ callbackUrl: '/login' })}}>Log out</a> 
      </li>
        :
        <li className="nav-item nav-list">
        <a onClick={()=>{signIn('Credentials')}}>Login</a> 
      </li>
        }
      </ul>
    </div>
  </nav>
  )
}
