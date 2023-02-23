import Head from "next/head";

import { useSession, signOut, getCsrfToken } from "next-auth/react"
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import { useRouter } from "next/router";

import formStyles from "../styles/Forms.module.css"

export default function SignIn({ csrfToken }) {

    const { data: session } = useSession();
    const router = useRouter();

    const { register, formState: { errors } } = useForm();

    const [passwordType, setPasswordType] = useState('password');
    const [errorMessage, setErrorMessage] = useState("");


    const handleShowPassword = () => {
        if (passwordType === "password") {
            setPasswordType("text");
            return;
        }
        setPasswordType("password");
    }

    if (session) {
        return (
            <>
                <HeadComponent />
                <main>
                    <button onClick={() => {
                        signOut();
                    }}>Sign out</button>
                </main>
            </>
        )
    }
    return (
        <>
            <HeadComponent />

            <div className={formStyles.mainPage}>
                <div className={formStyles.mainSection}>


                    <div className={formStyles.welcomeSection}>
                        <div>
                            <p>Welcome Back!</p>
                            <p>Please Log In...</p>
                        </div>
                    </div>


                    <section className={formStyles.formSection}>
                        <h2>Log In</h2>

                        <form method="post" action="/api/auth/callback/credentials">
                            <input name="csrfToken" type="hidden" defaultValue={csrfToken} />

                            <input name="username" type="text" autoComplete="username" placeholder="Username" {...register("username", { required: true })} />
                            {errors.username && <span>This field is required</span>}

                            <div className={formStyles.passwordInput}>
                                <input name="password" type={passwordType} autoComplete="current-password" placeholder="Password" {...register("password", { required: true })} />

                                {passwordType === "password" ?
                                    <FontAwesomeIcon onClick={handleShowPassword} className={formStyles.passwordEye} icon={faEye} color="#757575" /> :
                                    <FontAwesomeIcon onClick={handleShowPassword} className={formStyles.passwordEye} icon={faEyeSlash} color="#757575" />
                                }
                                {errors.password && <span>This field is required</span>}
                            </div>

                            <button className={formStyles.formButton} type="submit" >Log In</button>
                            <p>{errorMessage}</p>
                        </form>
                        <span>Don't have an account? <span className={formStyles.promptLink} onClick={() => router.push("/register")}>Register</span></span>
                    </section>
                </div>
            </div>

        </>
    )
}

function HeadComponent() {
    return (
        <Head>
            <title>Login</title>
            <meta name="description" content="Login - Book Direct And Save" />
        </Head>
    )
}

export async function getServerSideProps(context) {
    return {
        props: {
            csrfToken: await getCsrfToken(context),
        },
    }
}