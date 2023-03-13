import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api/"


export const listingsMetaDataApi = axios.create({
    baseURL: BASE_URL,
    withCredentials: false,
});


export const getListingTypes = async () => {
    const response = await listingsMetaDataApi.get('listing-types/');
    return response.data;
}

export const getListingCities = async () => {
    const response = await listingsMetaDataApi.get('cities/');
    return response.data;
}

export const getListingProvinces = async () => {
    const response = await listingsMetaDataApi.get('provinces/');
    return response.data;
}

export const getRoomTypes = async () => {
    const response = await listingsMetaDataApi.get('room-types/');
    return response.data;
}

export const getListingAmenities = async () => {
    const response = await listingsMetaDataApi.get('amenities/');
    return response.data;
}



listingsMetaDataApi.defaults.headers.common['Content-Type'] = 'application/json';