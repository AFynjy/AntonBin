import React from "react";

const Navbar = () => {
    return (
        <>
            <nav>
                <div className="nav-wrapper grey darken-4">
                    <a href="/home" className="brand-logo center">
                        Antonbin
                    </a>
                    <ul className="left hide-on-med-and-down">
                        <li>
                            <a className="link" href="/about">About us</a>
                        </li>
                        <li>
                            <a className="link" href="/login">Log in</a>
                        </li>
                        <li>
                            <a className="link" href="/signup">Sign up</a>
                        </li>
                        <li>
                            <a className="link" href="/home">+Anton</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;