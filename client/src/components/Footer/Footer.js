import "./Footer.css";
import { FaGithub, FaLinkedin, FaInstagram, FaArrowUp } from "react-icons/fa";
import SectionAnimation from "../Animation/SectionAnimation";
export default function Footer() {

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (


        <SectionAnimation>

 <footer className="footer">

            <div className="container">

                <div className="footer-content">

                    <div className="footer-left">

                        <h2>Rehan Khan</h2>

                        <p>
                            Full Stack MERN Developer passionate about building
                            modern and scalable web experiences.
                        </p>

                    </div>

                    <div className="footer-center">

                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#skills">Skills</a>
                        <a href="#projects">Projects</a>
                        <a href="#contact">Contact</a>

                    </div>

                    <div className="footer-right">

                        <a href="/">
                            <FaGithub />
                        </a>

                        <a href="/">
                            <FaLinkedin />
                        </a>

                        <a href="/">
                            <FaInstagram />
                        </a>

                    </div>

                </div>

                <div className="footer-bottom">

                    <p>
                        © 2026 Rehan Khan. All Rights Reserved.
                    </p>

                    <button
                        className="scroll-top"
                        onClick={scrollTop}
                    >
                        <FaArrowUp />
                    </button>

                </div>

            </div>

        </footer>

</SectionAnimation>

    );
}