import React from 'react'
import {FaPaperPlane} from 'react-icons/fa';
import {ImLocation2} from 'react-icons/im';
import {FiPhoneCall} from 'react-icons/fi';
const ContactUS = () => {
    return (
        <div>
        <section class="contact" id="contact">
            <div class="container">
            <div class="contact-box">
                <div class="contact-info">
                <h3 class="title">Get in touch</h3>
                <p class="text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                    rerum odio incidunt doslorum officia dolorem eaque aprim?
                </p>
                <div class="information-wrap">
                    <div class="information">
                    <div class="contact-icon">
                        <i><ImLocation2 /></i>
                    </div>
                    <p class="info-text">92 Cherry Drive Unimodale, NY 11553</p>
                    </div>

                    <div class="information">
                    <div class="contact-icon">
                        <i><FaPaperPlane/></i>
                    </div>
                    <p class="info-text">lorem@ipsum.com</p>
                    </div>

                    <div class="information">
                    <div class="contact-icon">
                        <i><FiPhoneCall /></i>
                    </div>
                    <p class="info-text">123-456-789</p>
                    </div>
                </div>
                </div>

                <div class="contact-form">
                <h3 class="title">Contact me</h3>
                <div class="row">
                    <input
                    type="text"
                    class="contact-input"
                    placeholder="First Name"
                    />
                    <input
                    type="text"
                    class="contact-input"
                    placeholder="Last Name"
                    />
                </div>

                <div class="row">
                    <input type="text" class="contact-input" placeholder="Phone" />
                    <input type="email" class="contact-input" placeholder="Email" />
                </div>

                <div class="row">
                    <textarea
                    name="message"
                    class="contact-input textarea"
                    placeholder="Message"
                    ></textarea>
                </div>
                <a href="#/" class="btn">Send</a>
                </div>
            </div>
            </div>
        </section>
    </div>
    )
}

export default ContactUS
