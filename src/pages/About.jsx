import React from 'react';
import { Tv, Users, Globe, Smartphone } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="bg-gray-50 text-gray-800 py-12 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
            About Chitramcinema
          </h1>
          <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto">
            Regional entertainment that speaks your language – feel the story, not just watch it.
          </p>
        </div>

        {/* Intro Section */}
        <div className="flex flex-col md:flex-row items-center mb-16 justify-center">
          <div className="w-full md:w-1/2 ">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Entertainment in Your Comfort Language</h2>
            <p className="text-gray-700">
              Chitramcinema brings unlimited entertainment — original features, kids' shows, lifestyle programs, and more — in the language that sounds like home.
            </p>
            <ul className="mt-4 list-disc list-inside text-sm text-gray-600">
              <li>Exclusive web & political series</li>
              <li>Regional content backed by Kishkinda Entertainment</li>
              <li>Watch on mobile, TV, desktop, anytime</li>
            </ul>
          </div>
        </div>

        {/* Feature Cards using Flexbox */}
        <div className="flex flex-wrap justify-center gap-6 text-center mb-16">
          <div className="bg-white shadow-md rounded-xl p-6 w-full sm:w-5/12 lg:w-1/5 hover:shadow-xl transition">
            <Globe className="mx-auto text-indigo-500 mb-4" size={36} />
            <h3 className="font-semibold mb-2">Multi-language Content</h3>
            <p className="text-sm text-gray-600">
              Movies & series in Hindi, Tamil, Telugu, Kannada, Malayalam, and more.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6 w-full sm:w-5/12 lg:w-1/5 hover:shadow-xl transition">
            <Tv className="mx-auto text-indigo-500 mb-4" size={36} />
            <h3 className="font-semibold mb-2">Device Compatibility</h3>
            <p className="text-sm text-gray-600">
              Works on smartphones, smart TVs, tablets, and desktops.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6 w-full sm:w-5/12 lg:w-1/5 hover:shadow-xl transition">
            <Users className="mx-auto text-indigo-500 mb-4" size={36} />
            <h3 className="font-semibold mb-2">Family Profiles</h3>
            <p className="text-sm text-gray-600">
              Personalize content for each family member with parental control.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6 w-full sm:w-5/12 lg:w-1/5 hover:shadow-xl transition">
            <Smartphone className="mx-auto text-indigo-500 mb-4" size={36} />
            <h3 className="font-semibold mb-2">Smart Recommendations</h3>
            <p className="text-sm text-gray-600">
              Discover stories tailored to your preferences over time.
            </p>
          </div>
        </div>

        {/* Access Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-indigo-700 mb-4">Access Anywhere, Anytime</h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Visit us at <a href="https://chitramcinema.com" className="text-blue-600 underline">chitramcinema.com</a> or download the app from Google Play Store.
          </p>
          <a
            href="https://chitramcinema.com"
            className="inline-block bg-indigo-600 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-indigo-700 transition"
          >
            Start Watching Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
