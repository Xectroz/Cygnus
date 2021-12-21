import React, {useState, useEffect} from 'react'
import '../assets/css/Home.css'
import Header from './Header'
import Nav from './Nav'

function Home() {
    
    return(
        <div>
            {localStorage.hasOwnProperty('token') && 
                <div className="Home">
                    {<Header />}
                    {<Nav />}

                </div>
            }
        </div>
    )
}
 
export default Home