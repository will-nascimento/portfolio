import './intro.scss'
import { init } from 'ityped'
import { useEffect, useRef } from 'react'

export default function Intro() {
  const textRef = useRef();

  const teste =  init(textRef.current, {
    showCursor: false,
    backDelay: 1500,
    strings: ["ReactJs Developer", "ReactNative Developer"],
  });

  useEffect(() => (teste));

  return (
    <div className='intro' id='intro'>
      <div className="left">
        <div className="imgContainer">
          <img src="assets/eu5.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there, I'm</h2>
          <h1>Will Nascimento</h1>
          <h3>Freelance  <span ref={textRef}></span></h3>
        </div>
        <a href="#portfolio" className="intro">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  )
}
