import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { MdCalendarMonth } from "react-icons/md";
import { LiaMoneyBillSolid } from "react-icons/lia";
import { PiClockClockwiseFill } from "react-icons/pi";
import { PiBuildingOfficeLight } from "react-icons/pi";


const formatWeek = (timestamp) => {
  const postDate = new Date(timestamp * 1000);
  const today = new Date();
  const diffInDays = Math.floor((today - postDate) / (1000 * 60 * 60 * 24));

  if (diffInDays < 7) return "This week";
  else if (diffInDays < 14) return "Last week";
  else return `${Math.floor(diffInDays / 7)} weeks ago`;
};

const InternCard = ({ intern, onClick }) => {
  return (
    <div 
      className="bg-white rounded-xl shadow-md border border-gray-200 p-4 cursor-pointer hover:shadow-lg transition"
      onClick={() => onClick(intern)}
    >
      
      <div className='flex justify-between items-start mb-3'>
        <div className="items-start gap-2">
          <div className="text-lg font-normal text-gray-900 mb-1">{intern.title}</div>
          <div className="flex items-center gap-2 ">
            <div className="text-gray-700 text-base">{intern.company_name}</div>
            <div className="text-xs text-blue-800 px-2 py-1 border rounded-full border-blue-800">
              Actively hiring
            </div>
          </div>
        </div>

        <div className='p-3 text-2xl text-gray-700 border-0 rounded-lg bg-blue-50 border-'>
          <PiBuildingOfficeLight size={48} /> 
        </div>
      </div>

      <div className='flex items-center mb-3 gap-5  flex-wrap'>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <CiLocationOn />
          <span>{intern.location_names?.join(", ")}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <MdCalendarMonth />
          <span>{intern.duration}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <LiaMoneyBillSolid />
          <span>{intern.stipend.salary}</span>
        </div>
      </div>

      <div className="inline-flex items-center gap-2 text-xs text-green-950 bg-green-200 px-3 py-1 rounded-full border border-green-300">
        <PiClockClockwiseFill />
        <span>{formatWeek(intern.postedOnDateTime)}</span>
      </div>
    </div>
  );
};

export default InternCard;
