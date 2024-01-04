"use client"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_okrngza', 'template_1fj9i08', form.current, '4hQJ-fZnCTIxhkZU1')
        .then((result) => {
            if (result.status === 200) {
            alert('Thanks for reaching out, We will be in touch with you soon.');
            form.current.reset();
            }
            console.log(result);
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <section className="pl-3 grid ">
        <div className='justify-self-center md:justify-self-start lg:ml-10'>
            <h1 className="text-4xl sm:text-6xl pt-10 text-yellow-400">CONTACT US</h1>
            <p className="text-sm sm:text-base pt-4">Have a question? We are here to listen to you.</p>
        </div>
        <div className='justify-self-center md:justify-self-end lg:mr-10'>
            <p className="text-sm sm:text-base pt-10">Tel: +234 812 715 8191</p>
            <p className="text-sm sm:text-base"> No 7, Maccido Royal Estate Galadima FCT- Abuja. </p>
            <p className="text-sm sm:text-base">Email: Primemegaxtech@gmail.com</p>
        </div>

    <form ref={form} onSubmit={sendEmail} 
    className="text-sm sm:text-base w-full max-w-sm pt-20 pb-20 justify-self-center md:justify-self-start lg:ml-10">
        <div className="pb-10">
            <div className="flex items-center border-b border-stone-400 py-2">
                <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                 type="text" placeholder="Full Name" aria-label="Full name"
                 name='user_name'
                 /> 
            </div>
        </div>

        <div className="pb-10">
            <div className="flex items-center border-b border-stone-400 py-2">
                <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="number" placeholder="Phone Number" aria-label="Phone Number "
                name='phone_number'
                /> 
            </div>
        </div>

        <div className="pb-10">
            <div className="flex items-center border-b border-stone-400 py-2">
                <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                 type="email" placeholder="Email" aria-label="Email"
                 name='user_email'
                 /> 
            </div>
        </div>

        <div className="pb-10">
            <div className="flex items-center border-b border-stone-400 py-2">
                <textarea className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text" placeholder="Message" aria-label="Message"
                name='message'
                /> 
            </div>
        </div>
        <div className="flex justify-end">
            <button className="flex-shrink-0 bg-stone-500 hover:bg-stone-700 border-stone-500 hover:border-stone-700 text-sm border-4 text-white py-1 px-2 rounded"
             type="submit">
                Submit
            </button>
        </div>
    </form>
    </section>
  )
}

export default ContactPage