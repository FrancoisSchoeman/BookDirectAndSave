import styles from "./admin-styles/add-listing.module.css";
import { useState } from "react";
import { useUserData } from "@/hooks";
import { useRouter } from "next/router";

import { useForm } from "react-hook-form";

import { useQuery, useMutation } from '@tanstack/react-query';
import { getListingTypes, getListingCities, getListingProvinces, getListingAmenities, getRoomTypes } from '@/pages/api/listingsMetaDataApi';

import axios from 'axios';

import dayjs from 'dayjs';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';

export default function AddListing() {
    const { userData, isLoading, error, session, status } = useUserData();

    const { data: listingTypes, isLoading: isListingTypesLoading, error: isListingTypesError } = useQuery(['listing_types'], getListingTypes);
    const { data: listingCities, isLoading: isListingCitiesLoading, error: isListingCitiesError } = useQuery(['listing_cities'], getListingCities);
    const { data: listingProvinces, isLoading: isListingProvincesLoading, error: isListingProvincesError } = useQuery(['listing_provinces'], getListingProvinces);
    const { data: listingAmenities, isLoading: isListingAmenitiesLoading, error: isListingAmenitiesError } = useQuery(['listing_amenities'], getListingAmenities);
    const { data: roomTypes, isLoading: isRoomTypesLoading, error: isRoomTypesError } = useQuery(['room_types'], getRoomTypes);

    const router = useRouter();

    const [successMessage, setSuccessMessage] = useState(false);
    const [checkInTime, setCheckInTime] = useState("14:00");
    const [checkOutTime, setCheckOutTime] = useState("10:00");

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const mutation = useMutation((data) => {
        return axios.post(`${BACKEND_URL}/api/contact`, data);
    });

    const onSubmit = (data) => {
        // mutation.mutate({ ...data, subject: "Contact Form Submission from Book Direct And Save Website" }, {
        //     onSuccess: () => {
        //         setSuccessMessage(true);
        //         reset();
        //     }
        // });

        console.log(data, dayjs(checkInTime).format('HH:mm'), dayjs(checkOutTime).format('HH:mm'));
    }

    if (isLoading) return <div>Loading...</div>

    if (error) return <div>Error: {error}</div>

    if (status === "authenticated") {
        return <>
            <div className={styles.formContainer}>
                {
                    successMessage ?

                        <h3 className={styles.successMessage}>Listing added successfully.</h3> :

                        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                            <h3 className={styles.title}>Add Listing</h3>
                            <input type="text" placeholder='Listing Title' {...register("title")} />

                            <div className={styles.fieldsContainer}>
                                <input type="number" placeholder='Bedrooms' {...register("bedrooms")} />
                                <input type="number" placeholder='Bathrooms' {...register("bathrooms")} />
                                <input type="number" placeholder='Number of Guests' {...register("guests")} />
                            </div>

                            <input type="text" placeholder='iCal Calendar URL, (Nightsbridge, etc.)' {...register("ical")} />

                            <textarea placeholder='Street Address (excluding city and postal code)' rows="2" {...register("location")} />


                            <div className={styles.fieldsContainer}>
                                <label htmlFor="listingCity">Listing City</label>
                                <select id="listingCity" placeholder='Listing City' {...register('city')} >
                                    <option disabled selected>City</option>
                                    {listingCities?.map((city) => {
                                        return <option key={city.id} value={city.city}>{city.city}</option>
                                    })}
                                </select >

                                <label htmlFor="listingProvince">Listing Province</label>
                                <select id="listingProvince" placeholder='Listing Province' {...register('province')} >
                                    <option disabled selected>Province</option>
                                    {listingProvinces?.map((province) => {
                                        return <option key={province.id} value={province.province}>{province.province}</option>
                                    })}
                                </select >
                            </div>

                            <label htmlFor="images">Gallery Images</label>
                            <input id="images" type="file" placeholder='Listing Images' multiple {...register("images")} />

                            <textarea placeholder='Description' rows="10" {...register("description")} />

                            <div className={styles.fieldsContainer}>
                                <input type="number" placeholder='Price per Night (R)' {...register("price", { required: true })} />
                                {errors.price && <span className={styles.error}>Price is required</span>}

                                <input type="number" placeholder='Cleaning Fee (optional)' {...register("cleaningFee")} />

                                <div>
                                    <p>Cleaning fee type</p>
                                    <input id="perStay" type="radio" {...register("cleaningFeeType")} value="Per Stay" />
                                    <label htmlFor="perStay"> Per Stay</label>

                                    <input id="daily" type="radio" {...register("cleaningFeeType")} value="Daily" />
                                    <label htmlFor="daily"> Daily</label>
                                </div>

                                <input type="number" placeholder='Security deposit, excluding our 10% commission fee (optional)' {...register("deposit")} />
                            </div>



                            <div className={styles.fieldsContainer}>

                                <div>
                                    <MobileTimePicker className={styles.datePicker} label="Check In Time" defaultValue={dayjs('2022-04-17T15:30')} onChange={(value) => setCheckInTime(value)} />
                                    <MobileTimePicker className={styles.datePicker} label="Check Out Time" defaultValue={dayjs('2022-04-17T15:30')} onChange={(value) => setCheckOutTime(value)} />
                                </div>

                                <label htmlFor="listingType">Listing Type</label>
                                <select id="listingtype" placeholder='Listing Type' {...register('listingType')} >
                                    <option disabled selected>Type</option>
                                    {listingTypes?.map((type) => {
                                        return <option key={type.id} value={type.listing_type}>{type.listing_type}</option>
                                    })}
                                </select >
                            </div>


                            <div className={styles.fieldsContainer}>
                                <p className={styles.title}>Amenities</p>
                                <div className={styles.amenitiesContainer}>
                                    {listingAmenities?.map((amenity) => {
                                        return <div key={amenity.id} className={styles.amenity}>
                                            <input type="checkbox" {...register(`amenities.${amenity.amenities}`)} />
                                            <label> {amenity.amenities}</label>
                                        </div>
                                    }
                                    )}
                                </div>
                            </div>

                            <input type="email" placeholder='Email for Notifications' {...register("email")} />


                            <button className={styles.button} type="submit">Add Listing</button>
                        </form>
                }

            </div>
        </>
    }

    return <a href="/api/auth/signin">Log In</a>
}
