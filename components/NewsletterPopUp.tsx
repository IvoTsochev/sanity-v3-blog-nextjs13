import React from "react";
import Modal from "react-modal";

const NewsletterPopUp = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="relative bg-white p-6 rounded-lg w-full max-w-md mx-auto">
        <h2 className="text-xl mb-4">Modal Title</h2>
        <p className="mb-4">Modal content goes here...</p>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default NewsletterPopUp;
