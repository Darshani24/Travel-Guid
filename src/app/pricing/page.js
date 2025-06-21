import React from 'react'

const Pricing = () => {
  return (
    <section className="px-6 py-10 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-10 text-center">Our Pricing Plans</h1>

      <div className="grid md:grid-cols-3 gap-8">
        
        <div className="border p-8 rounded-lg shadow hover:shadow-lg transition bg-white flex flex-col">
          <h2 className="text-2xl font-bold mb-2">Free Plan</h2>
          <p className="text-green-600 text-xl font-semibold mb-4">$0 / month</p>
          <ul className="mb-6 space-y-2 flex-grow">
            <li>Access to 50+ destinations</li>
            <li> Basic trip planner</li>
            <li> Community forum access</li>
            <li> Offline maps</li>
            <li> Local guide recommendations</li>
          </ul>
          <button className="mt-auto bg-green-600 text-white py-3 rounded hover:bg-green-800 transition">
            Get Started
          </button>
        </div>

       
        <div className="border p-8 rounded-lg shadow-lg bg-green-100 flex flex-col relative">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-1 rounded-full font-semibold text-sm shadow-lg">
            Most Popular
          </div>
          <h2 className="text-2xl font-bold mb-2">Premium Plan</h2>
          <p className="text-green-700 text-xl font-semibold mb-4">$9.99 / month</p>
          <ul className="mb-6 space-y-2 flex-grow">
            <li>Unlimited destinations</li>
            <li>Local guides & curated experiences</li>
            <li>Offline maps & navigation</li>
            <li>Personalized itinerary builder</li>
            <li>Priority customer support</li>
          </ul>
          <button className="mt-auto bg-green-700 text-white py-3 rounded hover:bg-green-900 transition">
            Upgrade Now
          </button>
        </div>

    
        <div className="border p-8 rounded-lg shadow bg-white flex flex-col">
          <h2 className="text-2xl font-bold mb-2">Pro Traveler</h2>
          <p className="text-green-600 text-xl font-semibold mb-4">$19.99 / month</p>
          <ul className="mb-6 space-y-2 flex-grow">
            <li>Everything in Premium</li>
            <li>Exclusive travel deals & discounts</li>
            <li>Personal concierge support</li>
            <li>Early access to new features</li>
            <li>VIP community events</li>
          </ul>
          <button className="mt-auto bg-green-600 text-white py-3 rounded hover:bg-green-800 transition">
            Join Pro
          </button>
        </div>
      </div>
    </section>
    
  );
}

export default Pricing