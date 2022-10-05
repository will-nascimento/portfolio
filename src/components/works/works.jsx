import { useState } from 'react'
import './works.scss'

export default function Works() {
    const [currentSlide,setCurrentSlide] = useState(0);
    const data = [
      {
        id: 1,
        icon: "./assets/mobile.png",
        title: "Web Design",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, nihil assumenda. Laboriosam totam porro quibusdam deserunt, dolore voluptates ipsa, consequatur natus voluptatum nihil tempore debitis aut! Dolor nesciunt aperiam amet!",
        img: "https://images.unsplash.com/photo-1583122624368-93607357113c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      },
      {
        id: 2,
        icon: "./assets/globe.png",
        title: "Mobile Application",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, nihil assumenda. Laboriosam totam porro quibusdam deserunt, dolore voluptates ipsa, consequatur natus voluptatum nihil tempore debitis aut! Dolor nesciunt aperiam amet!",
        img: "https://images.unsplash.com/photo-1583122624368-93607357113c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      },
      {
        id: 3,
        icon: "./assets/writing.png",
        title: "Branding",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, nihil assumenda. Laboriosam totam porro quibusdam deserunt, dolore voluptates ipsa, consequatur natus voluptatum nihil tempore debitis aut! Dolor nesciunt aperiam amet!",
        img: "https://images.unsplash.com/photo-1583122624368-93607357113c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      },
    ];

  const handleClick = (way)=>{
    way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) :
                     setCurrentSlide(currentSlide <data.length -1 ? currentSlide +1 : 0); 
  }
  return (
    <div className='works' id='works'>
      <div className="slider" style={{ transform: `translateX(-${currentSlide*100}vw)`}} >
        {data.map(d=>(
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src={d.icon} alt="" />
                </div>
                <h2>{d.title}</h2>
                <p>{d.desc}</p>
                <span>Projects</span>
              </div>
            </div>
            <div className="right">
              <img src="https://images.unsplash.com/photo-1613346697264-350936cb3ba3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" />
            </div>
          </div>
        </div>
        ))}
      </div>
      <img src="assets/arrow.png" className='arrow left' alt="" onClick={()=>handleClick("left")} />
      <img src="assets/arrow.png" className='arrow right' alt="" onClick={()=>handleClick("right")}/>
    </div>
  )
}
