import React, { useEffect, useState } from "react";
import axios from "axios";
import InternCard from "./InternCard";
import InternDetailModal from "./InternDetailModal";
import Filters from "./Filters";
import { IoIosArrowForward } from "react-icons/io";

const InternCardList = () => {
  const [internships, setInternships] = useState([]);
  const [filteredInternships, setFilteredInternships] = useState([]);
  const [selectedIntern, setSelectedIntern] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    profile: '',
    location: '',
    workFromHome: false,
    partTime: false,
    stipend: 0,
    startDate: '',
    duration: '',
    jobOffer: false,
    fastResponse: false,
    earlyApplicant: false,
    womenOnly: false,
    keyword: ''
  });

  useEffect(() => {
    axios
      .get("https://internshala.com/hiring/search")
      .then((res) => {
        const internshipsArray = Object.values(res.data.internships_meta || {});
        setInternships(internshipsArray);
        setFilteredInternships(internshipsArray);
        setLoading(false);
      })
      .catch((err) => {
        console.error("API error:", err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (internships.length === 0) return;

    let result = [...internships];

    if (filters.profile) {
      const profileLower = filters.profile.toLowerCase();
      result = result.filter(intern =>
        intern.title?.toLowerCase().includes(profileLower) ||
        intern.category_name?.toLowerCase().includes(profileLower)
      );
    }

    if (filters.location) {
      const locationLower = filters.location.toLowerCase();
      result = result.filter(intern =>
        intern.location_names?.some(loc =>
          loc.toLowerCase().includes(locationLower)
        )
      );
    }

    if (filters.workFromHome) {
      result = result.filter(intern =>
        intern.work_from_home === true ||
        intern.location_names?.some(loc =>
          loc.toLowerCase().includes('work from home') ||
          loc.toLowerCase().includes('remote')
        )
      );
    }

    if (filters.stipend > 0) {
      result = result.filter(intern =>
        intern.stipend?.salary_value >= filters.stipend
      );
    }

    if (filters.startDate) {
      result = result.filter(intern =>
        new Date(intern.start_date) >= new Date(filters.startDate)
      );
    }

    if (filters.duration) {
      const durationMonths = parseInt(filters.duration);
      result = result.filter(intern =>
        parseInt(intern.duration) <= durationMonths
      );
    }

    if (filters.keyword) {
      const keywordLower = filters.keyword.toLowerCase();
      result = result.filter(intern =>
        intern.title?.toLowerCase().includes(keywordLower) ||
        intern.company_name?.toLowerCase().includes(keywordLower) ||
        intern.location_names?.some(loc => loc.toLowerCase().includes(keywordLower)) ||
        intern.tags?.some(tag => tag.toLowerCase().includes(keywordLower))
      );
    }

    if (filters.jobOffer) {
      result = result.filter(intern => intern.job_offer === true);
    }

    if (filters.womenOnly) {
      result = result.filter(intern => intern.for_women === true);
    }

    setFilteredInternships(result);
  }, [filters, internships]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const clearAllFilters = () => {
    setFilters({
      profile: '',
      location: '',
      workFromHome: false,
      partTime: false,
      stipend: 0,
      startDate: '',
      duration: '',
      jobOffer: false,
      fastResponse: false,
      earlyApplicant: false,
      womenOnly: false,
      keyword: ''
    });
  };

  if (loading) return <p>Loading...</p>;

  return (
  <div className="flex flex-col h-screen overflow-hidden mx-50">
    <div className="flex flex-col justify-between  px-4 py-2 mt-5">
      <h1 className="text-md flex items-start space-x-2 text-gray-400 ">
        <span>Home</span> 
        <IoIosArrowForward /> 
        <span className="text-black">Internships</span>
      </h1>
      <div className="text-lg font-medium items-center text-center">
        {filteredInternships.length} Total Internships 
      </div>
    </div>

    <div className="flex flex-grow overflow-hidden">
      {/* Filters sidebar */}
      <div className="w-1/3 p-4 overflow-y-auto hide-scrollbar ">
        <Filters
          filters={filters}
          onFilterChange={handleFilterChange}
          onClearFilters={clearAllFilters}
        />
      </div>

      {/* Internships list */}
      <div className="w-2/3 p-4 overflow-y-auto hide-scrollbar">
        {filteredInternships.length === 0 ? (
          <div className="text-center py-10">
            <h3 className="text-xl font-medium">No internships found</h3>
            <p className="text-sky-500 mt-2">
              Try adjusting your filters to see more results
            </p>
            <button
              onClick={clearAllFilters}
              className="mt-4 px-4 py-2 text-sky-500 rounded-md border border-sky-500"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            {filteredInternships.map((intern) => (
              <InternCard
                key={intern.id}
                intern={intern}
                onClick={setSelectedIntern}
              />
            ))}
          </div>
        )}
      </div>
    </div>

    {selectedIntern && (
      <InternDetailModal
        intern={selectedIntern}
        onClose={() => setSelectedIntern(null)}
      />
    )}
  </div>
);

};

export default InternCardList;
