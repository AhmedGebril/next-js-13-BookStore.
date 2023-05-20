import React from 'react'

export default function BookDescription({book}) {
  return (
    <>
    <div className="d-flex justify-content-center align-items-center">
            <h2 className="m-0">
              <span className="underline-effect">Book Description</span>
            </h2>
          </div>
          <div className="bg-white section-gap">
            <div className="row">
              <div className="col-md-6 d-flex align-items-center p-5">
                <div className="main-section-image text-center w-100">
                  <img
                    src={book.volumeInfo.imageLinks.thumbnail}
                    className="w-50 book-image"
                  ></img>
                </div>
              </div>
              <div className="col-md-6 d-flex align-items-center">
                <div className=" p-5">
                  <div className="shadow overflow-hidden w-100 text-center rounded p-3 description">
                    <h1>Description</h1>
                    <p>{book.volumeInfo.description}</p>
                  </div>
                </div>
              </div>
              <div className="col-md-12 d-flex  justify-content-center align-items-center p-5">
                <button className="second-section-button fs-4">
                  View more Details about the Book
                </button>
              </div>
            </div>
          </div>
          </>
  )
}
