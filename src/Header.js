import logo from'./image/logo.jpg';

function Header()
{
    return(

<header> 
    <img id="fabbanklogo" src={logo}/>
          <nav>
            <a href="">Checking</a>
            <a href="">Savings</a>
            <a href="">Credit Cards</a>
            <a href="">Auto Loans</a>
            <a href="">Better Money Habits&reg;</a>
          </nav>
          </header> 


    );
    
}

export default Header;
