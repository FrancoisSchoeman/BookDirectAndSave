import Head from "next/head";

import MainHeader from "../components/main-header/MainHeader";
import MyGoogleMaps from "../components/google-map/GoogleMapsMap";
import ContactForm from "../components/contact-form/ContactForm";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEnvelope,
    faPhone,
    faLocationDot,
} from "@fortawesome/free-solid-svg-icons";


export default function ConactUs() {

    return (
        <>
            <Head>
                <title>Contact Us - Book Direct And Save</title>
                <meta name="description" content="Contact Us" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <MainHeader heading="Contact Us" subheading="Book Direct And Save" />

            <h2 className="mainSubheading" style={{ marginTop: "100px", paddingBottom: "2rem" }}>CONTACT DETAILS</h2>

            <ul className="iconList">
                <li>
                    <FontAwesomeIcon
                        className="icon"
                        icon={faEnvelope}
                        size="sm"
                    />{" "}
                    <a href="mailto:bookings@bookdirectandsave.co.za?subject=New Message From Book Direct And Save Website">
                        bookings@bookdirectandsave.co.za
                    </a>
                </li>
                <li>
                    <FontAwesomeIcon className="icon" icon={faPhone} size="sm" />{" "}
                    <a href="tel:0824167279">082 416 7279</a>
                </li>
                <li>
                    <FontAwesomeIcon
                        className="icon"
                        icon={faLocationDot}
                        size="sm"
                    />{" "}
                    Stibaai, Western Cape
                </li>
            </ul>

            <hr className="mainHorizontalRule" />

            <h2 className="mainSubheading" style={{ paddingBottom: "2rem" }}>SEND US AN ENQUIRY</h2>

            <ContactForm />

            <MyGoogleMaps
                zoom={12}
                center={{ lat: -34.35639139101535, lng: 21.414978979605802 }}
                mapMargin="0 0 -50px 0"
            />
        </>
    )
}