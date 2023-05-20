import React from 'react'

export default function Fbook({book}) {
  return (
    <div className="vh-100 main-section d-flex justify-content-center align-items-center mb-5">
            <div className="container">
              <div className="row">
                <div className="col-md-6  d-flex align-items-center mb-3">
                  <div className="text-center">
                    <h3 className="mb-3">
                      Author : {book.volumeInfo.authors[0]}
                    </h3>
                    <h1 className="mb-3 booktitle">{book.volumeInfo.title}</h1>
                    <p className="mb-3">
                      {book.volumeInfo.description
                        .split(". ")
                        .slice(0, 2)
                        .join(". ")}
                    </p>
                    <button className="main-section-button">
                      {" "}
                      Buy Book for $ 9.99{" "}
                    </button>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="main-section-image text-center">
                    <img
                      src={book.volumeInfo.imageLinks.thumbnail}
                      className="w-50 book-image"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}
