"use client";

import React, {useRef} from "react";

const NewsletterModal = () => {

  const inputRef = useRef<HTMLInputElement>(null);

  const handleEmailSubmit = () => {
    console.log(inputRef.current?.value);
    
  }

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
          type="text"
          className="w-full max-w-[350px] p-2 focus:outline-none text-black"
          placeholder="Enter your email"
          ref={inputRef}
        />
        <button className="w-full text-center" onClick={handleEmailSubmit}>Subscribe to newsletter > </button>
      </div>
    </div>
  );
};

export default NewsletterModal;
