import React from "react";
import { contactDetails } from "../Details";

function Contact() {
  const { email, phone } = contactDetails;
  return (
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
  );
}

export default Contact;