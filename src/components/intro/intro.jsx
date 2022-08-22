import './intro.scss'
import { init } from 'ityped'
import { useEffect, useRef } from 'react'

export default function intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      strings: ["ReactJs Developer", "ReactJs Developer"],
    });
  }, []);

  return (
    <div className='intro' id='intro'>
      <div className="left">
        <div className="imgContainer">
          <img src="assets/eu quadrado.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there, I'm</h2>
          <h1>Will Nascimento</h1>
          <h3>  <span ref={textRef}></span></h3>
        </div>
        <a href="#portfolio" className="portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  )
}
