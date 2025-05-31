import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri"; 

const faqs = [
  {
    question: 'How to search internships on Internshala?',
    answer: 'Click here if you are looking for internships. Next, update your preferred profile or location on the web page and use relevant filters to find internships as per your preference.'
  },
  {
    question: 'How can I apply for internships?',
    answer: `You can apply for an internship on Internshala using the following steps-
- Click on 'View Details' to get details about the company and the profile.
- Go through the details thoroughly and apply for internships where your profile matches the requirements of the company.
- Click on 'Apply Now' and follow the steps to submit your application.
- If you are not registered on Internshala, register yourself today to find your dream internship.`
  },
  {
    question: 'Do I need to pay to apply for internships?',
    answer: 'Absolutely not! Internshala is a free platform. You don’t have to pay anything to apply for internships on Internshala.'
  },
  {
    question: 'What kind of internships can I find?',
    answer: 'You can find 45,000+ internships, work from home internships and part time internships in your preferred location or profile on Internshala.'
  },
  {
    question: 'Which courses guarantee placement?',
    answer: `You can check out the following courses for a placement guarantee -
- Digital Marketing course with placement
- Data Science course with placement
- Full Stack Developer course with placement
- Product Management course with placement
- UI UX Design course with placement
- HR Course with placement
- Electric Vehicle course with placement`
  },
  {
    question: 'Which certified courses does Internshala offer?',
    answer: `Internshala offers a number of certified courses to improve your skill set. Check them out here -
- Web Development Course
- Python Course
- Ethical Hacking Course
- Java Course
- Digital Marketing Course
- Data Science Course
- Tally Course
- Machine Learning Course
- UI UX Design Course`
  }
];

const FrequentlyQues = () => {
  const [showFAQs, setShowFAQs] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-6xl mx-auto mt-8 px-4">
      <div className="flex justify-center">
        <button
          onClick={() => setShowFAQs(!showFAQs)}
          className="text-sky-700 py-2 px-4 shadow font-md text-lg border border-sky-700 rounded-md flex items-center gap-1"
        >
          Frequently asked questions
          {showFAQs ? (
            <RiArrowDropUpLine className="text-2xl" />
          ) : (
            <RiArrowDropDownLine className="text-2xl" />
          )}
        </button>
      </div>

      {showFAQs && (
        <div className="mt-4 overflow-hidden">
          {faqs.map((faq, index) => (
            <div key={index}>
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left p-4 bg-white"
              >
                <span className="font-medium text-base md:text-lg">{faq.question}</span>
                <span className="text-sky-700 text-xs">
                  {openIndex === index ? <FaMinus /> : <FaPlus />}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4 text-gray-700 text-sm md:text-base whitespace-pre-line">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FrequentlyQues;
