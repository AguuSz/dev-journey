import React from 'react'

function Navbar() {
    return (
        <div className="navbar navbar-dark bg-dark">
            <div className="container d-flex flex-column flex-md-row align-items-center p-3">
                <h4 className="my-0 mr-md-auto font-weight-normal"><a href="/" className="text-white text-decoration-none">Dev Journey</a></h4>
                <div className="flex-row my-3 my-md-0">
                    <a href="/lenguajes" className="text-white mr-4 text-decoration-none">Lenguajes</a>
                    <a className="btn btn-sm btn-success mr-2 text-decoration-none" href="/signIn">Sign in</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar
