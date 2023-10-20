import React, { useState } from "react";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

import emailjs from "@emailjs/browser";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "JTierney Tech",
      message: message,
    };

    emailjs
      .send(
        "service_t19f9op",
        "template_vg6e90r",
        templateParams,
        "S1a-Yuu6Vg0TbaGTc"
      )
      .then(
        (result) => {
          console.log(result.text);

          // Show a success toast notification
          toast.success("Form submitted!", {
            position: "top-right",
            autoClose: 3000, // Auto-close the toast after 3 seconds
          });
        },
        (error) => {
          console.log(error.text);
          // Handle errors, show an error message to the user?
          // Show an error toast notification
          toast.error("Form submission failed. Please try again later.", {
            position: "top-right",
            autoClose: 3000, // Auto-close the toast after 3 seconds
          });
        }
      );

    // Reset the form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/** text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4 className="text-[80px] uppercase text-accent font-medium mb-2 leading-none">
                Get In Touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let's Work <br /> Together!
              </h2>
            </div>
          </motion.div>
          {/** form */}
          <motion.form
            onSubmit={handleSubmit}
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
          >
            <input
              className="bg-transparent border-b py-3 w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="bg-transparent border-b py-3 w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              className="bg-transparent border-b py-12 w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button className="btn btn-lg">Send Message</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
