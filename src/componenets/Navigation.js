// import React from 'react'

function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "rgb(68, 168, 98)" }}>
            <a className="navbar-brand" href="/">Career Guru</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#About">About Us</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="login" tabindex="-1" aria-disabled="true">Login</a>
                    </li>
                </ul>

                <button type="button" className="btn btn-primary">Post A Job</button>
            </div>
        </nav>
    )
}
export default Navigation
