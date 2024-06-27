import axios from 'axios';

const BASE_URL = 'http://your-backend-api-url.com/api/'; // Replace with your actual base URL

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}register/`, userData);
    return response.data;
  } catch (error) {
    console.error('Registration error:', error);
    throw error; // Re-throw for handling in the component
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}login/`, { email, password });
    return response.data;
  } catch (error) {
    console.error('Login error:', error);
    throw error; // Re-throw for handling in the component
  }
};

export const logoutUser = async (token) => {
  try {
    const headers = { Authorization: `Token ${token}` }; // Assuming token is stored securely
    await axios.post(`${BASE_URL}logout/`, null, { headers });
  } catch (error) {
    console.error('Logout error:', error);
    throw error; // Re-throw for handling in the component
  }
};

export const uploadFile = async (formData) => {
  try {
    const response = await axios.post(`${BASE_URL}upload/`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }, // Set headers for file uploads
    });
    return response.data;
  } catch (error) {
    console.error('Upload error:', error);
    throw error; // Re-throw for handling in the component
  }
};

export const createTransitPass = async (transitPassData) => {
  try {
    const response = await axios.post(`${BASE_URL}transit-pass/`, transitPassData);
    return response.data;
  } catch (error) {
    console.error('Transit pass creation error:', error);
    throw error; // Re-throw for handling in the component
  }
};

export const requestPayment = async (paymentData) => {
  try {
    const token = localStorage.getItem('authToken'); // Assuming token is stored in localStorage
    const headers = { Authorization: `Token ${token}` };
    const response = await axios.post(`${BASE_URL}payment-request/`, paymentData, { headers });
    return response.data;
  } catch (error) {
    console.error('Payment request error:', error);
    throw error; // Re-throw for handling in the component
  }
};

export const getUserTransactions = async () => {
  try {
    const token = localStorage.getItem('authToken'); // Assuming token is stored in localStorage
    const headers = { Authorization: `Token ${token}` };
    const response = await axios.get(`${BASE_URL}user-transactions/`, { headers });
    return response.data;
  } catch (error) {
    console.error('Get user transactions error:', error);
    throw error; // Re-throw for handling in the component
  }
};

export const getUserTransitPasses = async () => {
  try {
    const token = localStorage.getItem('authToken'); // Assuming token is stored in localStorage
    const headers = { Authorization: `Token ${token}` };
    const response = await axios.get(`${BASE_URL}user-transit-passes/`, { headers });
    return response.data;
  } catch (error) {
    console.error('Get user transit passes error:', error);
    throw error; // Re-throw for handling in the component
  }
};