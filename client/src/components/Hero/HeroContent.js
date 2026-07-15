import { motion } from "framer-motion";

import "./Hero.css";

export default function HeroContent() {
    return (
        <motion.div
            className="hero-content"
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
        >

           <p className="hero-greeting">
    👋 Hello, I'm
</p>

<h1 className="hero-name">
    Rehan <span>Khan</span>
</h1>

<h2 className="hero-title">
    Full Stack MERN Developer
</h2>

<p className="hero-description">
    I build fast, scalable and modern web applications with React, Node.js,
    Express and MongoDB. Passionate about creating premium digital experiences
    with clean code and beautiful user interfaces.
</p>

<div className="hero-btns">

    <a
        href="#projects"
        className=" btn btn-primary"
    >
        View Projects
    </a>

  <a
    href="/resume/Rehan_Khan_Resume.pdf"
    download
    className="secondary-btn"
>
    Download Resume
</a>

</div>

<div className="hero-stats">

    <div className="stat">
        <h2>3+</h2>
        <p>Projects</p>
    </div>

    <div className="stat">
        <h2>2+</h2>
        <p>Years Learning</p>
    </div>

    <div className="stat">
        <h2>100%</h2>
        <p>Responsive</p>
    </div>

</div>
        </motion.div>
    );
}