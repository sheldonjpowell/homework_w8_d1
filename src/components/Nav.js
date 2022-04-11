import React from 'react'

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">This</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">IS</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">NOT</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">A</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="/" tabIndex="-1" aria-disabled="true">STORY</a>
                </li>
                </ul>
            </div>
        </div>
  </nav>
  )
}
