import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return(
        <div className="header">
          <Link to="/" className="logo">Kamoora</Link>
                    <div className="header-right">
                    <nav>          
          <Link to='/'>Home</Link>
          <Link to='/'>About</Link>
          <Link to='/'>Contact</Link>   
          <Link to='/'>Services</Link>       
          <Link to='/login'>Login</Link>          
          <Link to='/signup' >Signup</Link>          
          </nav>
                    </div>
          
        
        </div>
    );
}

export default Header;