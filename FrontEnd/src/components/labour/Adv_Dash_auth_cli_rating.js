import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../Sidebar";
import { TrashIcon } from "@heroicons/react/24/outline";

function AdvDashAuthCliRating({ laborerId ,laborerName,category}) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      console.log(laborerId);
      try {
        if (laborerId) {
          const response = await axios.get(
            `http://localhost:8000/api/v1/assignmentlaborer/getReview/${encodeURIComponent(
              laborerId
            )}`,
            {
              withCredentials: true,
            }
          );
          console.log(response);
          setReviews(response.data.reviews);
        }
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, [laborerId]);

  return (
    <>
      <div className="flex">
        <div className="w-1/4 pl-2">
          <Sidebar laborerName={laborerName} category={category} />
        </div>
        <div className="w-3/4 h-screen">
          <div className="lg:h-3/5 p-5 overflow-auto mt-5" style={{ backgroundColor: "#fbc642" }}>
            <div className="mx-8">
              <h2 className="text-2xl font-bold mb-4">Reviews for me</h2>
              {reviews.map((review) => (
                <div key={review._id} className="bg-white rounded-lg p-4 mb-4 shadow-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-lg font-semibold">Rating: {review.rating}</p>
                      <p className="text-gray-500">Description: {review.reviewDesc}</p>
                      <p className="text-gray-500">Amount: {review.charges}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdvDashAuthCliRating;
