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
        A mailing list that <br />
        isn't doodoo-butter.
      </h1>

      <p className="mb-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt molestiae
        rerum voluptas temporibus molestias velit quisquam doloremque doloribus
        quibusdam ratione laborum ipsum autem quae, iusto inventore placeat,
        repellat dicta assumenda.
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

      {message}
    </div>
  );
};

export default NewsletterModal;
