import "./Projects.css";
import { motion } from "framer-motion";
import { FaGithub, FaArrowRight } from "react-icons/fa";
import SectionAnimation from "../Animation/SectionAnimation";
import project1 from "../../assets/images/Project1.png";
import project2 from "../../assets/images/Project2.png";
import project3 from "../../assets/images/Project3.png";

const projects = [

{
title:"Noor Vastra",
image:project1,

description:
"Premium MERN fashion e-commerce platform with authentication, cart, checkout, admin dashboard and responsive UI.",

tech:["React","Node","Express","MongoDB"],

github:"#",

live:"#"

},

{

title:"Developer Portfolio",

image:project2,

description:
"Modern portfolio with Framer Motion animations, responsive layouts and premium UI.",

tech:["React","Bootstrap","CSS"],

github:"#",

live:"#"

},

{

title:"MERN Dashboard",

image:project3,

description:
"Dashboard with CRUD operations, authentication and REST API integration.",

tech:["React","Express","MongoDB"],

github:"#",

live:"#"

}

];

export default function Projects(){

return(


<SectionAnimation>

      <section className="projects" id="projects">

<div className="container">

<div className="projects-heading">

<span>PROJECTS</span>

<h2>
Featured
<strong> Work</strong>
</h2>

</div>

<div className="projects-wrapper">

{

projects.map((project,index)=>(

<motion.div

className="project-card"

key={index}

initial={{opacity:0,y:80}}

whileInView={{opacity:1,y:0}}

transition={{duration:.6,delay:index*.15}}

viewport={{once:true}}

>

<div className="project-image">

<img
src={project.image}
alt={project.title}
/>

</div>

<div className="project-content">

<h3>{project.title}</h3>

<p>{project.description}</p>

<div className="tech-list">

{

project.tech.map((item,i)=>(

<span key={i}>
{item}
</span>

))

}

</div>

<div className="project-buttons">

<a href={project.github}>

<FaGithub/>

GitHub

</a>

<a href={project.live}>

Live Demo

<FaArrowRight/>

</a>

</div>

</div>

</motion.div>

))

}

</div>

</div>

      </section>

</SectionAnimation>
)

}