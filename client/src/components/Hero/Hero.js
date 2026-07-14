import "./Hero.css";
import SectionAnimation from "../Animation/SectionAnimation";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {

    return (

        <SectionAnimation>

   
        <section className="hero" id="home">

            <div className="hero-overlay"></div>

            <div className="container">

                <div className="hero-grid">

                    <HeroContent />

                    <HeroImage />

                </div>

            </div>

        </section>

</SectionAnimation>

    );

}