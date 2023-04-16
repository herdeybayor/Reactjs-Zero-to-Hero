import React, { useState } from "react";
import NavbarLink from "./NavbarLink";

function Navbar() {
    // array to store index of navlinks
    const navLinks = ["Messages", "Today's Task", "Last Activity"];

    // state to store active index
    const [activeIndex, setActiveIndex] = useState(1);

    return (
        <div className="flex justify-between px-5 pt-5 border-b border-gray-300 absolute top-0 w-full">
            {navLinks.map((link, index) => (
                <NavbarLink onClick={() => setActiveIndex(index)} key={index} text={link} active={index === activeIndex} />
            ))}
        </div>
    );
}

export default Navbar;
