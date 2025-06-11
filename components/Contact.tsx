import { inter } from "@/app/fonts";
import Link from "next/link";
import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div>
      <h1 className="text-4xl">Contact Me</h1>
      <p className={`${inter.className} text-xl`}>
        You can also contact me by one of my links provided in about or through
        my email at{" "}
        <Link href="mailto:bruhs1ddiq@gmail.com">bruhs1ddiq@gmail.com</Link>
      </p>
      {/* <p className="text-[var(--green-200)] text-base">
        <span className="text-red-500">! </span>
        This form is monitored and abuse of the system will be met with a ban
        from the website;
      </p> */}

      <div className="w-full">
        {/* admin form */}
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
