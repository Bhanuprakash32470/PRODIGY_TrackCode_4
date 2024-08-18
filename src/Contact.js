import React, { useState } from 'react';
import telephone from './photos/telephone.jpg';
import { ToastContainer, toast } from 'react-toastify';
import emailjs from 'emailjs-com';
import 'react-toastify/dist/ReactToastify.css';

export const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (formData.email.length === 0) {
      return toast.warning('Please enter your email');
    }
    if (formData.message.length === 0) {
      return toast.warning('Please enter your message');
    }

    emailjs.send(
      'service_sunsf4m', // Replace with your EmailJS service ID
      'template_fzt7fvu', // Replace with your EmailJS template ID
      formData,
      'ERqUoD5eZUFMDPezN' // Replace with your EmailJS user ID
    ).then((result) => {
      if (result.text === "OK") {
        toast.success("Email sent successfully");
        setFormData({
          email: '',
          message: ''
        });
      } else {
        toast.error("Failed to send email");
      }
    }, (error) => {
      toast.error("Failed to send email");
    });
  };

  return (
    <div className='flex flex-row h-[30rem] w-full' id="contact">
      <h1 className='text-white absolute text-[2.5rem] left-[40rem] font-serif'>Contact <span className='text-[#E2E2B6]'>Me</span></h1>
      <div className='w-[50%] my-[10rem] h-[50rem]'>
        <img src={telephone} alt="Contact" className='w-[25rem] h-[20rem] -my-[2rem] mx-16' />
      </div>
      <div className='my-[10rem] mx-[10rem]'>
        <form onSubmit={sendEmail}>
          <div>
            <input
              type="email"
              name="email"
              className='rounded w-[20rem]'
              onChange={handleChange}
              value={formData.email}
              placeholder='Enter your email'
              required
            />
          </div>
          <div className='my-[3rem] relative'>
            <input
              type="text"
              name="message"
              id="myInput"
              className='h-[9rem] rounded w-[20rem]'
              onChange={handleChange}
              value={formData.message}
              placeholder=''
              required
            />
            <label htmlFor="myInput" className="absolute left-2 top-2 text-gray-400">Placeholder text</label>
          </div>
          <button type="submit" className="border-2 bg-[#E2E2B6] border-white text-[#021526] rounded font-semibold">
            Send message
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};