import axios from 'axios';
export const PostFetch = async (type, dataToSend) => {
  try {
    const response = await axios.post(
      `https://app-booking-christ.herokuapp.com/api/${type}`,
      dataToSend
    );

    return response;
  } catch (error) {
    return error;
  }
};
