import React, { useContext, useEffect } from 'react'
import { UserContext } from '../RouterConnect';

export default function About() {
    const userContext = useContext(UserContext);
    useEffect(() => {
        userContext?.setIsFooterabsolute(true);
    })
    return (
        <div className='homes' style={{ width: "81vw" }}>
            <div className='aboutFlex'>
                <div>
                    <div style={{ textAlign: "left", width: "450px", marginBottom: "15px" }}>
                        <div className='aboutHeading'>
                            About Us
                        </div>
                        <h1 className='aboutHeading2'>About <span style={{ color: "rgb(0, 3, 178)" }}>TrueWrite-AI</span></h1>
                    </div>
                    <p>TrueWrite-AI is a smart tool that helps you analyze your blog</p>
                    <p>content and improve its quality, readability, and SEO performance.</p>

                    <p>Our mission is to empower writers, bloggers, and content creators</p>
                    <p> with actionable insights to write better and grow their audience.</p>
                </div>
                <div className='imgArea'>
                </div>
            </div>
        </div>
    )
}
