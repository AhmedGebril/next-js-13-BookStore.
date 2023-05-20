import React from 'react'

export default function AppButtons() {
  return (
    <div className="forth-section section-gap vh-50" id="DownloadApp">
    <div className="d-flex justify-content-center align-items-center">
      <div className="text-center w-75">
      <h2 className="text-white mb-4">Download Our App For All Platforms</h2>
      <h5 className="text-white">"Books are the quietest and most constant of friends; they are the most accessible and wisest of counselors, and the most patient of teachers." - Charles William Eliot</h5>
      </div>
    </div>
    <div className="d-flex justify-content-center align-items-center">
        <div>
          <div className="logo-buttons d-flex justify-content-center align-items-center pb-3">
            <div className="me-3 text-center">
              <i className="fa-brands fa-apple fa-2xl icon"></i>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <div className="text-center">
                <h4 className="m-0">Available</h4>
                <p className="m-0">On App Store</p>
              </div>
            </div>
          </div>
        </div>
        <div className="logo-buttons d-flex justify-content-center align-items-center pb-3">
            <div className="me-3 text-center">
            <i className="fa-brands fa-android fa-2xl icon"></i>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <div className="text-center">
                <h4 className="m-0">Available</h4>
                <p className="m-0">On Play Store</p>
              </div>
            </div>
          </div>
    </div>
</div>
  )
}
