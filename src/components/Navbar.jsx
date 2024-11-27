import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="navbar">
            {/* Logo */}
            <a href="/" onClick={closeMenu}>
                <div className="logo">
                    ROBOFEST
                </div>
            </a>

            {/* Hamburger Menu */}
            <div
                className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`}
                onClick={toggleMenu}
            >
                <div className="hamburger-line"></div>
                <div className="hamburger-line"></div>
                <div className="hamburger-line"></div>
            </div>

            {/* Navigation Links */}
            <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                <Link to="/" onClick={closeMenu}>Home</Link>
                <Link to="/about" onClick={closeMenu}>About Us</Link>
                <Link to="/gallery" onClick={closeMenu}>Gallery</Link>
                <Link to="/contact" onClick={closeMenu}>Contact Us</Link>
                <Link to="/academy" onClick={closeMenu}>Academy</Link>

                {/* Join Us Button for Mobile */}

                <a href="https://forms.gle/H69Bz836LUAZaAyb7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mobile-join-us"
                    onClick={closeMenu}>
                    <button className="purp-btn">
                        <svg className="svgIcon" viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path></svg>
                        Join us
                    </button>
                </a>
            </nav>

            {/* Join Us Button for Desktop */}
            <a
                href="https://forms.gle/H69Bz836LUAZaAyb7"
                target="_blank"
                rel="noopener noreferrer"
                className="desktop-join-us"
            >
                <button className="purp-btn">
                    <svg className="svgIcon" viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path></svg>
                    Join us
                </button>
            </a>
        </header>
    );
}

export default Navbar;