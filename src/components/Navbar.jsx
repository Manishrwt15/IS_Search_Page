import { useState, useRef, useEffect } from "react";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import logo from "../assets/logo.jpg";

export default function Navbar() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);
  const menuContainerRef = useRef(null);
  const internshipsRef = useRef(null);
  const profileRef = useRef(null);
  const dropdownRef = useRef(null);

  const internshipStructure = {
    "Top Locations": [
      "Work from Home",
      "Internship in Bangalore",
      "Internship in Delhi",
      "Internship in Mumbai",
      "Internship in Hyderabad",
      "Internship in Chennai",
      "Internship in Pune",
      "Internship in Kolkata",
      "Internship in Ahmedabad",
      "Internship in Jaipur",
    ],
    Profile: [
      "Computer Science Internships",
      "Marketing Internships",
      "Finance Internships",
      "Digital Marketing Internships",
      "Human Resources Internships",
    ],
    "Top Categories": [
      "Engineering Internships",
      "Management Internships",
      "Part Time Jobs/Internships",
      "Humanities Internship",
      "Internship with Job Offer",
      "Internship for Women",
    ],
    "Explore More Internships": [
      "Internships by Location",
      "Internships by Category",
    ],
    "Placement Guarantee Courses": [
      "Full Stack Development Course",
      "Data Science Course",
      "Finance Modellling Course",
    ],
  };

  const coursesStructure = {
    "Certfied Courses": [
      "Full Stack Development Course",
      "Data Science Course",
      "Digital Marketing Course",
      "Graphic Design Course",
      "Content Writing Course",
      "Python Course",
      "Java Course",
      "Web Development Course",
      "Machine Learning Course",
      "Data Analytics Course",
    ],
  };

  const jobsStructure = {
    "Top Locations": [
      "Work from Home",
      "Jobs in Bangalore",
      "Jobs in Delhi",
      "Jobs in Mumbai",
      "Jobs in Hyderabad",
      "Jobs in Chennai",
      "Jobs in Pune",
      "Jobs in Kolkata",
      "Jobs in Ahmedabad",
      "Jobs in Jaipur",
    ],
    "Top Categories": [
      "Engineering Jobs",
      "Management Jobs",
      "Part Time Jobs/Internships",
      "Humanities Jobs",
      "Jobs with Job Offer",
    ],
    "Explore More Jobs": [
      "Jobs by Location",
      "Jobs by Category",
      "Job by Designation",
      "Jobs by Skills",
    ],
    "Placement Guarantee Courses": [
      "Full Stack Development Course",
      "Data Science Course",
      "Finance Modellling Course",
    ],
  };

  const menus = [
    { name: "Internships", structure: internshipStructure, ref: internshipsRef },
    { name: "Courses", structure: coursesStructure },
    { name: "Jobs", structure: jobsStructure },
  ];

  const [dropdownStyle, setDropdownStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    if (activeMenu) {
      const internshipsRect = internshipsRef.current?.getBoundingClientRect();
      const profileRect = profileRef.current?.getBoundingClientRect();
      const containerRect = menuContainerRef.current?.getBoundingClientRect();

      if (internshipsRect && profileRect && containerRect) {
        const left = internshipsRect.left - containerRect.left - 20;
        const width = profileRect.right - internshipsRect.left;
        setDropdownStyle({ left, width });
      }
    } else {
      setDropdownStyle({ left: 0, width: 0 });
    }
  }, [activeMenu]);
  const handleMouseLeave = (e) => {
    if (
      !menuContainerRef.current.contains(e.relatedTarget) &&
      (!dropdownRef.current || !dropdownRef.current.contains(e.relatedTarget))
    ) {
      setActiveMenu(null);
    }
  };

  return (
    <nav 
      className="bg-white shadow-md px-6 py-6 z-50 h-20 relative"
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="max-w-7xl mx-auto flex justify-between items-center relative h-full"
        ref={menuContainerRef}
      >
        {/* Logo */}
        <div className="flex items-center h-16">
          <img
            src={logo}
            alt="Internshala Logo"
            className="h-20 w-auto object-cover"
          />
        </div>

        {/* Menu Items */}
        <div className="relative flex-1">
          <div className="flex items-center space-x-6 justify-end pr-16 z-10 relative">
            <div className="flex items-center space-x-6 text-base font-medium text-gray-700">
              {menus.map((menu, index) => (
                <div
                  key={index}
                  ref={menu.ref}
                  onMouseEnter={() => {
                    setActiveMenu(menu);
                    const firstKey = Object.keys(menu.structure)[0];
                    setHoveredItem(firstKey);
                  }}
                  className="cursor-pointer flex items-center hover:bg-sky-100 px-2 py-1 rounded-md hover:text-blue-500 transition duration-200"
                >
                  {menu.name}
                  <MdKeyboardArrowDown />
                </div>
              ))}
            </div>

            {/* Envelope Icon */}
            <IoChatboxEllipsesOutline className="text-2xl cursor-pointer hover:bg-sky-100 p-1 rounded-full transition duration-200" />

            {/* Profile */}
            <div
              className="flex items-center space-x-1 cursor-pointer"
              ref={profileRef}
            >
              <img
                src="https://i.pravatar.cc/40"
                alt="profile"
                className="w-10 h-10 rounded-full"
              />
            </div>
          </div>

          {/* Dropdown */}
          {activeMenu && (
            <div
              ref={dropdownRef} 
              className="absolute top-full mt-2 bg-white shadow-lg rounded-md flex z-20 py-4 transition-all duration-300 ease-in-out"
              style={{
                left: dropdownStyle.left,
                width: dropdownStyle.width,
              }}
              onMouseLeave={() => {
                if (!menuContainerRef.current.contains(document.activeElement)) {
                  setActiveMenu(null);
                }
              }}
            >
              <ul className="w-1/2  pr-4 max-h-[300px] overflow-y-auto hide-scrollbar">
                {Object.keys(activeMenu.structure).map((item, idx) => (
                  <li
                    key={idx}
                    className={`px-2 py-2 cursor-pointer hover:bg-sky-100 rounded-md transition-all duration-150 ${
                      hoveredItem === item
                        ? "bg-sky-100 text-blue-500 rounded-r-full font-medium"
                        : ""
                    }`}
                    onMouseEnter={() => setHoveredItem(item)}
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <ul className="w-1/2 pl-4 max-h-[300px] overflow-y-auto hide-scrollbar">
                {activeMenu.structure[hoveredItem]?.map((subItem, sIdx) => (
                  <li
                    key={sIdx}
                    className="px-4 py-2 hover:bg-sky-100 cursor-pointer rounded-md transition-all duration-150"
                  >
                    {subItem}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
