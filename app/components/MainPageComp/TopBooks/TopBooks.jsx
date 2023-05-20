'use client'
import React from 'react'
import { useState,useEffect } from 'react'
import axios from "axios";

export default function TopBooks() {
    const [TopBooks,setTopBooks] = useState([])
    const [selectedSubject, setSelectedSubject] = useState('');
    const [isLoading, setIsLoading] = useState(false);


    const handleSelectChange = (event) => {
        setSelectedSubject(event.target.value);
      };


    const handleSearchClick = () => {
        if (selectedSubject) {
          setIsLoading(true); // Set loading to true before making the request
    
          axios
            .get(`https://www.googleapis.com/books/v1/volumes?q=subject:${selectedSubject}&orderBy=newest&maxResults=3`)
            .then((response) => {
              // Handle the response data
              setTopBooks(response.data.items)
              setIsLoading(false); // Set loading back to false after receiving the response
            })
            .catch((error) => {
              // Handle the error
              console.error(error);
              setIsLoading(false); // Set loading back to false in case of an error
            });
        }
      };



  return (
    <div className="vh-100 section-gap Books-section" id="Topbooks">
    <div className="d-flex justify-content-center align-items-center">
      <div className="text-center">
        <h3>Books in all Subjects and Much More!</h3>
        <select
          className="form-select form-select-lg mb-3"
          aria-label=".form-select-lg example"
          value={selectedSubject}
          onChange={handleSelectChange}
        >
          <option value="">Open this select menu</option>
          <option value="Horror">Horror</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Technology">Technology</option>
          <option value="Cooking">Cooking</option>
          <option value="Travel">Travel</option>
          <option value="Psychology">Psychology</option>
        </select>
        <button className="btn btn-primary" onClick={handleSearchClick} disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Search'}
        </button>
      </div>
    </div>
    <div className="row p-5">
      {TopBooks.length>0?<>
      {TopBooks.map((Book)=>(
        <div className="col-md-4" key={Book.id}>
        <div className="card">
          <div className="card-header text-center">
            <img src={Book.volumeInfo.imageLinks.thumbnail} className="w-50"></img>
          </div>
          <div className="card-body">
            <h5 className="card-title">{Book.volumeInfo.authors[0]}</h5>
            <p className="card-text">{Book.volumeInfo.description.split(". ").slice(0, 2).join(". ")}</p>
          </div>
        </div>
      </div>
      ))}
      </>:''}
    </div>
  </div>
  )
}
