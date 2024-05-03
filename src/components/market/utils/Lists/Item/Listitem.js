import React, { useState } from 'react';
import './listitem.css';
import axios from 'axios'
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Listitem = ({ item, handleClientConnectClick, handleLaborerConnectClick, clientLoggedIn, laborerLoggedIn ,clientId,fetchBookingRequests}) => {
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [bookingData, setBookingData] = useState({
    date: '',
    description: '',
    address: '',
    clientName: ``,
    BookingFor:'',
    workPhoto:null
  });
    const handleConnectClick = () => {
      if (clientLoggedIn || laborerLoggedIn) {
        setShowBookingForm(!showBookingForm);
      } else {
        toast.error("You are not logged in. Please log in to connect.");
      }
    };
    const handleImageInputChange = (e) => {
      setBookingData({ ...bookingData, workPhoto: e.target.files[0] });
    };
    const handleBookingInputChange = (e) => {
      setBookingData({ ...bookingData, [e.target.name]: e.target.value });
    };
    const handleConnectButtonClick = async () => {
      if (clientLoggedIn) {
        handleClientConnectClick();
        const formData = new FormData();
        formData.append('labourId', item._id);
        formData.append('clientName', bookingData.clientName);
        formData.append('address', bookingData.address);
        formData.append('description', bookingData.description);
        formData.append('date', bookingData.date);
        formData.append('BookingFor', bookingData.BookingFor);
        formData.append('workPhoto', bookingData.workPhoto);
        try {
          const response = await axios.post('http://localhost:8000/api/v1/bookinglaborer/booking', formData,{
            headers: {
              'Content-Type': 'multipart/form-data'
            },
            withCredentials:true,
          });
          console.log(response);
          toast.success("booking succesfull")
          showBookingForm(false)
        } catch (error) {
          // Handle errors
          console.error('Error creating booking request:', error);
          // You can show an error message or perform any other action
        }
      } else if (laborerLoggedIn) {
        handleLaborerConnectClick();
      } else {
        toast.warning("You are not logged in. Please log in to connect.");
      }
    };
    const getCurrentDate = () => {
      const currentDate = new Date();
      const year = currentDate.getFullYear();
      let month = currentDate.getMonth() + 1;
      let day = currentDate.getDate();
    
      if (month < 10) {
        month = `0${month}`;
      }
    
      if (day < 10) {
        day = `0${day}`;
      }
    
      return `${year}-${month}-${day}`;
    };
    
    const handleBackButtonClick = () => {
      setShowBookingForm(false);
    };
    
    return (
      <div className={`listItem-wrap card_f p-4 w-full sm:w-2/3 md:w-2/3 lg:w-3/4 xl:w-4/5 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg rounded-lg border border-gray-300 ${showBookingForm ? 'expanded' : ''}`} style={{ cursor: 'pointer' }}>
        <div className="flex items-center">
          <div className='image_div'>
            <div className='image_con'>
              <img src={item.profileImage} alt='' />
            </div>
          </div>
          <div className='card_con ml-4'>
            <h2 className="text-lg font-bold">{`${item.firstName.charAt(0).toUpperCase()}${item.firstName.slice(1).toLowerCase()} ${item.lastName.charAt(0).toUpperCase()}${item.lastName.slice(1).toLowerCase()}`}</h2>
            <h4 className="text-sm text-gray-500 mt-1">{`${item.location.charAt(0).toUpperCase()}${item.location.slice(1).toLowerCase()}`}</h4><br></br>
            {item.certificate ? (
          <p className="text-sm font-semibold text-green-500 flex items-center bg-green-100 px-2 py-1 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span className="font-bold">Certified</span>
          </p>
        ) : (
          <p className="text-sm font-semibold text-red-500 flex items-center bg-red-100 px-2 py-1 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <span className="font-bold">Not Certified</span>
          </p>
        )}
          </div>
        </div>
        {showBookingForm ? (
          <div className='mb-4'>
            <form>
            <div className="absolute bottom-4 right-4">
              <button type="button" onClick={handleBackButtonClick} className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">&lt;
                Go Back
              </button>
            </div>
              <div className="mb-4">
                <label htmlFor="BookingFor" className="block text-sm font-medium text-gray-700">Booking for</label>
                <input
                  type="text"
                  id="BookingFor"
                  name="BookingFor"
                  value={bookingData.BookingFor}
                  onChange={handleBookingInputChange}
                  placeholder="Enter booking purpose"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="Client Name" className="block text-sm font-medium text-gray-700">Client Name</label>
                <textarea
                  id="clientName"
                  name="clientName"
                  value={bookingData.clientName}
                  onChange={handleBookingInputChange}
                  placeholder="Enter Client Name"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={bookingData.date}
                  min={getCurrentDate()}
                  onChange={handleBookingInputChange}
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={bookingData.address}
                  onChange={handleBookingInputChange}
                  placeholder="Enter address"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">Detailed Description of Work</label>
                <textarea
                  id="description"
                  name="description"
                  value={bookingData.description}
                  onChange={handleBookingInputChange}
                  placeholder="Enter description"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="workPhoto" className="block text-sm font-medium text-gray-700">Photo of Work</label>
                <input
                  type="file"
                  id="workPhoto"
                  name="workPhoto"
                  onChange={handleImageInputChange}
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
  
              <button type="button" onClick={handleConnectButtonClick} className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Book
              </button>
            </form>
          </div>
        ) : (
          <div className='mt-4 mb-2 border-t border-gray-200 pt-4'>
            <h3 className='text-lg font-semibold mb-2'>Additional Information</h3>
            <div className='grid grid-cols-2 gap-2'>
              <div>
                <p className='text-sm text-gray-600'>Age:</p>
                <p className='text-sm font-semibold'>{item.age}</p>
              </div>
              <div>
                <p className='text-sm text-gray-600'>Max Education:</p>
                <p className='text-sm font-semibold'>{item.maxEducation}</p>
              </div>
              <div>
                <p className='text-sm text-gray-600'>Experience:</p>
                <p className='text-sm font-semibold'>{item.experience} Years</p>
              </div>
              <div>
                <p className='text-sm text-gray-600'>Category:</p>
                <p className='text-sm font-semibold'>{item.category}</p>
              </div>
            </div>
          </div>
        )}
        {!showBookingForm && (
          <div className='card_bott'>
            <hr className='my-2 mx-2'></hr>
            <button onClick={handleConnectClick} className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Connect
            </button>
          </div>
        )}
      </div>
    );
  }
export default Listitem;
