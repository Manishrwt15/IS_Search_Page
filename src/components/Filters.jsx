import React, { useState } from "react";
import { CiFilter } from "react-icons/ci";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { RxQuestionMarkCircled } from "react-icons/rx";

const Filters = ({ filters ={}, onFilterChange, onClearFilters }) => {
  const [showMoreFilters, setShowMoreFilters] = useState(false);
  const [showDurationDropdown, setShowDurationDropdown] = useState(false);

  const handleChange = (field, value) => {
    onFilterChange({ ...filters, [field]: value });
  };

  const clearAll = () => {
    setShowMoreFilters(false);
    setShowDurationDropdown(false);
    onClearFilters();
  };

  const disabled = filters.asPerPref;

  return (
    <div className="space-y-6">
      <div className="bg-white border border-gray-300 rounded-md p-4">
        <div className="flex items-center space-x-2 text-lg font-medium mb-4 justify-center">
          <CiFilter className="text-sky-500" />
          <span>Filters</span>
        </div>

        <div className="flex items-center space-x-2 mb-4">
          <input
            type="checkbox"
            checked={filters.asPerPref}
            onChange={() => handleChange('asPerPref', !filters.asPerPref)}
          />
          <span>
            As per my{" "}
            <span className="text-sky-500 cursor-pointer">preferences</span>
          </span>
        </div>

        
        <div
          className={`flex flex-col space-y-4 ${
            disabled ? "pointer-events-none filter blur-sm" : ""
          }`}
        >
          <label className="block mb-1 font-medium text-gray-700">Profile</label>
          <input
            type="text"
            placeholder="e.g. Marketing"
            value={filters.profile}
            onChange={(e) => handleChange('profile', e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none"
          />

          <label className="block mb-1 font-medium text-gray-700">Location</label>
          <input
            type="text"
            placeholder="e.g. Delhi"
            value={filters.location}
            onChange={(e) => handleChange('location', e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none"
          />

          <div className="flex flex-col space-y-2">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={filters.workFromHome}
                onChange={() => handleChange('workFromHome', !filters.workFromHome)}
              />
              <span>Work from home</span>
            </label>

            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={filters.partTime}
                onChange={() => handleChange('partTime', !filters.partTime)}
              />
              <span>Part-time</span>
            </label>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">
              Desired minimum monthly stipend (₹)
            </label>
            <input
              type="range"
              min={0}
              max={10000}
              step={2000}
              value={filters.stipend}
              onChange={(e) => handleChange('stipend', Number(e.target.value))}
              className="w-full accent-sky-500"
            />
            <div className="flex justify-between text-xs text-gray-600 mt-1 px-1">
              <span>0</span>
              <span>2K</span>
              <span>4K</span>
              <span>6K</span>
              <span>8K</span>
              <span>10K</span>
            </div>
          </div>

          <div
            className="flex items-center text-sky-500 font-medium cursor-pointer"
            onClick={() => setShowMoreFilters(!showMoreFilters)}
          >
            <span>View more filters</span>
            {showMoreFilters ? (
              <RiArrowDropUpLine size={20} />
            ) : (
              <RiArrowDropDownLine size={20} />
            )}
          </div>

          {showMoreFilters && (
            <div className="space-y-4">
              {/* Starting from date */}
              <div>
                <label className="block mb-1 text-gray-700 font-medium">
                  Starting from (or after)
                </label>
                <input
                  type="date"
                  value={filters.startDate}
                  onChange={(e) => handleChange('startDate', e.target.value)}
                  placeholder="Choose date"
                  className="border border-gray-300 rounded px-3 py-2 focus:outline-none w-full"
                />
              </div>

              <div className="relative">
                <label className="block mb-1 font-medium text-gray-700">Max. duration (months)</label>
                <input
                  type="text"
                  placeholder="Choose duration"
                  readOnly
                  value={filters.duration}
                  onClick={() => setShowDurationDropdown(!showDurationDropdown)}
                  className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none cursor-pointer"
                />
                {showDurationDropdown && (
                  <div className="absolute z-10 bg-white border border-gray-300 rounded shadow-md mt-1 w-full">
                    {["1 Month", "2 Months", "3 Months", "6 Months", "12 Months"].map((option) => (
                      <div
                        key={option}
                        onClick={() => {
                          handleChange('duration', option.split(' ')[0]);
                          setShowDurationDropdown(false);
                        }}
                        className="px-4 py-2 hover:bg-sky-100 cursor-pointer"
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex flex-col space-y-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={filters.jobOffer}
                    onChange={() => handleChange('jobOffer', !filters.jobOffer)}
                  />
                  <span>Internships with job offer </span>
                  <RxQuestionMarkCircled />
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={filters.fastResponse}
                    onChange={() => handleChange('fastResponse', !filters.fastResponse)}
                  />
                  <span>Fast response </span>
                  <RxQuestionMarkCircled />
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={filters.earlyApplicant}
                    onChange={() => handleChange('earlyApplicant', !filters.earlyApplicant)}
                  />
                  <span>Early applicant</span>
                  <RxQuestionMarkCircled />
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={filters.womenOnly}
                    onChange={() => handleChange('womenOnly', !filters.womenOnly)}
                  />
                  <span>Internships for women </span>
                  <RxQuestionMarkCircled />
                </label>
              </div>
            </div>
          )}
        </div>

        <div className="mt-4 text-right">
          <button
            onClick={clearAll}
            className="text-sky-500 text-sm hover:underline"
          >
            Clear all
          </button>
        </div>
      </div>

      {/* Keyword Search */}
      <div className="bg-white border border-gray-300 rounded-md p-4">
        <label className="text-md text-gray-700 mb-2 block text-center font-bold">
          Keyword Search
        </label>
        <div className="flex">
          <input
            type="text"
            placeholder="e.g. Design, Mumbai, Infosys"
            value={filters.keyword}
            onChange={(e) => handleChange('keyword', e.target.value)}
            className="w-full border border-gray-300 rounded-l px-3 py-2 focus:outline-none"
          />
          <button
            className="bg-sky-500 px-4 rounded-r text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filters;