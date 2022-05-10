import React from 'react';
import { HomeContainer } from "./../Home/index"

const Landing = (props) => {
  console.log("landing props", props)

  const handleLandingClick = () => {
    props.fetchLogs();
  }

  return (
    <div>
      <button onClick={handleLandingClick}>Landing</button>
      <HomeContainer />
    </div>
  )
}

export default Landing