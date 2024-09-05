import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="w-full text-white bg-gray-900">
      <div className="w-full max-w-screen-xl p-4 py-6 mx-auto lg:py-8">
        <div className="md:flex md:justify-between">
            <div className='flex flex-col gap-6'>
                <div className="mb-6 md:mb-0">
                    <Link to="https://github.com/avhixorin">
                    <span className="self-center text-2xl font-semibold text-white font-playwrite whitespace-nowrap hover:text-slate-400">
                        annapurna
                    </span>
                    </Link>
                </div>
            {/* Newsletter Section */}
                <div className="mb-6 md:mb-0">
                    <h2 className="mb-4 text-lg font-semibold text-gray-300">Subscribe to Our Newsletter</h2>
                    <div className="flex">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="p-2 text-white bg-gray-800 border-none rounded-l"
                    />
                    <button className="p-2 bg-blue-500 rounded-r hover:bg-blue-600">
                        Subscribe
                    </button>
                    </div>
                </div>
            </div>
          

          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-300 uppercase">Follow Us</h2>
              <ul className="font-medium text-gray-400">
                <li className="mb-4">
                  <a href="https://github.com/avhixorin" className="hover:underline">Github</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/abhishek-bharti-1558b3290" className="hover:underline">LinkedIn</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-300 uppercase">Legal</h2>
              <ul className="font-medium text-gray-400">
                <li className="mb-4">
                  <a href="#" className="hover:underline">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-400 sm:text-center">
            ©2024 <a href="https://github.com/avhixorin" className="hover:underline">Annapurna</a>. All Rights Reserved.
          </span>
        </div>
      </div>
      <div className="py-2 text-center bg-gray-800 font-oleo">
        <span className="text-sm text-gray-400">Developed by avhixorin</span>
      </div>
    </footer>
  );
};

export default Footer;
