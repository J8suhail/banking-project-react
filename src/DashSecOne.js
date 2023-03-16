import { Link } from "react-router-dom";
function  DashSecOne(){
    return (
        <>
 <div id="leftMenu">
        <button class="btn" id="btn1"> Apply for card </button><br/><br/>
        <button class="btn" id="btn2"> currency  </button><br/><br/>
        <Link to='/'> <button class="btn" id="btn3"> LogOut </button><br/><br/></Link>
         </div>
        </>

        );
    }
    
export default DashSecOne;
    