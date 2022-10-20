import './testimonials.scss';

export default function testimonials() {
  const Data = [
    {
      id: 1,
      name: "Waldisson",
      title: "CEO of WBT",
      img: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      icon: "assets/right arrow.png",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla consectetur repudiandae deserunt, voluptate quo accusamus sed laborum magnam atque illum totam iure odit placeat amet, nostrum suscipit excepturi reprehenderit unde.",
    },
    {
      id: 2,
      name: "Allan",
      title: "CEO of AAVR",
      img: "https://images.unsplash.com/photo-1521579880562-101f47676ee1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=445&q=80",
      icon: "assets/right arrow.png",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto non explicabo voluptas, consequuntur, blanditiis facere asperiores ex recusandae omnis aut expedita harum neque iste eaque fugit quisquam consequatur quia ipsum.",
    },
    {
      id: 3,
      name: "Michelle",
      title: "CEO of MSTB",
      img: "https://images.unsplash.com/photo-1520466809213-7b9a56adcd45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      icon: "assets/right arrow.png",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores dolor odio eius magni porro facilis voluptatem ad quaerat, praesentium officia dolore. Tempora assumenda incidunt ab expedita minus nam exercitationem tenetur.",
    },
  ]
  return <div className='testimonials' id='testimonials'>
      <h1>Testimonials</h1>
      <div className="container">
          {Data.map((d)=>(

          
        <div className="card">
          <div className="top">
            <img src="assets/right arrow.png" alt="" className="left" />
            <img 
            src={d.img} 
            alt="" 
            className="user" />
            <img src={d.icon} alt="" className="right" />
          </div>
          <div className="center">{d.title}</div>
          <div className="bottom">
            <h3>Lucelita</h3>
            <h4>CEO of MEGGA</h4>
          </div>
        </div>
        ))}
      </div>
      </div>;
}
