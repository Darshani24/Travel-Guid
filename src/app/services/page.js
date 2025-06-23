import React from 'react'

const Services = () => {
  return (
   <section className="px-6 py-10 flex flex-col justify-center items-center">

    <div>
      
    </div>
    <div className='bg-gradient-to-r from-neutral-400/20 to bg-neutral-50/30 hover:bg-neutral-200/35 border border-green-900/35 shadow-xl rounded-xl p-8 w-full max-w-md min-h-[400px] flex flex-col items-center'>
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