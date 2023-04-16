import React from "react";

function NavbarLink(props) {
    return (
        <p onClick={props.onClick} className={`cursor-pointer ${props.active ? "text-black font-bold pb-3 border-b-2 border-black" : "text-gray-400"}`}>
            {props.text}
        </p>
    );
}

export default NavbarLink;
