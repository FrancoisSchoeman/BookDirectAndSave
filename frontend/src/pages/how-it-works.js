import Head from "next/head";

import { useState } from "react";
import MainHeader from "@/components/main-header/mainHeader";

// Material UI
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function HowItWorks(props) {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Head>
                <title>How It Works - Book Direct And Save</title>
                <meta name="description" content="How It Works" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>


            <MainHeader
                heading="How It Works"
                subheading="Book Direct And Save" />

            <div className="mainTab">
                <Tabs value={value} onChange={handleChange} >
                    <Tab label="BOOKINGS" />
                    <Tab label="PROPERTY SUBMISSION" />
                </Tabs>

                <TabPanel value={value} index={0}>
                    <h4 className="mainParagraph">Follow these simple steps towards securing your ideal accommodation:</h4>
                    <h3 className="mainSmallHeading">Search for Accommodation</h3>
                    <p className="mainParagraph">
                        Use the extensive filter provided above (where to go, listing type) to find the accommodation that suits you best.
                    </p>

                    <h3 className="mainSmallHeading">Request to Book</h3>
                    <p className="mainParagraph">
                        Select the suitable option, fill in the arrival and departure dates, number of guests and, of course, your email address for confirmation purposes.
                    </p>
                    <p className="mainParagraph">
                        Click “Request to Book” and wait for confirmation and the deposit required.
                    </p>

                    <h3 className="mainSmallHeading">Pay Booking Deposit</h3>
                    <p className="mainParagraph">
                        Upon receipt of confirmation of booking, use the Https secure payment portal to pay the required deposit, thus securing the booking.
                    </p>
                    <p className="mainParagraph">
                        You will receive confirmation, proof of payment as well as more relevant information via email.
                    </p>
                    <h4 className="mainParagraph">Sit back, await the day, book in, enjoy the stay!</h4>

                </TabPanel>



                <TabPanel value={value} index={1}>
                    <h3 className="mainSmallHeading">Free Online Marketing</h3>
                    <p className="mainParagraph">
                        Make your property (house, apartment, flat, room/s, guest house, backpackers hostel, camping site, etc.) visible and accessible for overnight, weekend or holiday accommodation worldwide for free. You only pay a low 10% of the total amount of each confirmed booking to Book Direct and Save.
                    </p>

                    <h3 className="mainSmallHeading">Follow these easy steps towards submitting your property for accommodation purposes:</h3>
                    <h3 className="mainSmallHeading">Click on “Register” (Top right)</h3>
                    <p className="mainParagraph">
                        Complete the short form to create your account.
                    </p>

                    <h3 className="mainSmallHeading">Use the newly created login detail to “Log In”</h3>
                    <p className="mainParagraph">
                        You will receive a dashboard where, in future, you can make updates or changes to your listing. You can also view your Booking history, Invoices, Messages and more.
                    </p>

                    <h3 className="mainSmallHeading">Click on your Username (Top right)</h3>
                    <p className="mainParagraph">
                        Select “Add New Listing”.
                    </p>

                    <h3 className="mainSmallHeading">
                        Proceed by filling in all the relevant detail pertaining your listing
                    </h3>
                    <p className="mainParagraph">
                        Simply follow the instructions, e.g. Pricing, Media and Images, Features, Location, Bedrooms and Calender.
                    </p>
                    <p className="mainParagraph">
                        No need for any concern, because you can always make adjustments and alterations later.
                    </p>

                    <h3 className="mainSmallHeading">
                        Submit your listing
                    </h3>
                    <p className="mainParagraph">
                        Wait for approval while our admin work through the application. We will contact you should we require more information or clarity on any aspect.
                    </p>
                    <p className="mainParagraph">
                        Once approved, we will add your listing to the platform.
                    </p>

                    <h3 className="mainSmallHeading">
                        Need Assistance?
                    </h3>
                    <p className="mainParagraph">
                        Wait for approval while our admin work through the application. We will contact you should we require more information or clarity on any aspect.
                    </p>
                    <p className="mainParagraph">
                        The Book Direct and Save Community welcomes you!
                    </p>

                </TabPanel>
            </div>


        </>
    )
}



function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <section>
                    {children}
                </section>
            )}
        </div>
    );
}