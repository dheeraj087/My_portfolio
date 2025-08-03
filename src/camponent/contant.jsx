import React from "react";

const ContactForm = () => {
  return (
    <div className="w-full mx-auto p-6 mb-4 bg-[#1A1A1D] border border-[#595959] rounded-lg shadow-md text-white">
      <h2 className="text-3xl font-bold mb-6 text-center  text-[#676767]">Contact Us</h2>

      <form className="flex flex-col space-y-4" >
        <div>
          <label className="block mb-1 font-semibold">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full p-3 rounded-md bg-[#161618] border border-[#838385] focus:outline-none focus:ring-2  focus:ring-red-950"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 rounded-md bg-[#161618] border border-[#838385] focus:outline-none focus:ring-2  focus:ring-red-950"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Message</label>
          <textarea
            rows="4"
            placeholder="Write your message"
            className="w-full p-3 rounded-md bg-[#161618] border border-[#838385] focus:outline-none focus:ring-2 focus:ring-red-950"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-[#606060] text-black font-bold py-3 rounded-md hover:bg-[#b8bb9f] transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
