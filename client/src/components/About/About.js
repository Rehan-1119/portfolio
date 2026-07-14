import "./About.css";
import about from "../../assets/images/aboutImg.jpeg";
import { motion } from "framer-motion";
import SectionAnimation from "../Animation/SectionAnimation";
export default function About() {
    return (

    
      <SectionAnimation>

       <section
            className="about"
            id="about"
        >

            <div className="container">

                <motion.div
                    className="about-header"
                    initial={{opacity:0,y:50}}
                    whileInView={{opacity:1,y:0}}
                    transition={{duration:.7}}
                    viewport={{once:true}}
                >

                    <span>ABOUT ME</span>

                    <h2>
                        Building modern web experiences with
                        <strong> clean code & beautiful UI.</strong>
                    </h2>

                </motion.div>

                <div className="row align-items-center gy-5">

                    <motion.div
                        className="col-lg-6"
                        initial={{opacity:0,x:-80}}
                        whileInView={{opacity:1,x:0}}
                        transition={{duration:.7}}
                        viewport={{once:true}}
                    >

                        <img
                            src={about}
                            alt="about"
                            className="about-image"
                        />

                    </motion.div>

                    <motion.div
                        className="col-lg-6"
                        initial={{opacity:0,x:80}}
                        whileInView={{opacity:1,x:0}}
                        transition={{duration:.7}}
                        viewport={{once:true}}
                    >

                        <p className="about-description">

                            I'm Rehan Khan, a Full Stack MERN Developer who enjoys
                            turning ideas into fast, scalable and visually appealing
                            web applications.

                            I focus on writing clean code, building responsive
                            interfaces and creating smooth user experiences using
                            React, Node.js, Express and MongoDB.

                        </p>

                        <div className="about-grid">

                            <div className="about-card">
                                <h3>Frontend</h3>
                                <p>React • Bootstrap • CSS • JavaScript</p>
                            </div>

                            <div className="about-card">
                                <h3>Backend</h3>
                                <p>Node • Express • MongoDB • REST APIs</p>
                            </div>

                            <div className="about-card">
                                <h3>Learning</h3>
                                <p>Agentic AI • Advanced MERN • System Design</p>
                            </div>

                            <div className="about-card">
                                <h3>Goal</h3>
                                <p>Software Engineer & Product Builder</p>
                            </div>

                        </div>

                    </motion.div>

                </div>

            </div>

        </section>

</SectionAnimation>
    );
}