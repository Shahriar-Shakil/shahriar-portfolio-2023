import React, { FormEvent, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

type Props = {};

export default function ContactForm({}: Props) {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let form = {
      name: fullname,
      email,
      phone,
      message,
    };
    const rawResponse = await fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    const content = await rawResponse.json();
    console.log(content, "success");
    if (content.status === "success") {
      setMessage("");
      setPhone("");
      setFullname("");
      setEmail("");
      toast.success(content.message);
    } else {
      toast.error(content.message);
    }
  };
  return (
    <>
      <form className="space-y-[1.875rem]" onSubmit={handleSubmit}>
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
          placeholder="Phone Number"
          name="phone"
          value={phone}
          required
          onChange={(e) => {
            setPhone(e.target.value);
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
      <ToastContainer />
    </>
  );
}
