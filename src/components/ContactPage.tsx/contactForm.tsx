import React, { FormEvent, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};
type Inputs = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default function ContactForm({}: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const [loading, setLoading] = useState(false);
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    // e.preventDefault();
    setLoading(true);
    try {
      const rawResponse = await fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const content = await rawResponse.json();
      if (content.status === "success") {
        reset();
        toast.success(content.message, {
          position: toast.POSITION.BOTTOM_CENTER,
        });
      } else {
        toast.error(content.message, {
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <form className="space-y-[1.875rem]" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            className="w-full h-[3.125rem] rounded-[1.563rem] font-normal text-base bg-light-alpha-25 px-[1.25rem] text-accent-700 border-2	 border-transparent focus:border-light-alpha-40 transition-all duration-300 outline-none overflow-hidden placeholder-gray-500"
            type="text"
            placeholder="Name"
            {...register("name", { required: true })}
          />
          {errors.name?.type === "required" && (
            <p role="alert" className="text-sm text-accent-light-100 mt-1 ">
              Name is required
            </p>
          )}
        </div>
        <div>
          <input
            className="w-full h-[3.125rem] rounded-[1.563rem] font-normal text-base bg-light-alpha-25 px-[1.25rem] text-accent-700 border-2 border-transparent focus:border-light-alpha-40 transition-all duration-300 outline-none overflow-hidden placeholder-gray-500"
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          {errors.email?.type === "required" && (
            <p role="alert" className="text-sm text-accent-light-100 mt-1 ">
              A valid Email is required
            </p>
          )}
        </div>

        <input
          className="w-full h-[3.125rem] rounded-[1.563rem] font-normal text-base bg-light-alpha-25 px-[1.25rem] text-accent-700 border-2 border-transparent focus:border-light-alpha-40 transition-all duration-300 outline-none overflow-hidden placeholder-gray-500"
          type="text"
          placeholder="Phone Number"
          {...register("phone", { required: false })}
        />
        <div>
          <textarea
            className="w-full h-[7.5rem] py-3 rounded-[1.563rem] font-normal text-base bg-light-alpha-25 px-[1.25rem] text-accent-700 border-2 border-transparent focus:border-light-alpha-40 transition-all duration-300 outline-none overflow-hidden placeholder-gray-500 resize-none	"
            placeholder="Message"
            {...register("message", { required: true, maxLength: 300 })}
          />
          {errors.message?.type === "required" && (
            <p role="alert" className="text-sm text-accent-light-100 mt-1 ">
              Message is required
            </p>
          )}
          {errors.message?.type === "maxLength" && (
            <p role="alert" className="text-sm text-accent-light-100 mt-1 ">
              Please Write a small massage under 300 characters. I&apos;ll
              Contact with you as soon as possible
            </p>
          )}
        </div>

        <button
          disabled={loading}
          className="button-primary disabled:opacity-25"
          type="submit"
          defaultValue="Submit"
        >
          Send
        </button>
      </form>
      <ToastContainer />
    </>
  );
}
