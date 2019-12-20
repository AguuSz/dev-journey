import React from 'react'
import Entry from './Entry';

function Container() {
    return (
        <div className="container">
            <div className="entry">
                <a href="/addEntry" className="float-right mt-4 text-decoration-none btn btn-success">Añadir una entrada</a>
                <Entry />
            </div>
        </div>
    )
}

export default Container
