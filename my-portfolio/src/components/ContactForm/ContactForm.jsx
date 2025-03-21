import React from "react";
import "./ContactForm.css";
import Swal from "sweetalert2";

const ContactForm = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "810455f8-5918-4852-9b6d-d6795d1fcf0e");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());

        if (res.success) {
            Swal.fire({
              title: "Success!",
              text: "Message sent successfully!",
              icon: "success"
            });}
    };

    return (
        <div id="contact" className="contact">
            
           
                
            <div className="contact-container"> 

                <div className="contact-info">
                <h3>Get in touch</h3>
                <p><span>Email:</span> nikipavlov2005@gamail.com</p>
                <p><span>Phone:</span> +359 888 888 888</p>
                <p><span>Address:</span> Sofia, Bulgaria</p>
                <p>Whether you have suggestions, ideas, or just <br></br>want to connect, don’t hesitate to get in touch.<br></br> We’ll get back to you as soon as possible!</p>
            </div>

            <div className="contact-form">
                <form onSubmit={onSubmit}>
                    <div className="input-container">
                        <input type="text" placeholder="Name" name="name" required />
                        <input type="email" placeholder="Email" name="email" required />
                    </div>
                   
                    <div className="input-container">
                        <textarea type="text" placeholder="Message" name="message" required></textarea>
                    </div>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    </div>
    );
};

export default ContactForm;

