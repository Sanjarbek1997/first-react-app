import { Logo } from "../../Assets/Icon/Icon"
import Nav from "./Nav/Nav"

import "./header.css"


const Header =()=>{
    return (
        <header className="navbar">
            <Logo/>
            <ul className="navbar__list">
                <Nav Text={"HOME"}/>
                <Nav Text={"ABOUT US"}/>
                <Nav Text={"CREATE YOUR PLAN"}/>
            </ul>
        </header>
    )
}

export default Header