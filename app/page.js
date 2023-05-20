"use client";
import HeaderNav from "./components/headerNav/headerNav";
import { useState, useEffect } from "react";
import axios from "axios";
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import {useSession } from 'next-auth/react';
import Fbook from "./components/MainPageComp/FBook/Fbook";
import BookDescription from "./components/MainPageComp/BookDescription/BookDescription";
import PriceDiv from "./components/MainPageComp/PriceDiv/PriceDiv";
import AppButtons from "./components/MainPageComp/AppButtons/AppButtons";
import TopBooks from "./components/MainPageComp/TopBooks/TopBooks";



export default function Home() {
  const {data,status} = useSession()
  const animationRef = useRef(null);
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);


  gsap.registerPlugin(ScrollTrigger);
  const tl = gsap.timeline();
  

  async function getRandomBook() {
    await axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=subject:fantasy&orderBy=newest&maxResults=1"
      )
      .then((res) => {
        setBook(res.data.items[0]);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  useEffect(() => {
    getRandomBook();
  }, []);

  useEffect(() => {
    tl.from('.container-1', { x: '-100%' })
    .from('.container-2', { x: '100%' })

    if (animationRef.current) {
      ScrollTrigger.create({
        trigger: '.trial-section',
        animation: tl,
        pin: true,
        scrub: 1,
        duration: 2,
        start: 'top top',
        end: '+=4000',       
      });
    }
  }, [book]);


  return (
    <>
      {book ? (
        <>
        <HeaderNav />
        <div className="vh-100 w-100  d-flex justify-content-center align-items-center  trial-section" ref={animationRef} id="Home">
      <div className="h-100 w-100 main-container d-flex justify-content-center align-items-center">
        <div className="text-center">
        <h1 className="text-white">Discover the World of Books: Your Ultimate Book Resource</h1>
          <p className="text-white">The only Go For Site For Books You Need!</p>
        </div>
          <div className="container-1 d-flex justify-content-center align-items-center h-100 w-100 bg-danger">
            <div className="container">
              <div className="text-center">
                <h1>Expand Your Mind with Books: Empowerment Through Literature</h1>
                <p>Every Book is Like Going on An Adventure!</p>
              </div>
            </div> 
          </div>
          <div className="container-2 d-flex justify-content-center align-items-center  h-100 w-100 bg-white">
            <div className="container">
              <div className="text-center">
                <h1 >Immerse Yourself in the Written Word: Explore Our Book Collection</h1>
                <p>Immerse Yourself with the World Of books!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
          <Fbook book={book}/>
          <BookDescription book={book}/>
          <PriceDiv/>
          <AppButtons/>
          <TopBooks/>
    
        </>
      ) : (
        <div className="vh-100 d-flex justify-content-center align-items-center">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only"></span>
          </div>
        </div>
      )}
    </>
  );
}
