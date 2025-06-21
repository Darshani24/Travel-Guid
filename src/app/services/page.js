import React from 'react'

const Services = () => {
  return (
   <section className="px-6 py-10 flex flex-col justify-center items-center">
    <div className='bg-green-50 shadow-lg rounded-lg p-8 w-full max-w-md min-h-[400px] flex flex-col items-center'>
      <h1 className="text-3xl font-bold mb-6">Our Services</h1>
      <ul className="space-y-4 text-lg">
        <li> Personalized Itinerary Creation</li>
        <li> Real-time Travel Updates</li>
        <li> Offline Travel Assistance</li>
        <li> Local Guide Recommendations</li>
        <li> Budget Tracking Tools</li>
      </ul>
    </div>
      
    </section>
  
  );
}

export default Services