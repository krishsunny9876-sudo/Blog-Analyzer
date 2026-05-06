import React, { useContext, useEffect } from 'react'
import { UserContext } from '../RouterConnect'

export default function Home() {
  const userContext = useContext(UserContext);
  useEffect(() => {
    userContext.setIsFooterabsolute(true);
  })
  return (
    <div style={{ marginTop: "60px" }}>
      Home
    </div>
  )
}
