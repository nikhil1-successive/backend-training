import CustomError from "../utils/errorClass.js";
import axios from 'axios';

const validateLocation = async (req, res, next) => {
  try {
    const expectedRegion = "India"
    const clientIP = req.ip; 
    const apiKey = "2401:4900:81fa:6d6c:4cb9:e944:9d2a:57a9";
    const res = await axios.get(`http://api.ipstack.com/${clientIP}?access_key=${apiKey}`);
    const userRegion = res.data.country_name;

    if (userRegion === expectedRegion) {
      next();
    } 
  } catch (error) {
    next(new CustomError('Some Error Occured.', 500));
  }
};

export default validateLocation;
