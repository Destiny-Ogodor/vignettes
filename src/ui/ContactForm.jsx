import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Your message has been sent!");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="flex w-full items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-4xl rounded-2xl bg-white p-16 shadow-lg">
        <h2 className="mb-6 text-center text-3xl font-bold text-gray-800">
          Fill The Form
        </h2>
        <p className="mb-8 text-center text-gray-600">
          Fill out the form below to send us a message. Well get back to you as
          soon as possible!
        </p>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Row for Name and Email */}
          <div className="flex flex-col md:flex-row md:gap-6">
            <div className="w-full md:w-1/2">
              <label
                htmlFor="name"
                className="mb-2 block font-medium text-gray-700"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full rounded-lg border border-gray-300 p-3 text-gray-700 focus:outline-none"
              />
            </div>
            <div className="w-full md:w-1/2">
              <label
                htmlFor="email"
                className="mb-2 mt-4 block font-medium text-gray-700 sm:mt-0"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full rounded-lg border border-gray-300 p-3 text-gray-700 focus:outline-none"
              />
            </div>
          </div>

          {/* Subject */}
          <div>
            <label
              htmlFor="subject"
              className="mb-2 block font-medium text-gray-700"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Enter the subject"
              className="w-full border border-gray-300 p-3 text-gray-700 focus:outline-none"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="mb-2 block font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your message here..."
              className="w-full rounded-lg border border-gray-300 p-3 text-gray-700 focus:outline-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-siteRed px-4 py-3 text-lg font-medium text-white transition-all duration-300 hover:bg-stone-900 focus:outline-none md:text-xl"
            >
              Send us a message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
