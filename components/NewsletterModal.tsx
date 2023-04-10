"use client";

import React, {useRef, useState} from "react";

const NewsletterModal = () => {
  const [message, setMessage] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);

  const subscribe = async () => {
    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: inputRef.current?.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });

    const { error } = await res.json();

    if (error) {
      setMessage(error);
      return;
    };

    inputRef.current.value = null;
    setMessage('Success! 🔥🔥🚀🚀 You are now subscribed to the newsletter.');
  };

  return (
    <div className="p-6">
      <h1 className="text-4xl mb-6">
        Subscribe <br />
        to my newsletter.
      </h1>

      {
        !message ? (
          <>
          <p className="mb-6">
        I won't spam you with emails. I will only send you the best content. 
      </p>

      <div className="flex bg-gradient-to-r from-red-500 to-orange-500 p-[3px]">
        <input
          type="email" 
          className="w-full max-w-[350px] p-2 focus:outline-none text-black"
          placeholder="Enter your email"
          ref={inputRef}
          name="email"
        />
        <button className="w-full text-center" onClick={subscribe}>Subscribe to newsletter > </button>
      </div>
          </>
        ) : message
      }


      {/* <p className="mb-6">
        I won't spam you with emails. I will only send you the best content. 
      </p>

      <div className="flex bg-gradient-to-r from-red-500 to-orange-500 p-[3px]">
        <input
          type="email" 
          className="w-full max-w-[350px] p-2 focus:outline-none text-black"
          placeholder="Enter your email"
          ref={inputRef}
          name="email"
        />
        <button className="w-full text-center" onClick={subscribe}>Subscribe to newsletter > </button>
      </div> */}

      {/* {message} */}
    </div>
  );
};

export default NewsletterModal;
