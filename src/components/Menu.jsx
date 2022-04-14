import '../css/style.css'
import { NavLink } from "react-router-dom";

function Menu() { 
    return(
        <div className='navbar'>
            <NavLink className="navbar-link" exact activeClassName="active" to="/">Input<p></p></NavLink>
            <NavLink className="navbar-link" activeClassName="active" to="/dashboard">Dashboard</NavLink>
        </div>
    )
}



export default Menu