import "./Contact.css";
import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { TailSpin } from "react-loader-spinner";
import SectionAnimation from "../Animation/SectionAnimation";
import {
    FaEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaGithub,
    FaLinkedin,
    FaInstagram
} from "react-icons/fa";

export default function Contact() {
    const [formData, setFormData] = useState({

        name: "",
        email: "",
        subject: "",
        message: ""

    });

    const [loading, setLoading] = useState(false);
    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value

        });

    };
    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            setLoading(true);

            const response = await axios.post(
                `${process.env.REACT_APP_API_URL}/api/contact`,
                formData
            );

            toast.success("Message sent successfully 🚀");

            setFormData({

                name: "",

                email: "",

                subject: "",

                message: ""

            });

        }

        catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Something went wrong."
            );

        }

        finally {

            setLoading(false);

        }

    };
    return (


        <SectionAnimation>

            <section
                className="contact"
                id="contact"
            >

                <div className="container">

                    <div className="contact-heading">

                        <span>CONTACT</span>

                        <h2>
                            Let's Build Something
                            <strong> Amazing Together.</strong>
                        </h2>

                    </div>

                    <div className="contact-wrapper">

                        <motion.div

                            className="contact-left"

                            initial={{ opacity: 0, x: -80 }}

                            whileInView={{ opacity: 1, x: 0 }}

                            transition={{ duration: .7 }}

                            viewport={{ once: true }}

                        >

                            <h3>
                                Get In Touch
                            </h3>

                            <p>

                                I'm always interested in internships,
                                freelance projects and full-time
                                opportunities.

                                If you have an idea or project,
                                let's connect.

                            </p>

                            <div className="contact-info">

                                <div>

                                    <FaEnvelope />

                                    <span>iaarehankhan2000@gmail.com</span>

                                </div>

                                <div>

                                    <FaPhoneAlt />

                                    <span>+91 7987077417</span>

                                </div>

                                <div>

                                    <FaMapMarkerAlt />

                                    <span>India</span>

                                </div>

                            </div>

                            <div className="contact-social">

                                <a href="#">
                                    <FaGithub />
                                </a>

                                <a href="#">
                                    <FaLinkedin />
                                </a>

                                <a href="#">
                                    <FaInstagram />
                                </a>

                            </div>

                        </motion.div>

                        <motion.form
                            onSubmit={handleSubmit}
                            className="contact-form"

                            initial={{ opacity: 0, x: 80 }}

                            whileInView={{ opacity: 1, x: 0 }}

                            transition={{ duration: .7 }}

                            viewport={{ once: true }}

                        >

                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={handleChange}
                            />

                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={handleChange}
                            />

                            <textarea
                                rows="6"
                                name="message"
                                placeholder="Write your message..."
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>

                          <button
    type="submit"
    className="primary-btn"
    disabled={loading}
>

    {
        loading ?

            <>
                <TailSpin
                    height={20}
                    width={20}
                    color="#ffffff"
                    ariaLabel="loading"
                />

                <span style={{ marginLeft: "10px" }}>
                    Sending...
                </span>
            </>

            :

            "Send Message"

    }

</button>

                        </motion.form>

                    </div>

                </div>

            </section>

        </SectionAnimation>
    )

}