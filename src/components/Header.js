import { LOGO_URL } from "../utils/constants";
import{useState} from "react";
import { Link } from "react-router-dom";
const Header=()=>{

    const [login,setLogin] =useState("Login");
    return(
        <div className="header-container">
            <div className="logo-container">
            <img src={ LOGO_URL } alt="logo-image" className="logo"/>
           

            
            </div>
            <div className="nav-item">
                <ul>
                    <li><Link to="/">Home</Link> </li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li>Cart</li>
                    <button className="login" onClick={()=>{
                        login==="Login"
                        ?setLogin("Logout")
                        :setLogin("Login");
                    }}>{login}</button>
                </ul>

            </div>
        </div>
    )
};

export default Header;