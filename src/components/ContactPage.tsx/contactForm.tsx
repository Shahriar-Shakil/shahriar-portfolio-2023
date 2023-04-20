import React, { useState } from "react";

type Props = {};

export default function ContactForm({}: Props) {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  //   Form validation state
  const [errors, setErrors] = useState({});

  //   Setting button text on form submission
  const [buttonText, setButtonText] = useState("Send");

  // Setting success or failure messages states
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setButtonText("Sending");
    const res = await fetch("/api/sendgrid", {
      body: JSON.stringify({
        email: email,
        fullname: fullname,
        subject: subject,
        message: message,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();
    if (error) {
      console.log(error);
      setShowSuccessMessage(false);
      setShowFailureMessage(true);
      setButtonText("Send");
      return;
    }
    setShowSuccessMessage(true);
    setShowFailureMessage(false);
    setButtonText("Send");
    console.log(fullname, email, subject, message);
  };
  return (
    <form method="post" className="space-y-[1.875rem]" onSubmit={handleSubmit}>
      <input
        className="w-full h-[3.125rem] rounded-[1.563rem] font-normal text-base bg-light-alpha-25 px-[1.25rem] text-accent-700 border-2	 border-transparent focus:border-light-alpha-40 transition-all duration-300 outline-none overflow-hidden placeholder-gray-500"
        name="fullname"
        type="text"
        placeholder="Name"
        required
        value={fullname}
        onChange={(e) => {
          setFullname(e.target.value);
        }}
      />
      <br />
      <input
        className="w-full h-[3.125rem] rounded-[1.563rem] font-normal text-base bg-light-alpha-25 px-[1.25rem] text-accent-700 border-2 border-transparent focus:border-light-alpha-40 transition-all duration-300 outline-none overflow-hidden placeholder-gray-500"
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        required
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        className="w-full h-[3.125rem] rounded-[1.563rem] font-normal text-base bg-light-alpha-25 px-[1.25rem] text-accent-700 border-2 border-transparent focus:border-light-alpha-40 transition-all duration-300 outline-none overflow-hidden placeholder-gray-500"
        type="text"
        placeholder="Subject"
        name="subject"
        value={subject}
        required
        onChange={(e) => {
          setSubject(e.target.value);
        }}
      />
      <br />
      <textarea
        className="w-full h-[7.5rem] py-3 rounded-[1.563rem] font-normal text-base bg-light-alpha-25 px-[1.25rem] text-accent-700 border-2 border-transparent focus:border-light-alpha-40 transition-all duration-300 outline-none overflow-hidden placeholder-gray-500 resize-none	"
        placeholder="Message"
        name="message"
        value={message}
        required
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      <br />
      <button className="button-primary" type="submit" defaultValue="Submit">
        Send
      </button>
    </form>
  );
}
