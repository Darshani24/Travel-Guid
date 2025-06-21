import React from 'react'

const Contact = () => {
  return (
     <section className="px-6 py-10 flex flex-col justify-center items-center min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-8">Get in Touch</h1>
      <p className="mb-8 text-center max-w-md">
        We'd love to hear from you! Send us a message for questions or collaborations.
      </p>

    
      <div className="bg-green-50 shadow-lg rounded-lg p-8 w-full max-w-md">
       <form className="space-y-6">
           <input
            type="text"
            placeholder="Your Name"
             className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
           />
           <input
             type="email"
             placeholder="Your Email"
             className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
           />
           <textarea
             placeholder="Your Message"
             rows={5}
             className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
           />

           <button className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-800 mx-auto block transition">
             Send Message
           </button>
         </form>
       </div>  
    </section>
  
  );
}

export default Contact