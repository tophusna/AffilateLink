import axios from "axios";

export const getOffers = async (page) => {
  console.log('getoffer===>')
  try {
    console.log("page",page)
    const params = {
      page
    }
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/affiliate/getOffers`,
      {params}
    );
    const data = res.data;
    return data;
  } catch (error) {
    console.log("Error fetching data:", error);
  }
};

export const createOffer = async (formData) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/affiliate/createOffer`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );
    const data = res.json();
    return data;
  } catch (error) {
    console.log("error in creating Offer Information (service) => ", error);
  }
};

export const updateOffer = async (formData) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/affiliate/updateOffer`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );
    const data = res.json();
    return data;
  } catch (error) {
    console.log("error in updating Offer Information (service) => ", error);
  }
};

export const deleteOffer = async (_id) => {

  try {
    const res = await axios.delete(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/affiliate/deleteOffer/${_id}`);
    const data = res.data;
    return data;
  } catch (error) {
    console.log("error in deleting Offer Information (service) => ", error);
  }
};