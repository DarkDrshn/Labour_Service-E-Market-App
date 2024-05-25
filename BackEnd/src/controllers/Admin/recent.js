import { ClientInfo } from "../../models/Client/ClientInfo.js"
import {LabourInfo} from "../../models/Labour/LabourInfo.js"
import jwt from "jsonwebtoken";
import { RequestAssigment } from "../../models/Client/Req_assignment.js";






export const recentActivities = async(req,res) => {
    try {
      const recentClients = await ClientInfo.find().sort({ createdAt: -1 }).limit(1);
      const recentLabourers = await LabourInfo.find().sort({ createdAt: -1 }).limit(1);
      const recentActivities = [
        ...recentClients.map(client => ({ firstName: client.firstName, lastName: client.lastName, email: client.email })),
        ...recentLabourers.map(labourer => ({ firstName: labourer.firstName, lastName: labourer.lastName, email: labourer.email }))
      ];
    
        res.json(recentActivities);
      } catch (error) {
        console.error('Error fetching recent activities:', error);
        res.status(500).json({ error: 'An error occurred while fetching recent activities' });
      }    
}

export const LaborerCount = async(req,res) => {
  try {
      const totalCount = await LabourInfo.countDocuments();
      res.json({ totalLaborers: totalCount });
    } catch (error) {
      console.error('Error fetching total laborers:', error);
      res.status(500).json({ error: 'An error occurred while fetching total laborers' });
    }
}

export const ClientCount = async (req,res) => {
  try {
      const totalCount = await ClientInfo.countDocuments();
      res.json({ totalClients: totalCount });
    } catch (error) {
      console.error('Error fetching total clients:', error);
      res.status(500).json({ error: 'An error occurred while fetching total clients' });
    }
  
}

export const getTotalBookingRequests = async (req, res) => {
          try {
              const bookingRequests = await RequestAssigment.find({});
              const totalRequests = bookingRequests.length;
              return res.status(200).json({ totalRequests });
          } catch (error) {
              return res.status(500).json({ message: 'An error occurred', error: error.message });
          }
};
