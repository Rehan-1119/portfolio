import { motion } from "framer-motion";
import profile from "../../assets/images/Profile.jpeg";

import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiJavascript } from "react-icons/si";

import "./Hero.css";

export default function HeroImage() {
  return (
    <motion.div
      className="hero-image"
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="profile-card glass">

        <div className="profile-ring">
          <img src={profile} alt="Rehan Khan" />
        </div>

        <div className="floating-icon react">
          <FaReact />
        </div>

        <div className="floating-icon node">
          <FaNodeJs />
        </div>

        <div className="floating-icon mongo">
          <SiMongodb />
        </div>

        <div className="floating-icon js">
          <SiJavascript />
        </div>

      </div>
    </motion.div>
  );
}