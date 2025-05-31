import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaStar, FaStarHalfAlt, FaGooglePlay } from 'react-icons/fa';

// Sample reviews with random profile images and ratings
const reviews = [
  {
    title: "Must-have app for students",
    review:
      "I got my first internship from here. Internshala is must for career oriented students. This app has a lot of opportunities for every kind of students.",
    name: "Yogesh Singh",
    profileImg: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 4.5,
  },
  {
    title: "I landed a job at Amazon",
    review:
      "I applied to Amazon and got the job! It was my dream. I wanted to get in tech but I was from electrical background. My friend suggested Data Science Placement Guarantee Course. In the course, I learnt SQL, Python, Tableau & worked on a lot of projects which came in handy in my interviews. I was able to explain the concepts and applications well. The placement team helped me with everything.",
    name: "Yaswanth Mandapati",
    profileImg: "https://randomuser.me/api/portraits/men/45.jpg",
    rating: 5,
  },
  {
    title: "Great platform for beginners",
    review:
      "This app gave me the perfect start to my career. The tutorials and projects are very helpful and easy to understand. Highly recommended!",
    name: "Aisha Khan",
    profileImg: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 4,
  },
  {
    title: "Amazing support and resources",
    review:
      "The support team is really helpful. They guided me throughout my internship application process. The resources available on the platform are top-notch.",
    name: "Rajesh Patel",
    profileImg: "https://randomuser.me/api/portraits/men/12.jpg",
    rating: 4.8,
  },
  {
    title: "Perfect for skill development",
    review:
      "I upgraded my skills and got a better job thanks to this app. The practical projects helped me a lot during interviews.",
    name: "Sneha Reddy",
    profileImg: "https://randomuser.me/api/portraits/women/43.jpg",
    rating: 4.3,
  },
  {
    title: "Highly recommend for career growth",
    review:
      "I was able to explore multiple job opportunities and internships through this app. It’s very user-friendly and efficient.",
    name: "Vikram Singh",
    profileImg: "https://randomuser.me/api/portraits/men/76.jpg",
    rating: 4.6,
  },
  {
    title: "Good exposure to real-world projects",
    review:
      "Working on the projects helped me understand the industry needs better. The guidance from mentors is excellent.",
    name: "Neha Sharma",
    profileImg: "https://randomuser.me/api/portraits/women/21.jpg",
    rating: 4.7,
  },
  {
    title: "Best app for fresh graduates",
    review:
      "I landed my first job right after graduation, all thanks to the placement opportunities on this app. It’s a game changer!",
    name: "Karan Mehta",
    profileImg: "https://randomuser.me/api/portraits/men/53.jpg",
    rating: 5,
  },
];

const ReviewCard = ({ title, review, name, profileImg, rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 h-[360px] flex flex-col justify-between w-full max-w-md mx-auto">
      <div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-700 text-sm md:text-base">{review}</p>
      </div>

      <div className="flex items-center gap-3 mt-6">
        <img
          src={profileImg}
          alt={name}
          className="w-12 h-12 rounded-full object-cover border border-gray-300"
        />
        <div>
          <p className="font-medium text-gray-900">{name}</p>
          <div className="flex text-yellow-500 text-sm mt-1">
            {[...Array(fullStars)].map((_, i) => (
              <FaStar key={i} />
            ))}
            {halfStar && <FaStarHalfAlt />}
          </div>
        </div>
      </div>
    </div>
  );
};

const ReviewSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-800">
          Join the pool of 21Mn+ students and get started with your career
        </h2>
        <p className="text-xl font-medium">PLAY STORE RATINGS</p>
        <div className="flex items-center gap-4">
          <p className="text-3xl font-bold text-slate-900">4.5</p>
          <div className="flex flex-col">
            <div className="flex text-yellow-500 text-xl">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
            </div>
            <p className="text-gray-600 text-sm mt-1">(39K Reviews)</p>
          </div>
        </div>

        <button className="flex items-center gap-2 mt-4 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-900">
          <FaGooglePlay className="text-lg" />
          Get it on Google Play
        </button>
      </div>

      <div>
        <Slider {...settings}>
          {reviews.map((r, index) => (
            <ReviewCard key={index} {...r} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ReviewSection;
