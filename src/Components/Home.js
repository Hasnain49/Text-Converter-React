import React from 'react'
import TextForm from './TextForm'

const Home = (props) => {
  return (
    <>
    <TextForm showAlert={props.showAlert} heading="Enter text to analyze below" mode={props.mode}/>
    </>
  )
}

export default Home