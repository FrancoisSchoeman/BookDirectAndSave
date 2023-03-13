import searchFormStyles from './searchForm.module.css';

import { useState } from 'react';

// React Hooks Form
import { useForm } from 'react-hook-form';

// React Date Picker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays } from 'date-fns';

import { useQuery } from '@tanstack/react-query';
import { getListingTypes } from '@/pages/api/listingsMetaDataApi';

import Router from 'next/router';

export default function SearchForm() {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(addDays(new Date(), 1));

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { data: listingTypes, isLoading: isListingTypesLoading, error: isListingTypesError } = useQuery(['listing_types'], getListingTypes);

    const handleSubmitData = (data) => {
        Router.push({
            pathname: '/all-listings',
            query: { ...data, arrivalDate: startDate, departureDate: endDate }
        })
    }

    if (isListingTypesLoading) return <div>Loading...</div>

    if (isListingTypesError) return <div>{`An error occurred: ${isListingTypesError.message}.`}</div>

    return (
        <form className={searchFormStyles.searchForm} onSubmit={handleSubmit(handleSubmitData)}>
            <input placeholder="Where to go?" {...register('location')} />
            <select placeholder='Listing Type' {...register('listingType')} >
                <option disabled selected>Listing Type</option>
                {listingTypes?.map((type) => {
                    return <option key={type.id} value={type.listing_type}>{type.listing_type}</option>
                })}
            </select >
            <input placeholder='Guests' {...register('guests', { pattern: /\d+/ })} />
            {errors.guests && <p>Please enter number for guests.</p>}

            <DatePicker withPortal dateFormat="dd/MM/yyyy" selected={startDate} onChange={(date) => setStartDate(date)} />

            <DatePicker withPortal dateFormat="dd/MM/yyyy" selected={endDate} onChange={(date) => setEndDate(date)} />

            <button className={searchFormStyles.searchButton} type="submit" >Search</button>
        </form>
    )
}