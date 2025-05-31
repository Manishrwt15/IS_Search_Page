import React from "react";
import { FaInstagram, FaYoutube, FaGooglePlay, FaApple } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FiLinkedin } from "react-icons/fi";
import Gpay from "../assets/gpay.svg";
import Apple from "../assets/apple.svg";

const Footer = () => {
  return (
    <footer className="bg-neutral-700 text-white px-4 sm:px-8 py-10 mt-16">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 text-sm cursor-pointer">
          <div>
            <h3 className="font-semibold mb-2 text-xl">Internships by places</h3>
            <ul className="space-y-1">
              <li>Internship in India</li>
              <li>Internship in Delhi</li>
              <li>Internship in Bangalore</li>
              <li>Internship in Hyderabad</li>
              <li>Internship in Mumbai</li>
              <li>Internship in Chennai</li>
              <li>Internship in Gurgaon</li>
              <li>Internship in Kolkata</li>
              <li>Virtual internship</li>
              <li>View all internships</li>
            </ul>
          </div>

          
          <div>
            <h3 className="font-semibold mb-2 text-xl">Internship by stream</h3>
            <ul className="space-y-1">
              <li>Computer Science Internship</li>
              <li>Electronics Internship</li>
              <li>Mechanical Internship</li>
              <li>Civil Internship</li>
              <li>Marketing Internship</li>
              <li>Chemical Internship</li>
              <li>Finance Internship</li>
              <li>Summer Research Fellowship</li>
              <li>Campus Ambassador Program</li>
              <li>View all internships</li>
            </ul>
          </div>

          
          <div>
            <h3 className="font-semibold mb-2 text-xl">Jobs by places</h3>
            <ul className="space-y-1">
              <li>Jobs in Delhi</li>
              <li>Jobs in Mumbai</li>
              <li>Jobs in Bangalore</li>
              <li>Jobs in Jaipur</li>
              <li>Jobs in Kolkata</li>
              <li>Jobs in Hyderabad</li>
              <li>Jobs in Pune</li>
              <li>Jobs in Chennai</li>
              <li>Jobs in Lucknow</li>
              <li>View all jobs</li>
            </ul>
          </div>

          
          <div>
            <h3 className="font-semibold mb-2 text-xl">Jobs by stream</h3>
            <ul className="space-y-1">
              <li>Marketing jobs</li>
              <li>Content writing jobs</li>
              <li>Web development jobs</li>
              <li>Sales jobs</li>
              <li>Finance jobs</li>
              <li>Digital Marketing jobs</li>
              <li>Computer Science jobs</li>
              <li>Graphic Design jobs</li>
              <li>Data Science jobs</li>
              <li>View all jobs</li>
            </ul>
          </div>

          
          <div>
            <h3 className="font-semibold mb-2 text-xl">Placement Guarantee Courses</h3>
            <ul className="space-y-1">
              <li>Full Stack Development Course</li>
              <li>Data Science Course</li>
              <li>Product Management Course</li>
              <li>Digital Marketing Course</li>
              <li className="mt-6 font-bold text-md">
                Certification Courses{" "}
                <span className="bg-orange-500 text-white px-2 py-1 rounded-md text-xs ml-1">
                  OFFER
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 text-sm border-t border-gray-500 mt-10 pt-6 cursor-pointer">
          <div>
            <h3 className="font-semibold mb-2">About us</h3>
            <ul className="space-y-1">
              <li>We're hiring</li>
              <li>Hire interns for your company</li>
              <li>Post a Job</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Team Diary</h3>
            <ul className="space-y-1">
              <li>Blog</li>
              <li>Our Services</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Terms & Conditions</h3>
            <ul className="space-y-1">
              <li>Privacy</li>
              <li>Contact us</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Sitemap</h3>
            <ul className="space-y-1">
              <li>College TPO registration</li>
              <li>List of Companies</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <div className="flex items-center gap-5 mb-4 md:mb-0">
            <img src={Gpay} alt="Google Pay" className="h-40" />
            <img src={Apple} alt="Apple Store" className="h-40" />

            {/* Social Icons */}
            <FaInstagram className="text-2xl text-white hover:text-pink-500 transition" />
            <CiTwitter className="text-2xl text-white hover:text-blue-400 transition" />
            <FaYoutube className="text-2xl text-white hover:text-red-600 transition" />
            <FiLinkedin className="text-2xl text-white hover:text-blue-600 transition" />
          </div>

          {/* Right - Copyright */}
          <div className="text-center text-white text-sm leading-snug">
            © Copyright 2025 Internshala<br />
            (Scholiverse Educare Private Limited)
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
