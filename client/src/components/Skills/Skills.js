import "./Skills.css";
import { motion } from "framer-motion";
import SectionAnimation from "../Animation/SectionAnimation";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiBootstrap,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGithub,
  SiPostman,
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
  { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
  { name: "React", icon: <FaReact />, color: "#61DAFB" },
  { name: "Bootstrap", icon: <SiBootstrap />, color: "#7952B3" },
  { name: "Node.js", icon: <FaNodeJs />, color: "#68A063" },
  { name: "Express", icon: <SiExpress />, color: "#ffffff" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
  { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
  { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
  { name: "GitHub", icon: <SiGithub />, color: "#ffffff" },
  { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
];

export default function Skills() {
  return (

    <SectionAnimation>

        <section className="skills" id="skills">

      <div className="container">

        <motion.div
          className="skills-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
        >
          <span>MY SKILLS</span>

          <h2>
            Technologies I Use To Build
            <strong> Modern Applications.</strong>
          </h2>
        </motion.div>

        <div className="skills-grid">

          {skills.map((skill, index) => (

            <motion.div
              className="skill-card"
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * .05 }}
              viewport={{ once: true }}
            >

              <div
                className="skill-icon"
                style={{ color: skill.color }}
              >
                {skill.icon}
              </div>

              <h3>{skill.name}</h3>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

</SectionAnimation>
  );
}