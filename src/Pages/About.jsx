// About.js

import React from 'react';

const About = () => {

  return (

    <div className="min-h-screen p-8 md:p-24 max-w-4xl mx-auto">
      <div className="container mx-auto ">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center uppercase font-Josefin Sans text-blue-600">
          Know About <br /> <span className='font-Quicksand text-3xl md:text-5xl text-black'>OmniTask Story</span>
        </h1>

        <div className='flex items-center justify-center'>
          <img className=' md:w-1/2' src="Checklist.svg" alt="OmniTask Checklist" />
        </div>

        <div className="grid grid-cols-1 gap-12">
          {/* Left Column */}
          <div className="text-sm md:text-lg ">
            <p>
              OmniTask is more than a task management platform; it's a commitment to simplifying students' lives. Our mission is to empower learners, ensuring they stay organized, focused, and in control of their academic journey.
            </p>
            <p className="mt-4">
              Born out of the belief that effective task management is crucial for success in education, OmniTask provides a solution that exceeds students' expectations, understanding the challenges they face.
            </p>
          </div>

          {/* Right Column */}
          <div className="text-sm md:text-lg">
            <p>
              At OmniTask, we value collaboration, efficiency, and continuous improvement. Our platform is designed to facilitate teamwork, enhance productivity, and create a positive impact on the learning experience.
            </p>
            <p className="mt-4">
              Join us in redefining how students approach education. OmniTask is more than a tool; it's a companion dedicated to making your educational experience as seamless and enjoyable as possible.
            </p>
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="mt-8">
          <p className="text-sm md:text-lg mb-4">
            Ready to experience OmniTask? Sign up today and transform the way you manage tasks.
          </p>

          <a href="/registration">
          <button className="bg-blue-500 text-white py-2 px-6 rounded-full">
            Sign Up
          </button>
          </a>

        </div>
      </div>
    </div>
  );
};

export default About;
