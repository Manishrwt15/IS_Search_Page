import React, { useState, useEffect } from 'react';
import {
  MdClose,
  MdLocationOn,
  MdAccessTime,
  MdWork,
  MdDateRange,
  MdHowToReg,
  MdUpdate,
  MdPeople,
  MdCardGiftcard
} from "react-icons/md";
import { PiClockClockwiseFill } from "react-icons/pi";
import { LiaMoneyBillSolid } from "react-icons/lia";

const InternDetailModal = ({ intern, onClose }) => {
  const [showExitPopup, setShowExitPopup] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const formatLocations = () => {
    if (intern?.work_from_home) return "Remote";
    if (intern?.location_names?.length > 0) {
      return intern.location_names.join(", ");
    }
    return "Location not specified";
  };

  const formatStipend = () => {
    if (!intern?.stipend) return "Not specified";
    const { salary, salaryValue1, currency, scale } = intern.stipend;
    if (salary) return salary;
    return `${currency} ${salaryValue1} /${scale}`;
  };

  const formatWeek = (timestamp) => {
    if (!timestamp) return "Unknown";
    const postDate = new Date(timestamp * 1000);
    const today = new Date();
    const diffInDays = Math.floor((today - postDate) / (1000 * 60 * 60 * 24));
    if (diffInDays < 7) return "This week";
    else if (diffInDays < 14) return "Last week";
    else return `${Math.floor(diffInDays / 7)} weeks ago`;
  };

  const handleCloseClick = () => {
    setShowExitPopup(true);
  };

  const handleExitConfirm = () => {
    setShowExitPopup(false);
    onClose();
  };

  const handleExitCancel = () => {
    setShowExitPopup(false);
  };

  return (
    <div className="fixed inset-0 bg-transparent flex items-center justify-center z-50">
      <div className="bg-white bg-opacity-90 backdrop-blur-md w-full max-w-3xl max-h-[85vh] p-6 rounded-lg shadow-lg overflow-y-auto relative">
        <button
          className="absolute top-4 right-4 text-gray-600 text-2xl"
          onClick={handleCloseClick}
        >
          <MdClose />
        </button>

        <div className="flex items-start mb-4">
          <div className="text-left">
            <h2 className="text-2xl font-bold mb-1">{intern?.title}</h2>
            <h3 className="text-lg text-gray-700">
              {intern?.company_name}
              <span className="text-xs text-blue-800 px-2 py-1 border rounded-full border-blue-800 ml-2">
                Actively hiring
              </span>
            </h3>
          </div>
        </div>

        <div className="flex flex-col gap-6 mb-6 text-left">
          <DetailItem value={formatStipend()} icon={<LiaMoneyBillSolid />} />
          <DetailItem value={formatLocations()} icon={<MdLocationOn />} />
          <DetailItem value={intern?.duration} icon={<MdAccessTime />} />
        </div>

        <div className="inline-flex items-center gap-2 text-xs text-green-950 bg-green-200 px-3 py-1 rounded-full border border-green-300">
          <PiClockClockwiseFill />
          <span>{formatWeek(intern.postedOnDateTime)}</span>
        </div>

        <hr className='mt-4' />

        <div className="flex flex-wrap gap-6 mb-6 text-left mt-7">
          <DetailItem value={intern?.employment_type || "Internship"} icon={<MdWork />} />
          <DetailItem value={intern?.start_date || "Starts Immediately"} icon={<MdDateRange />} />
          <DetailItem value={intern?.application_deadline} icon={<MdHowToReg />} />
          <DetailItem value={intern?.posted_on} icon={<MdUpdate />} />
          <DetailItem value={intern?.application_status_message?.message || "Not specified"} icon={<MdPeople />} />
          <DetailItem value={intern?.ppo_label_value || (intern?.is_ppo ? "Available" : "Not available")} icon={<MdCardGiftcard />} />
        </div>

        <div className="space-y-4 text-left">
          {intern?.job_segments?.length > 0 && (
            <InfoSection title="Job Segments" content={intern.job_segments.join(", ")} />
          )}

          {intern?.labels_app_in_card?.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {intern.labels_app_in_card.map((label, index) => (
                <span key={index} className="text-sky-500 px-3 py-1 border border-sky-500 rounded-full text-sm">
                  {label}
                </span>
              ))}
            </div>
          )}

          {intern?.office_days && (
            <InfoSection title="Office Policy" content={intern.office_days} />
          )}

          {/* Application Info */}
          <div className="pt-4">
            <p className="font-semibold">Application Details:</p>
            <p>Expires on: {intern?.expires_at}</p>
            <p className="flex items-center">
              Status: {intern?.posted_by_label}
              <span className={`ml-2 px-2 py-1 border rounded-md text-xs border-sky-500 ${
                intern?.posted_by_label_type === "success"
                  ? "text-sky-500"
                  : "text-sky-500"
              }`}>
                {intern?.posted_by_label_type}
              </span>
            </p>
          </div>
        </div>
      </div>
      
      {/* Exit Confirmation Popup */} 
      {showExitPopup && (
        <div className="fixed inset-0 bg-transparent flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-md max-w-96">
            <h3 className="text-lg font-semibold mb-4">Exit application?</h3>
            <p className='text-sm'>Changes you have made will not be saved. Are you sure you want to leave?</p>
            <div className="flex justify-end mt-8">
              <button
                className="px-4 py-2 text-sky-500 rounded-md border border-sky-500 mr-2"
                onClick={handleExitCancel}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-sky-500 text-white rounded-md border border-sky-500"
                onClick={handleExitConfirm}
              >
                Exit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const DetailItem = ({ label, value, icon }) => (
  <div className="flex items-center min-w-[200px]">
    {icon && <span className="mr-2 text-gray-500 text-lg">{icon}</span>}
    <div>
      <span className="text-sm text-gray-600 font-medium">{label}</span>
      <span className="ml-1 text-sm text-gray-800">{value || "Not specified"}</span>
    </div>
  </div>
);

const InfoSection = ({ title, content }) => (
  <div>
    <h4 className="font-semibold text-lg mb-1">{title}</h4>
    <p className="text-gray-700">{content}</p>
  </div>
);

export default InternDetailModal;
