import './testimonials.scss';

export default function testimonials() {
  return <div className='testimonials' id='testimonials'>
      <h1>Testimonials</h1>
      <div className="container">
        <div className="card">
          <div className="top">
            <img src="assets/right arrow.png" alt="" className="left" />
            <img src="https://images.unsplash.com/photo-1559703248-dcaaec9fab78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="" className="user" />
            <img src="assets/youtube.png" alt="" className="right" />
          </div>
          <div className="center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas perspiciatis minima adipisci.</div>
          <div className="bottom">
            <h3>Lucelita</h3>
            <h4>CEO of MEGGA</h4>
          </div>
        </div>
      </div>
      </div>;
}
