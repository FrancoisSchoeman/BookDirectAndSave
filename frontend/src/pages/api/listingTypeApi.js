import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api/"


export const listingTypeApi = axios.create({
    baseURL: BASE_URL,
    withCredentials: false,
});


export const getListingTypes = async () => {
    const response = await listingTypeApi.get('listing-types/');
    return response.data;
}



listingTypeApi.defaults.headers.common['Content-Type'] = 'application/json';