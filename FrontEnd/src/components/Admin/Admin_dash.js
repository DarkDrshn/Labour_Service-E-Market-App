import React,{useState} from "react";
import { AdminSideBar } from "./Admin_sidebar";
import axios from 'axios'


function AdminDash() {

  const [totalReq, setTotalReq] = useState(0);

  const fetchTotalRequests = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/v1/admin/totalBooking',{
        withCredentials:true,
      })
      console.log(response);
      const count_req = response.data.totalRequests;
      setTotalReq(count_req);

    } catch (error) {
      console.error('Error fetching booking requests:', error);
    }
  };

  React.useEffect(() => {
    fetchTotalRequests();
  }, []);

  const[totalUser,setTotalUser] = useState(0);
  const[countClients,setCountClients] = useState(0)
  const[countLaborers,setCountLaborers] = useState(0)


  const fetchTotalUsers = async () => {
    try {
      const responseClient = await axios.get('http://localhost:8000/api/v1/admin/clientcount')
      const responselaborer = await axios.get('http://localhost:8000/api/v1/admin/laborercount')
      const count_user = responseClient.data.totalClients + responselaborer.data.totalLaborers;
      setTotalUser(count_user);
      setCountClients(responseClient.data.totalClients)
      setCountLaborers(responselaborer.data.totalLaborers)
    } catch (error) {
      console.error('Error fetching Total users:', error); 
    }
  }

  React.useEffect(()=>{
    fetchTotalUsers();
  })

  const [recentActivities, setRecentActivities] = useState([]);

  React.useEffect(() => {
    // Fetch recent activities from the backend
    async function fetchRecentActivities() {
      try {
        const response = await axios.get('http://localhost:8000/api/v1/admin/recentactivities'); // 
        setRecentActivities(response.data);
      } catch (error) {
        console.error('Error fetching recent activities:', error);
      }
    }

    fetchRecentActivities();
  }, []);






  return (
    <div className="flex">
      <div className="w-1/4">
        <AdminSideBar />
      </div>

      <div className="w-3/4 bg-white p-6">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Dashboard Overview</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-100 p-4 shadow-md rounded-md">
              <h3 className="text-xl font-semibold mb-2">Total Users</h3>
              <p className="text-gray-600">{totalUser}</p>
            </div>
            <div className="bg-blue-100 p-4 shadow-md rounded-md">
              <h3 className="text-xl font-semibold mb-2">Total Request</h3>
              <p className="text-gray-600">{totalReq}</p>
            </div>
          </div>
        </div>

        <div className="mb-8">
  <h2 className="text-2xl font-bold mb-4">Recent Activities</h2>

  <div className="bg-gray-100 rounded-lg p-4 mb-4">
    <h3 className="text-lg font-semibold mb-2">Newly Registered Users:</h3>
      {recentActivities.map((activity, index) => (
      <div key={index} className="flex items-center mb-2">
        <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mr-2">{activity.firstName[0]}</div>
        <div>
          <p className="font-semibold">{activity.firstName} {activity.lastName}</p>
          <p className="text-gray-600">{activity.email}</p>
        </div>
      </div>
    ))}
    </div>
    </div>

    <div className="mb-8">
  <h2 className="text-2xl font-bold mb-4">Labourer Management</h2>
  <div className="border rounded-lg p-4">
    <h4 className="text-lg font-semibold mb-2">Total Labourers</h4>
    <p className="text-3xl font-bold">{countLaborers}</p>
  </div>
</div>

        <div className="mb-8">
  <h2 className="text-2xl font-bold mb-4">Client Management</h2>
  <div className="border rounded-lg p-4">
    <h4 className="text-lg font-semibold mb-2">Total Clients</h4>
    <p className="text-3xl font-bold">{countClients}</p>
  </div>
</div>


        {/* <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Booking Management</h2>
          <p>Placeholder for booking management functionality</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Settings and Administration</h2>
          <p>Placeholder for settings and administration functionality</p>
        </div> */}
      </div>
    </div>
  );
}

export { AdminDash };
