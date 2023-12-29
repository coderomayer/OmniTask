// Explore.js

import React from 'react';

const Explore = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Explore OmniTask</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="text-lg">
            <p>
              Welcome to the heart of OmniTask, where collaboration meets
              productivity. Explore the unique features that make OmniTask the
              ultimate platform for efficient task management and shared
              learning experiences.
            </p>
            <p className="mt-4">
              Discover the power of creating tasks, managing deadlines, and
              seamlessly collaborating with peers. OmniTask is designed to
              enhance your educational journey.
            </p>
          </div>

          {/* Right Column */}
          <div className="text-lg">
            <p>
              OmniTask brings together students from various backgrounds,
              fostering a community where ideas are shared, tasks are managed,
              and collaboration thrives. Explore study groups, shared projects,
              and the joy of achieving academic goals together.
            </p>
            <p className="mt-4">
              Dive into a world where learning is interactive, engaging, and
              tailored to your needs. OmniTask invites you to explore
              possibilities and redefine your educational experience.
            </p>
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="text-center mt-8">
          <p className="text-lg mb-4">
            Ready to start exploring OmniTask? Sign up today and be a part of
            our collaborative learning community.
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
