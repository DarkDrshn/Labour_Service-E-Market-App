import { FaStar } from "react-icons/fa";
import { toast } from "react-toastify";
import SidebarClient from "../SidebarClient";
import React from "react";
import Sidebar from "../Sidebar";
import { useState,useEffect } from "react";
import axios from 'axios'

function ServiceHistory() {
  // Dummy service history data
  const serviceHistory = [
    { id: 1, name: "Laborer 1", work: "Task 1" },
    { id: 2, name: "Laborer 2", work: "Task 2" },
    { id: 3, name: "Laborer 3", work: "Task 3" },
    { id: 4, name: "Laborer 4", work: "Task 4" },
    { id: 5, name: "Laborer 5", work: "Task 5" },
    // Add more laborers as needed
  ];

  const [clientServiceHistory, setClientServiceHistory] = useState([]);
  const fetchClientServiceHistory = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/v1/assignmentlaborer/getassignment',{
        withCredentials:true,
      })
      setClientServiceHistory(response.data);
      console.log(response);
    } catch (error) {
      console.error('Error fetching Client Service History : ', error);
    }
  };
  useEffect(() => {
    fetchClientServiceHistory();
  }, []);

  const [ratings, setRatings] = useState({});
  const [feedbacks, setFeedbacks] = useState({});
  const [amount, setAmount] = useState({});

  const handleStarClick = (laborerId, value) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [laborerId]: value,
    }));
  };

  const handleFeedbackChange = (laborerId, event) => {
    const value = event.target.value;
    setFeedbacks((prevFeedbacks) => ({
      ...prevFeedbacks,
      [laborerId]: value,
    }));
  };

  const handleAmountChange = (laborerId, event) => {
    const value = event.target.value;
    if (!isNaN(value)) {
      setAmount((prevAmount) => ({
        ...prevAmount,
        [laborerId]: value,
      }));
    } else {
      toast.error(`Enter Numbers Only`);
    }
  };

  const handleSubmitFeedback = async(assignment) => {
    // Here you can submit the ratings and feedback to the backend for the specific laborer
    console.log(`Submitting ratings and feedback for laborer ${assignment._id}:`);
    console.log("Rating:", ratings[assignment._id]);
    console.log("Feedback:", feedbacks[assignment._id]);
    console.log("Amount:", amount[assignment._id]);
    
    // Show a toast message
    if(ratings[assignment._id]===undefined){
      toast.warn("Please Select Star Rating ⭐")
    }
    else if(feedbacks[assignment._id]===undefined){
      toast.warn("Please Type Feedback Ⓜ️")
    }
    else if(amount[assignment._id]===undefined){
      toast.warn("Please Enter Amount 💵")
    }
    else{
      console.log(assignment);
      // console.log(laborerFName);
      // console.log(laborerLName);

      try{
        assignment['rating']=ratings[assignment._id];
        assignment['reviewDesc']=feedbacks[assignment._id];
        assignment['charges']=amount[assignment._id];
        const response = await axios.post('http://localhost:8000/api/v1/assignmentlaborer/createReview',assignment,{
          withCredentials:true,
        });

        if(response.status===200){
          if(response.data.message==="Review Submitted") 
            toast.success(`Thank you for the feedback to ${assignment.labourId.firstName} ${assignment.labourId.lastName}!`);
          else
            toast.success(`You Have Already Reviewed ${assignment.labourId.firstName} ${assignment.labourId.lastName} for this Assignment`)
        }
        else{
          toast.error(`Error Occured : ${response.data}`)
        }
      }
      catch(error){
        toast.error(`Error : ${error}`)
      }
    } 
  }

  return (
    <div className="flex">
      <SidebarClient />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* {clientServiceHistory.map((laborer) => ( */}
        {clientServiceHistory.map((laborer) => (
          <div key={laborer._id} className="p-4 border rounded-md">
            <h3 className="text-xl font-bold mb-2">{laborer.labourId.firstName} {laborer.labourId.lastName}</h3>
            <p className="text-gray-600 mb-2">{laborer.description}</p>
            <div className="flex mb-2">
              <label className="mr-2">Rating:</label>
              <div className="flex">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    onClick={() => handleStarClick(laborer._id, index + 1)}
                    size={24}
                    color={index < ratings[laborer._id] ? "#ffc107" : "#e4e5e9"}
                    style={{ cursor: "pointer" }}
                  />
                ))}
              </div>
            </div>
            <div className="mb-2">
            <label className="block mb-1">Feedback:</label>
              <textarea
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500 text-gray-800"
                rows="3"
                value={feedbacks[laborer._id] || ""}
                onChange={(e) => handleFeedbackChange(laborer._id, e)}
                placeholder="Provide feedback..."
              ></textarea>
              <label className="block mb-1">Amount Paid:</label>
              <textarea
                className="w-full px-1 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500 text-gray-800"
                rows="3"
                value={amount[laborer._id] || ""}
                onChange={(e) => handleAmountChange(laborer._id, e)}
                placeholder="Enter Amount Paid in INR"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                className="bg-black hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-blue-500 mr-2"
                onClick={() => handleSubmitFeedback(laborer)}
              >
                Submit Feedback
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export { ServiceHistory };
