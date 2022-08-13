import './topBar.scss';
import { Person, Mail } from '@material-ui/icons';

export default function TopBar({ menuOpen, setMenuOpen}) {
  return (
    <div className={'topBar ' + (menuOpen && 'active')}>
      <div className='wrapper'>
        <div className='left'>
          <a href='#intro' className='logo'>
            Will.N
          </a>
          <div className='itemContainer'>
            <Person className='icon' />
            <span>+55 85981389039</span>
          </div>
          <div className='itemContainer'>
            <Mail className='icon' />
            <span>willnascimentowns@gmail.com</span>
          </div>
        </div>

        <div className='right'>
          <div className='hamburguer' onClick={()=>setMenuOpen(!menuOpen)}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
        </div>
      </div>
    </div>
  );
}
