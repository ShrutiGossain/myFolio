import React from "react";
import { contactDetails } from "../Details";

function Contact() {
  const { email, phone } = contactDetails;
  return (
    <div className="bg-gradient-to-bl from-[#242526] to-white min-h-screen flex items-center justify-center">
    <div
      className="shadow-md shadow-[#3a3b3c] rounded-xl border-2 border-[#ffffff] bg-gradient-to-t from-[3a3b3c] to-[3a3b3c] transition ease-in-out delay-50 hover:-translate-y-2 duration-500 px-16 py-8 pb-16 h-[650px]"
      style={{ backgroundColor: "#4e4f4f" }}
    >
    <main className="container mx-auto max-width section">
      <h1 className="text-center text-2xl md:text-3xl lg:text-6xl text-dark-heading dark:text-light-heading font-semibold md:font-bold">
        For any questions please drop a mail
      </h1>
      <h3 className="text-center text-2xl md:text-2xl lg:text-2xl text-dark-radient dark:text-light-heading font-semibold md:font-bold pt-5 md:pt-10 md:pb-6">
        <a href={`mailto:${email}`}>{email}</a>
      </h3>
      <span className="text-center text-content text-xl font-dark block">or</span>
      <h3 className="text-center text-2xl md:text-2xl lg:text-2xl text-dark-radient dark:text-light-heading font-semibold md:font-bold pt-5 md:pt-10 md:pb-6">
        <a href={`tel:${phone}`}>{phone}</a>
      </h3>
    </main>
    </div>
    </div>
  );
}

export default Contact;