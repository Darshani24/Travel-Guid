'use client';
import React, { useState } from 'react';
import axios from 'axios'; // ✅ Import Axios

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const res = await axios.post('/api/contact', formData); // ✅ Axios POST request

      if (res.status === 201) {
        setStatus('Message sent!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Something went wrong');
      }
    } catch (error) {
      console.error(error);
      setStatus(error.response?.data?.error || 'Server error');
    }
  };

  return (
    <section className="px-6 py-10 flex flex-col justify-center items-center min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-8">Get in Touch</h1>
      <p className="mb-8 text-center max-w-md">
        We'd love to hear from you! Send us a message for questions or collaborations.
      </p>

      <div className="bg-green-50 shadow-lg rounded-lg p-8 w-full max-w-md">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-800 mx-auto block transition"
          >
            Send Message
          </button>
        </form>
        {status && <p className="mt-4 text-center text-sm text-gray-600">{status}</p>}
      </div>
    </section>
  );
};

export default Contact;
