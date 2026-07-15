const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const sendMessage = async (req, res) => {

    try {

        const { name, email, subject, message } = req.body;

        if (!name || !email || !subject || !message) {

            return res.status(400).json({

                success: false,
                message: "All fields are required."

            });

        }

        const { data, error } = await resend.emails.send({

            from: "Portfolio <onboarding@resend.dev>",

            to: "iaarehankhan2000@gmail.com",

            replyTo: email,

            subject: `📩 Portfolio Contact - ${subject}`,

            html: `
                <h2>New Portfolio Contact</h2>

                <hr>

                <p><strong>Name:</strong> ${name}</p>

                <p><strong>Email:</strong> ${email}</p>

                <p><strong>Subject:</strong> ${subject}</p>

                <p><strong>Message:</strong></p>

                <p>${message}</p>
            `

        });

        if (error) {

            console.error(error);

            return res.status(500).json({

                success: false,

                message: error.message

            });

        }

        return res.status(200).json({

            success: true,

            message: "Message Sent Successfully 🚀"

        });

    }

    catch (error) {

        console.error(error);

        return res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

module.exports = {

    sendMessage

};