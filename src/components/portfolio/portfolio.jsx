import PortfolioList from '../portfolioList/portfolioList';
import './portfolio.scss'

export default function Portfolio() {

  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "featured",
      title: "Featured",
    },
  ];

  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>    
      <ul>
        {list.map((item) => (
          <PortfolioList title={item.title}/>
        ))}
      </ul> 
      <div className="container">
        <div className="item">
        <img src="https://static4.depositphotos.com/1009397/284/i/950/depositphotos_2846910-stock-photo-baby-cat-portrait.jpg" alt="" />
          <h3>
            Cat App - Soon
          </h3>
        </div>
        <div className="item">
        <img src="https://static4.depositphotos.com/1009397/284/i/950/depositphotos_2846910-stock-photo-baby-cat-portrait.jpg" alt="" />
          <h3>
            Cat App - Soon
          </h3>
        </div>
        <div className="item">
        <img src="https://static4.depositphotos.com/1009397/284/i/950/depositphotos_2846910-stock-photo-baby-cat-portrait.jpg" alt="" />
          <h3>
            Cat App - Soon
          </h3>
        </div>
        <div className="item">
        <img src="https://static4.depositphotos.com/1009397/284/i/950/depositphotos_2846910-stock-photo-baby-cat-portrait.jpg" alt="" />
          <h3>
            Cat App - Soon
          </h3>
        </div>
        <div className="item">
        <img src="https://static4.depositphotos.com/1009397/284/i/950/depositphotos_2846910-stock-photo-baby-cat-portrait.jpg" alt="" />
          <h3>
            Cat App - Soon
          </h3>
        </div>
        <div className="item">
          <img src="https://static4.depositphotos.com/1009397/284/i/950/depositphotos_2846910-stock-photo-baby-cat-portrait.jpg" alt="" />
          <h3>
            Cat App - Soon
          </h3>
        </div>
      </div>
    </div>
  )
}
