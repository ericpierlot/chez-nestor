import axios from 'axios';
export const GetFetch = async (type, id) => {
  if (id === undefined) {
    try {
      const { data } = await axios.get(
        `https://app-booking-christ.herokuapp.com/api/${type}`
      );

      return data;
    } catch (error) {
      console.error(error);
      return error.message;
    }
  }

  try {
    const { data } = await axios.get(
      `https://app-booking-christ.herokuapp.com/api/${type}/${id}`
    );
    return data;
  } catch (error) {
    console.error('err', error.message);
    return error.message;
  }
};
