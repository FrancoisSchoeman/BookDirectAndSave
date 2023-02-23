import { useState } from 'react';
import contactFormStyles from './contactForm.module.css';
import { useForm } from "react-hook-form";

import { useMutation } from '@tanstack/react-query';
import axios from 'axios';


export default function ContactForm(props) {

    const [successMessage, setSuccessMessage] = useState(false);

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const mutation = useMutation((data) => {
        return axios.post("http://localhost:8000/api/contact", data);
    });

    const onSubmit = (data) => {
        console.log({ ...data, subject: "Contact Form Submission from Book Direct And Save Website" });
        // TODO: Send data to backend for emails to admin
        mutation.mutate({ ...data, subject: "Contact Form Submission from Book Direct And Save Website" }, {
            onSuccess: () => {
                setSuccessMessage(true);
                reset();
            }
        });
    }

    return (
        <div className={contactFormStyles.contactFormContainer}>
            {
                successMessage ?

                    <h3 className={contactFormStyles.contactSuccessMessage}>Thank you for your message. We will be in touch shortly.</h3> :

                    <form onSubmit={handleSubmit(onSubmit)} className={contactFormStyles.contactForm}>
                        <input type="text" placeholder='Name' {...register("name")} />

                        <input type="text" placeholder='Phone' {...register("phone")} />

                        <input type="email" placeholder='Email' {...register("email", { required: true })} />
                        {/* errors will return when field validation fails  */}
                        {errors.email && <span>This field is required</span>}

                        <textarea placeholder='Message or Enquiry' rows="6" {...register("message")} />

                        <button className={contactFormStyles.contactButton} type="submit">Send Message</button>
                    </form>
            }

        </div>
    );
}