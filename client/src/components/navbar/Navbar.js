import "./Navbar.css";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {

        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, []);

    return (

        <nav className={scrolled ? "navbar glass" : "navbar"}>

            <div className="nav-logo">
                RK.
            </div>

            <ul className={menuOpen ? "nav-links active" : "nav-links"}>

                <li><a href="#home">Home</a></li>

                <li><a href="#about">About</a></li>

                <li><a href="#skills">Skills</a></li>

                <li><a href="#projects">Projects</a></li>

                <li><a href="#contact">Contact</a></li>

            </ul>

            <button className="resume-btn">
                Resume
            </button>

            <div
                className="menu-icon"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {
                    menuOpen
                        ? <FaTimes />
                        : <FaBars />
                }
            </div>

        </nav>

    );
}