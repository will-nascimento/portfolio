import './intro.scss'

export default function intro() {
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
          <h3>React Developer <span></span></h3>
        </div>
        <a href="#portfolio" className="portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  )
}
