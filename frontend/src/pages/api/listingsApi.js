import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api/"


export const listingsApi = axios.create({
    baseURL: BASE_URL,
    withCredentials: false,
});


export const getListings = async ({ queryKey }) => {

    // TODO: combine arrivalDate and departureDate into one variable and add to API call

    let [_, pageNum, location, listingType, guests] = queryKey;
    if (pageNum === undefined) pageNum = 1;


    if (location === undefined || location === "") {
        location = '';
    } else {
        location = `&city=${location}`;
    }
    if (listingType === undefined || listingType === "Listing Type") {
        listingType = '';
    } else {
        listingType = `&listing-type=${listingType}`;
    }
    if (guests === undefined || guests === "") {
        guests = '';
    } else {
        guests = `&guests=${guests}`;
    }


    const response = await listingsApi.get(`listings/?page=${pageNum}${location}${listingType}${guests}`);
    return response.data;

}

export const getRecentListings = async () => {
    const response = await listingsApi.get('recent-listings/');
    return response.data;
}

export const getSingleListing = async ({ queryKey }) => {
    let [_, listingUrl] = queryKey;

    // convert listingUrl to listingId (e.g. "jolly-lucky-jongensfontein-1397" to "1397")
    const listingId = listingUrl?.split('-').pop();

    const response = await listingsApi.get(`listings/${listingId}/`);
    return response.data;
}


listingsApi.defaults.headers.common['Content-Type'] = 'application/json';