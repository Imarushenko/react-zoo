import React from 'react'
import { SiGithub } from 'react-icons/si'
import { BsLinkedin } from 'react-icons/bs'
import './Footer.css'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div style={{ width: "100%", height: "10%", backgroundColor: "#D5DBDB", position: "fixed",  left: 0, bottom: 0, right: 0 }}>
            <div className='container'>
                <div className='row'>

                    <div className='col-sm marginer'>
                        <p className='fontWeigth'>Igor Marushenko &nbsp;&nbsp;All Rights Reserved ® &nbsp;&nbsp; Zoo &nbsp;&nbsp; 2022</p>
                    </div>
                    <div className='col-sm marginer marginerLeft'>
                        <a href='https://github.com/Imarushenko' target='_blank'><SiGithub size={30} color="black" /></a>
                        <a className='marginerLeft' href='https://www.linkedin.com/in/igor-marushenko/' target='_blank'><BsLinkedin size={30} color="black" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
