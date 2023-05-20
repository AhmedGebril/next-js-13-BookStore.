import React from 'react'

export default function PriceDiv() {
  return (
    <div className="section-gap  bg-dark" id="price-div">
    <div className="third-section-header d-flex justify-content-center align-items-center">
      <div className="text-center">
        <h2 className="text-white">Control How You Own The Book</h2>
        <div className="mt-3">
          <p className="text-white">
            A reader lives a thousand lives before he dies
          </p>
        </div>
      </div>
    </div>
    <div className="row p-5">
      <div className="col-md-4">
        <div className="card text-center">
          <div className="card-header p-4 mb-3">Download</div>
          <div className="card-body">
            <h5 className="card-title mb-3">"Books are the mirrors of the soul." - Virginia Woolf</h5>
            <div className="p-4 card-text rounded">
              <p className="mb-3 price-tag">
                $ 49.99
              </p>
              <button className="third-section-button">Click To Get Book</button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card text-center">
          <div className="card-header p-4 mb-3">Ebook</div>
          <div className="card-body">
            <h5 className="card-title mb-3">"A book is a dream that you hold in your hand." - Neil Gaiman</h5>
            <div className="p-4 card-text rounded">
              <p className="mb-3 price-tag">
                $ 99.99
              </p>
              <button className="third-section-button">Click To Get Book</button>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card text-center">
          <div className="card-header p-4 mb-3">PDF</div>
          <div className="card-body">
            <h5 className="card-title mb-3">"A book is a gift you can open again and again." - Garrison Keillor</h5>
            <div className="p-4 card-text rounded">
              <p className="mb-3 price-tag">
                $ 60.00
              </p>
              <button className="third-section-button">Click To Get Book</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
