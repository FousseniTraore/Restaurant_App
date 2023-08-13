import React, { useState } from 'react';
import Logo from '../assets/TheTable-removebg-preview.png'

function Contact() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
      if (firstName.length === 0){
          alert("Please enter your Fullname");
      }
      else if (lastName.length === 0){
        alert("Please enter your lastname")
      }
      else if (email.length === 0){
          alert("Please enter your email address")
      }
      else if (message.length === 0){
          alert("Please write a message to us.")
      }
      else{
          alert(`Thank you ${fullName}, we have received your message.`);
      }
  }


  return (
    <div className='lg:px-30 sm:px-16 px-10 py-10 md:py-20'>
      <div className='pb-10 md:pb-5'>
        <h1 className='text-BritishGreen font-bold text-5xl'>Contact Us </h1>
      </div>
      <div className="px-6 isolate bg-white  sm:py-3 lg:px-8 lg:py-20">
        <div className="mx-auto  text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Send us a message</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">Ask anything you might need, our team will be happy to guide you</p>
        </div>
        <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label  className="block text-sm font-semibold leading-6 text-BritishGreen">First name</label>
              <div className="mt-2.5">
                <input type="text" name="first-name" id="first-name" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-BritishGreen sm:text-sm sm:leading-6"/>
              </div>
            </div>
            <div>
              <label  className="block text-sm font-semibold leading-6 text-BritishGreen">Last name</label>
              <div className="mt-2.5">
                <input type="text" name="last-name" id="last-name"  value={lastName} onChange={(e) => setLastName(e.target.value)} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-BritishGreen sm:text-sm sm:leading-6"/>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-semibold leading-6 text-BritishGreen">Email</label>
              <div className="mt-2.5">
                <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-BritishGreen sm:text-sm sm:leading-6"/>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-semibold leading-6 text-BritishGreen">Message</label>
              <div className="mt-2.5">
                <textarea name="message" id="message" rows="4" value={message} onChange={(e) => setMessage(e.target.value)} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-BritishGreen sm:text-sm sm:leading-6"></textarea>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button  onClick={handleSubmit} className="block w-full rounded-md bg-BritishGreen px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#14532d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-BritishGreen">Send message</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
