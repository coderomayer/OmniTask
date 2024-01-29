// Explore.js

import React from 'react';

const Explore = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 md:p-24 max-w-4xl mx-auto font-Quicksand">
      <div className="container mx-auto">
        <h1 className="text-2xl md:text-5xl font-extrabold mb-8 ">Journey into Efficiency: Unveiling the Wonders of OmniTask</h1>

        <div className="grid grid-cols-1  gap-6">

          <div>
            <img className='rounded-md' src="https://img.freepik.com/free-vector/goals-habits-tracking-application-template_23-2148676844.jpg?w=1800&t=st=1706533280~exp=1706533880~hmac=9f32f12d962cc284192311ee225c33cbb96d9b30d4920a1c9e7cb202a556da95" alt="" />
          </div>
          
          <div className="text-sm md:text-lg">
            <p>
            Welcome to the immersive realm of OmniTask, where collaboration seamlessly intertwines with productivity. Join us as we delve into the distinctive features that make OmniTask the epitome of efficient task management and shared learning experiences.
            </p>
          </div>

          
          <div className="text-sm md:text-lg">
            <h2 className='font-bold text-blue-600 mb-2'>Discover Dynamic Task Management:</h2>
            <p>
            Unleash the power of OmniTask by exploring its robust features for creating and managing tasks with utmost efficiency. From setting deadlines to seamlessly collaborating with peers, OmniTask is meticulously crafted to elevate your educational journey. Dive into a world where every task is a step towards academic excellence.
            </p>
           
          </div>

          <div className="text-sm md:text-lg">
            <h2 className='font-bold text-blue-600 mb-2'>A Hub of Collaborative Learning:</h2>
            <p>
            OmniTask goes beyond individual achievements, bringing together students from diverse backgrounds to form a thriving community. Here, ideas flow freely, tasks are managed effortlessly, and collaboration becomes the cornerstone of success. Explore the richness of study groups, engage in shared projects, and experience the joy of achieving academic milestones collectively.
            </p>
           
          </div>
          <div className="text-sm md:text-lg">
            <h2 className='font-bold text-blue-600 mb-2'>Interactive Learning Redefined:</h2>
            <p>
            Immerse yourself in a world where learning transcends traditional boundaries. OmniTask invites you to discover a dynamic landscape where education becomes interactive, engaging, and tailored to your unique needs. It's not just a platform; it's an invitation to explore endless possibilities and redefine your educational journey.
            </p>
           
          </div>

        </div>

        {/* Call-to-Action */}
        <div className="text-center mt-8">
          <p className="text-sm md:text-lg mb-4">
          As you step into the world of OmniTask, be prepared to unlock a new era of educational excellence where collaboration and productivity converge to shape a brighter future. Explore, engage, and redefine your educational experience with OmniTask.
          </p>
          <button className="bg-blue-500 text-white py-2 px-6 rounded-full">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Explore;
