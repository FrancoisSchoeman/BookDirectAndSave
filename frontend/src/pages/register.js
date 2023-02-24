import Head from "next/head";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { registerUser } from "./api/userApi";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import formStyles from "../styles/Forms.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { BACKEND_URL } from "@/helpers/constants";

export default function Register() {
    const router = useRouter();
    const mutation = useMutation((data) => {
        return axios.post(`${BACKEND_URL}/api/contact`, data);
    });

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const [passwordType, setPasswordType] = useState("password");
    const [errorMessage, setErrorMessage] = useState("");

    const [successMessage, setSuccessMessage] = useState(false);

    const onSubmit = async (data) => {
        const { username, password, password2, email, first_name, last_name } = data;
        const res = await registerUser(username, password, password2, email, first_name, last_name);

        if (res.status === 201) {
            const { error } = await signIn("credentials", {
                redirect: false,
                username,
                password,
                // callbackUrl: "/",
            });

            mutation.mutate({
                name: `${username} | ${first_name} ${last_name}`,
                phone: "None",
                email: email,
                subject: "New User Registration from Book Direct And Save Website",
                message: "None"
            }, {
                onSuccess: () => {
                    setSuccessMessage(true);
                    reset();
                }
            });

            if (error) {
                setErrorMessage(error);
            } else {
                // router.push("/");
            }
            // router.push("/");
        } else {
            setErrorMessage(res.message);
        }
    };

    const handleShowPassword = () => {
        if (passwordType === "password") {
            setPasswordType("text");
            return;
        }
        setPasswordType("password");
    };

    return (
        <>
            <Head>
                <title>Register - Book Direct And Save</title>
                <meta name="description" content="Register" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={formStyles.mainPage}>
                <div className={formStyles.mainSection}>
                    <div className={formStyles.welcomeSection}>
                        <div>
                            <p>Create an Account</p>
                        </div>
                    </div>

                    <section className={formStyles.formSection}>
                        {successMessage ?
                            <h3>Congrats! You have successfully been Registered.</h3> :
                            <>
                                <h2>Register</h2>
                                {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className={formStyles.nameSection}>
                                        <input
                                            type="text"
                                            autoComplete="given-name"
                                            placeholder="First Name"
                                            {...register("first_name", { required: true })}
                                        />
                                        {errors.first_name && <span>This field is required</span>}

                                        <input
                                            type="text"
                                            autoComplete="family-name"
                                            placeholder="Last Name"
                                            {...register("last_name", { required: true })}
                                        />
                                        {errors.last_name && <span>This field is required</span>}
                                    </div>

                                    {/* register your input into the hook by invoking the "register" function */}
                                    <input
                                        type="text"
                                        autoComplete="username"
                                        placeholder="Username"
                                        {...register("username", { required: true })}
                                    />
                                    {errors.username && <span>This field is required</span>}

                                    {/* register your input into the hook by invoking the "register" function */}
                                    <input
                                        type="text"
                                        autoComplete="email"
                                        placeholder="Email"
                                        {...register("email", { required: true })}
                                    />
                                    {errors.email && <span>This field is required</span>}

                                    <div className={formStyles.passwordInput}>
                                        {/* include validation with required or other standard HTML validation rules */}
                                        <input
                                            type={passwordType}
                                            autoComplete="current-password"
                                            placeholder="Password"
                                            {...register("password", { required: true })}
                                        />
                                        {/* errors will return when field validation fails  */}

                                        {/* include validation with required or other standard HTML validation rules */}
                                        <input
                                            type={passwordType}
                                            autoComplete="current-password"
                                            placeholder="Password (again)"
                                            {...register("password2", { required: true })}
                                        />
                                        {/* errors will return when field validation fails  */}

                                        {passwordType === "password" ? (
                                            <FontAwesomeIcon
                                                onClick={handleShowPassword}
                                                className={formStyles.passwordEye}
                                                icon={faEye}
                                            />
                                        ) : (
                                            <FontAwesomeIcon
                                                onClick={handleShowPassword}
                                                className={formStyles.passwordEye}
                                                icon={faEyeSlash}
                                            />
                                        )}
                                        {errors.password && <span>This field is required</span>}
                                    </div>
                                    <button type="submit" className={formStyles.formButton}>
                                        Register
                                    </button>
                                    <p>{errorMessage}</p>
                                </form>
                                <span>
                                    Already have an account?{" "}
                                    <span
                                        className={formStyles.promptLink}
                                        onClick={() => router.push("/login")}
                                    >
                                        Log In
                                    </span>
                                </span>
                            </>
                        }

                    </section>
                </div>
            </div>
        </>
    )
}