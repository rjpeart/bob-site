import React, { useState } from "react";
import './Menu.css'



const Menu = (props) => {
    const [menuStatus, setMenuStatus] = useState("money");

    const menuClickHandler = (event) => {
        const menuStatus = event.target.id
        props.onChangeProjectType(menuStatus)
        setMenuStatus(event.target.id)
    }
    return(
        <div className="flex px-8 pb-4">
            <h4 id="money" className={`mr-4 transition duration-300 ${menuStatus === "money" ? 'selected' : 'unselected'}` } onClick={menuClickHandler}>For Money</h4>
            <h4 className={`transition duration-300 ${menuStatus === "fun" ? 'selected' : 'unselected'}`} id ="fun" onClick={menuClickHandler}>For Fun</h4>
        </div>
    )
}

export default Menu