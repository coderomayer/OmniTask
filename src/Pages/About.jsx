// About.js

import React from 'react';

const About = () => {
  return (
    <div className=" min-h-screen py-12 max-w-lg mx-auto">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">About OmniTask</h1>

        <div className="grid grid-cols-1  gap-12 ">
          {/* Left Column */}
          <div className="text-lg">
            <p>
              OmniTask is more than just a task management platform; it's a
              commitment to simplifying the lives of students. Our mission is
              to empower learners, ensuring they stay organized, focused, and in
              control of their academic journey.
            </p>
            <p className="mt-4">
              OmniTask was born out of the belief that effective task
              management is crucial for success in education. We understand the
              challenges students face, and we're here to provide a solution
              that not only meets but exceeds their expectations.
            </p>
          </div>

          {/* Right Column */}
          <div className="text-lg">
            <p>
              At OmniTask, we value collaboration, efficiency, and continuous
              improvement. Our platform is designed to facilitate teamwork,
              enhance productivity, and create a positive impact on the learning
              experience.
            </p>
            <p className="mt-4">
              Join us on this journey of redefining how students approach
              education. OmniTask is not just a tool; it's a companion,
              dedicated to making your educational experience as seamless and
              enjoyable as possible.
            </p>
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="text-center mt-8">
          <p className="text-lg mb-4">
            Ready to experience OmniTask? Sign up today and transform the way
            you manage tasks.
          </p>
          <button className="bg-blue-500 text-white py-2 px-6 rounded-full">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
