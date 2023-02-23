import { useState, useEffect } from "react";
import bookingFormStyles from "./bookingForm.module.css";

// React Hooks Form
import { useForm } from "react-hook-form";

// Send data to backend
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

// React Date Picker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays } from "date-fns";

export default function BookingForm({ listing }) {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(addDays(new Date(), 1));

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const mutation = useMutation((data) => {
        return axios.post("http://localhost:8000/api/booking-contact", data);
    });

    const handleSubmitData = (data) => {

        console.log({ ...data, arrivalDate: startDate, departureDate: endDate, clientEmail: listing.client_email, subject: `${listing.title} Booking Request from Book Direct And Save Website` });
        // TODO: Send data to backend and send email
        mutation.mutate({ ...data, arrivalDate: startDate, departureDate: endDate, clientEmail: listing.client_email, subject: `${listing.title} Booking Request from Book Direct And Save Website` }, {
            onSuccess: () => {
                setSuccessMessage(true);
                reset();
            }
        });
    };

    useEffect(() => {
        console.log(listing);
    }, []);

    return (
        <form
            className={bookingFormStyles.bookingForm}
            onSubmit={handleSubmit(handleSubmitData)}
        >
            <input placeholder="Name" {...register("name")} />

            <input type="text" placeholder='Phone' {...register("phone")} />

            <input
                type="email"
                placeholder="Email"
                {...register("email", { required: true })}
            />
            {errors.email && <p>This field is required.</p>}

            <div className={bookingFormStyles.datePickers}>
                <DatePicker
                    withPortal
                    dateFormat="dd/MM/yyyy"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                />

                <DatePicker
                    withPortal
                    dateFormat="dd/MM/yyyy"
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                />
            </div>

            {listing.separate_rooms.length >= 1 ? (
                <>
                    <p>Choose Your Room(s)</p>
                    <div className={bookingFormStyles.separateRoomsContainer}>
                        {listing.separate_rooms.map((room) => {
                            return (
                                <div className={bookingFormStyles.separateRoomsCheckbox}>
                                    <label>
                                        <input
                                            type="checkbox"
                                            value={room.title}
                                            {...register("room")}
                                        />
                                        {room.title}
                                    </label>
                                </div>
                            );
                        })}
                    </div>
                </>
            ) : (
                ""
            )}

            <input placeholder="Guests" {...register("guests", { pattern: /\d+/ })} />
            {errors.guests && <p>Please enter number for guests.</p>}

            <textarea
                placeholder="Introduce yourself to the host (optional)"
                {...register("message")}
            />

            <button className={bookingFormStyles.bookingButton} type="submit">
                Request to Book
            </button>
        </form>
    );
}
