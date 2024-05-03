import React from "react";
import { AdminSideBar } from "./Admin_sidebar";


const reviews = [
  {
    id: 1,
    username: "Ravi Kumar",
    rating: 4,
    comment: "Great job! The laborer provided excellent service.",
    date: "2024-04-10",
  },
  {
    id: 2,
    username: "Priya Sharma",
    rating: 5,
    comment: "The laborer was very professional and completed the task efficiently.",
    date: "2024-04-09",
  },
  {
    id: 3,
    username: "Amit Patel",
    rating: 3,
    comment: "Good work, but there were some delays in completing the task.",
    date: "2024-04-08",
  },
  {
    id: 4,
    username: "Deepika Singh",
    rating: 4,
    comment: "Satisfactory service. The laborer was polite and skilled.",
    date: "2024-04-07",
  },
  {
    id: 5,
    username: "Anil Gupta",
    rating: 2,
    comment: "The laborer did not meet expectations. Poor quality of work.",
    date: "2024-04-06",
  },
  {
    id: 6,
    username: "Pooja Mishra",
    rating: 5,
    comment: "Excellent service! Will definitely hire again.",
    date: "2024-04-05",
  },
];


const AdminReview = () => {
  return (
    <div className="flex">
      <AdminSideBar />
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-semibold mb-8">Customer Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <StarIcon className="h-5 w-5 text-yellow-400" />
                <span className="text-gray-600 ml-1">{review.rating}</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{review.username}</h3>
              <p className="text-gray-600 mb-4">{review.comment}</p>
              <p className="text-gray-500">Date: {review.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

};

const StarIcon = () => (
  <svg
    className="w-5 h-5 text-yellow-400"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M10 2.034l1.578 3.871 4.294.393c.836.076 1.175 1.13.537 1.666l-3.268 2.838 1.152 4.63c.224.898-.686 1.632-1.373 1.096l-3.935-2.747-3.935 2.747c-.687.536-1.597-.198-1.373-1.096l1.152-4.63-3.268-2.838c-.638-.536-.299-1.59.537-1.666l4.294-.393L10 2.034z"
      clipRule="evenodd"
    />
  </svg>
);

export  {AdminReview};
