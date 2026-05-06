import React, { useContext } from 'react'
import { UserContext } from '../RouterConnect'
import "../styles/main.css"
import { Link } from 'react-router-dom';

export default function Footer() {
    const userContext = useContext(UserContext);
    return (
        <div className={`footerDiv ${userContext.isFooterabsolute ? 'footer_absolute' : ''}`}>
            <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", flexWrap: "wrap" }}>

                <div>
                    <ul style={{ color: "white", fontSize: "15px" }}>
                        <li className='link'>Privacy Policy</li>
                        <li className='link'>Terms Of Services</li>
                        <li className='link'>Contact</li>
                    </ul>
                </div>
                <div style={{ margin: "0px 20px" }}>
                    <h2 className='text-white'>Analyze readability, SEO, and structure of your blog instantly.</h2>
                    <hr style={{ color: "white", width: "50%", marginLeft: "50%", transform: "translatex(-50%)", marginTop: "10px", marginBottom: "10px" }} />
                    <ul style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "30px", fontWeight: "bold", color: "white" }}>
                        <Link to={"/"}><li className='link' style={{ cursor: "pointer" }}>Home</li></Link>
                        <Link to={"main"}><li className='link' style={{ cursor: "pointer" }}>Analyzer</li></Link>
                        <Link to={"about"}><li className='link' style={{ cursor: "pointer" }}>About</li></Link>
                    </ul>
                </div>
                <div style={{ color: "white", height: "100%" }}>
                    <p style={{ fontSize: "15px" }}>Our Devs.</p>
                    <p style={{ fontSize: "15px", marginBottom: "15px" }}>Kirtan | Priyanshu</p>
                    <a style={{ backgroundColor: "black", padding: "4px", fontSize: "15px", borderRadius: "5px" }} target='_blank' href="https://github.com/krishsunny9876-sudo">GitHub</a>
                </div>
            </div>
        </div>
    )
}
