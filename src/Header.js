import logo from'./image/logo.jpg';
import { Link } from "react-router-dom";

function Header()
{
    return(

<header> 
<Link to='/'> <img id="fabbanklogo" src={logo}/></Link>
          <nav>
          {/* <Link to='/Dashboard'>Dashboard</Link> */}
          <Link to='/Signup'>Signup</Link>
          
            <a href="">Credit Cards</a>
            <a href="">Better Money Habits&reg;</a>
          </nav>
          </header> 


    );
    
}

export default Header;
