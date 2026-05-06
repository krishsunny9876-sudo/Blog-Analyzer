import React, { useContext, useEffect } from 'react'
import { UserContext } from '../RouterConnect'
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  const userContext = useContext(UserContext);
  useEffect(() => {
    userContext?.setIsFooterabsolute(false);
  })
  return (
    <div className='homes'>
      <h1 className='font_2' style={{ fontWeight: "bold", fontSize: "35px" }}>Welcome to TrueWrite<span className='font_2' style={{ color: "red" }}>AI</span></h1>
      <h1 style={{ fontWeight: "bold", fontSize: "30px" }}>Understand Your Blog</h1>
      <h1 className='homesHeading' style={{ fontWeight: "bold", fontSize: "30px", marginBottom: "20px" }}>Improve Your Impact</h1>
      <p>Analyze your blog content for readablity , ai-detection , structure and more.</p>
      <p>Get insights that help you to write better and rank higher.</p>

      <button className='button3' onClick={()=>navigate("/main")}>Analyze Your Blog &rarr;</button>

    </div>
  )
}
