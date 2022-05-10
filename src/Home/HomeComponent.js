import React from 'react';

const Home = (props) => {
  console.log("home props", props)
  return (
    <div>
      home
      {props.fetchLogsInSuccess ? "Success" : "No Content"}
    </div>
  )
}

export default Home