import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { sendContactForm } from "../../lib/api";

const initialState = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: ""
};

const initState = { values: initialState };

const Contact = () => {
  const [contactState, setContactState] = useState(initState);
  const [messageSent, setMessageSent] = useState(null);

  const changeHandler = ({ target }) => {
    setContactState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value
      }
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendContactForm(contactState.values);
      setMessageSent(true);
      setContactState(initState);
      setTimeout(() => {
        setMessageSent(null);
      }, 1500);
    } catch (error) {
      setContactState((prev)=>({
        ...prev,
        error: error.message,
      }))
      setTimeout(() => {
        let trimSet = {...contactState};
        delete trimSet.error;
        setContactState(trimSet);
      }, 1500);
    }
  };

  const { values, error } = contactState;

  return (
    <div id="contact" className="w-full lg:h-screen">
      {messageSent && (
        <h1 className="fixed text-lg top-[20px] left-[50%] translate-x-[-50%] z-[1000] bg-green-600 bg-opacity-70 w-[40%] text-center py-2 rounded-lg">
          Message delivered
        </h1>
      )}
      {error && 
        <h1 className="fixed text-lg top-[20px] left-[50%] translate-x-[-50%] z-[1000] bg-red-600 bg-opacity-70 w-[40%] text-center py-2 rounded-lg">
         {error}
        </h1>
      }
      <div className="max-w=[1240px] m-auto px-2 py-16 w-full">
        <p className=" text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className=" py-4">Get In Touch</h2>
        <div className=" grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className=" col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className=" lg:p-4 h-full">
              <div>
                <img
                  className="rounded-xl hover:scale-105 ease-in duration-300 max-h-[500px] mx-auto"
                  src="/assets/profile.webp"
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2">Victor J</h2>
                <p>Front-End Developer</p>
                <p className=" py-4">
                  I am available for freelance positions. Contact me and let's
                  talk
                </p>
              </div>
              <div>
                <p className=" uppercase pt-8">Connect with me</p>
                <div className=" flex items-center justify-between py-4">
                  <a
                    href="https://www.linkedin.com/in/victor-juarez-b7a04b22a/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a href="https://github.com/juarezv90" target="_blank">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaGithub />
                    </div>
                  </a>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <BsFillPersonLinesFill />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right */}

          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      name="name"
                      type="text"
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      value={values.name}
                      onChange={changeHandler}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      name="phone"
                      type="text"
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      value={values.phone}
                      onChange={changeHandler}
                    />
                  </div>
                </div>
                <div className=" flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    name="email"
                    type="email"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    value={values.email}
                    onChange={changeHandler}
                  />
                </div>
                <div className=" flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    name="subject"
                    type="text"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    value={values.subject}
                    onChange={changeHandler}
                  />
                </div>
                <div className=" flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    name="message"
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows={10}
                    value={values.message}
                    onChange={changeHandler}
                  ></textarea>
                </div>
                <button
                  value="Submit"
                  className="w-full p-4 text-gray-100 mt-4"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-12">
        <Link href="/">
          <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
            <HiOutlineChevronDoubleUp className="text-[#5651e5] " size={30} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
