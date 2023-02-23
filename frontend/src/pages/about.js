import Head from "next/head";

import MainHeader from "@/components/main-header/mainHeader";

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

export default function About() {
    return (
        <>
            <Head>
                <title>About - Book Direct And Save</title>
                <meta name="description" content="About" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>


            <MainHeader
                heading="About"
                subheading="Book Direct And Save" />

            <section className="mainSection">
                <h2 className="mainSubheading">
                    BOOK DIRECT AND SAVE - OUR TWOFOLD FUNCTIONALITY
                </h2>
                <p className="mainParagraph">
                    The Book Direct and Save Website is of a dual-purpose nature:
                </p>
                <p className="mainParagraph">
                    On the one hand, Book Direct & Save is a powerful accommodation platform that helps you make bookings hassle free within seconds. While on the other hand, it allows you to submit a property for accommodation purposes.
                </p>
                <p className="mainParagraph">
                    Besides, by cutting out the general platform fees of all the main booking platforms, it is also the cheapest booking option for the same property.
                </p>
                <p className="mainParagraph">
                    This Website comprises places of accommodation in all the towns and rural areas within the entire Western Cape Garden Route as well as Klein Karoo area. Something for every taste, purpose and budget is ready and waiting to offer you a most unforgettable experience.
                </p>
            </section>

            <hr className="mainHorizontalRule" />

            <section className="mainSection">
                <h2 className="mainSubheading">
                    YOUR HOLIDAY OR OVERNIGHT ACCOMMODATION SOLUTION IN THE GARDEN ROUTE & KLEIN KAROO IN SOUTH AFRICA
                </h2>
                <p className="mainParagraph">
                    Use our straightforward Website to find and secure suitable holiday or overnight accommodation effortlessly.
                </p>
                <h3 className="mainSmallHeading">
                    Make use of the comprehensive filter above to:
                </h3>
                <ul className="mainList">
                    <li>
                        Specify the region or town of your choice
                    </li>
                    <li>
                        Type of accommodation you prefer
                    </li>
                    <li>
                        Number of guests
                    </li>
                    <li>
                        Your time-frame
                    </li>
                    <li>
                        Run the search
                    </li>
                    <li>
                        Make your choice and request your booking
                    </li>
                    <li>
                        Pay the deposit to confirm the booking using the Https Secure Payment Portal
                    </li>
                    <li>
                        Wait for confirmation of your booking
                    </li>
                    <li>
                        Arrive at the appointed time and let your hair down!
                    </li>
                </ul>
            </section>

            <hr className="mainHorizontalRule" />

            <section className="mainSection">
                <h2 className="mainSubheading">
                    OPPORTUNITY TO OFFER YOUR HOME/APARTMENT/ROOM/CHALET ONLINE FOR ACCOMMODATION PURPOSES
                </h2>
                <p className="mainParagraph">
                    Have a house, apartment/flat, room/s, you want to rent out for overnight, weekend or holiday accommodation? Why not add your property to our Website, thus making it visible to prospective clients worldwide?
                </p>
                <h3 className="mainSmallHeading">Just follow these simple steps:</h3>
                <p className="mainParagraph">
                    <FontAwesomeIcon icon={faAngleRight} size="sm" /> Click on “Register” (Top right)
                </p>
                <h3 className="mainSmallHeading">Just follow these simple steps:</h3>
                <p className="mainParagraph">
                    <FontAwesomeIcon icon={faAngleRight} size="sm" /> Log in using the login detail created
                </p>
                <p className="mainParagraph">
                    Click on your username (Top right) A drop-down menu will appear pertaining your account showing all the functions
                    (Dashboard, Profile, My Listings, Add New Listing, My Bookings, Favorites, Invoices, Messages and Log Out)
                </p>
                <p className="mainParagraph">
                    <FontAwesomeIcon icon={faAngleRight} size="sm" /> Select “Add New Listing”
                </p>
                <p className="mainParagraph">
                    You are now in your account.
                </p>
                <p className="mainParagraph">
                    Continue by filling in all the relevant information as prompted regarding your listing: Pricing, Media & Images, Features, Location, Bedrooms and Calendar. (Remember, nothing is cast in stone, you can always make changes later.)
                </p>
                <p className="mainParagraph">
                    <FontAwesomeIcon icon={faAngleRight} size="sm" /> Submit your listing
                </p>
                <p className="mainParagraph">
                    <FontAwesomeIcon icon={faAngleRight} size="sm" /> Wait for approval
                </p>
                <p className="mainParagraph">
                    Our administrator will work through your listing and, should we need more information or clarity on any aspect, we will contact you.
                    Once approved, your listing will be added to the platform.
                </p>
                <p className="mainParagraph">
                    If you need more information regarding this opportunity to market your accommodation online, or, should you need help with completing the listing information, please contact us straight away.
                </p>
            </section>

            <hr className="mainHorizontalRule" />

            <section className="mainSection">
                <h2 className="mainSubheading">
                    THE WESTERN CAPE GARDEN ROUTE REGION
                </h2>
                <p className="mainParagraph">
                    The very popular and astoundingly beautiful Garden Route District lies sprawled between the Langeberg Mountains and the Indian Ocean. From Witsand/Heidelberg in the west, continuing all the way east to the remarkable coastal town of Plettenberg Bay.
                </p>
                <p className="mainParagraph">
                    With the N2 between Cape Town and Port Elizabeth snaking along the middle of the stretch of land. Passing towns such as Riversdale, Albertinia, Mossel Bay and Hartenbos, Groot Brak, George as well as Sedgefield, Knysna, and many more.
                </p>
                <h3 className="mainSmallHeading">
                    Some Activities and Attractions in The Garden Route
                </h3>
                <ul className="mainList">
                    <li>
                        Pristine beaches, some rugged and rocky, other long stretches of white sand, various river estuaries, whale watching;
                    </li>
                    <li>
                        Virgin forests, bird and monkey sanctuaries, game lodges, mountain bike, hiking, as well as 4×4 trails;
                    </li>
                    <li>
                        Wine tasting farms, cultural experiences, all kinds of tours lead by people with intimate knowledge of the area and more;
                    </li>
                    <li>
                        Various exiting extreme sports, water sports, boat rides, deep-sea fishing, rock, as well as river angling, etc.;
                    </li>
                    <li>
                        Intriguing archaeological sites, also historical builds and sights like the replica of Diaz’s boat in Mossel Bay, museums, etc.;
                    </li>
                    <li>
                        Also a large variety of places to eat, quaint shops, stores of many kinds, night-life – there is just no end to the possible entertainment.
                    </li>
                </ul>
            </section>

            <hr className="mainHorizontalRule" />

            <section className="mainSection">
                <h2 className="mainSubheading">
                    THE WESTERN CAPE KLEIN KAROO REGION (KANNALAND & OUDTSHOORN)
                </h2>
                <p className="mainParagraph">
                    The Klein Karoo lies sprawled over the long valley between two formidable mountain ranges: the Groot Swartberg Mountains to the north and the Langeberg Mountains to the south. The valley stretches from Montagu in the west covering some 350 km to Uniondale in the east. This area has holds an attraction of its own what with the spectacular mountain cliffs, fertile vineyards and clear streams that gradually change into desert-like landscapes and unique Karoo vegetation the further east you go.
                </p>
                <p className="mainParagraph">
                    The famous tourist Route 62 runs through the Klein Karoo, passing through towns like Calitzdorp, Ladismith, De Rust and Oudtshoorn. This scenic route is often used as an alternative to the N2 between Cape Town and Port Elizabeth.
                </p>
                <h3 className="mainSmallHeading">
                    The Klein Karoo has Lots to Offer
                </h3>
                <ul className="mainList">
                    <li>
                        Majestic and awe-inspiring mountain views, incredibly beautiful passes, various waterfalls and much more;
                    </li>
                    <li>
                        Mountain biking, cycle tours, quad biking, 4×4 trails as well as hiking trails and backpacking;
                    </li>
                    <li>
                        Explore the intriguing Cango Caves;
                    </li>
                    <li>
                        Ostrich farm tours, ostrich rides, ostrich palaces, etc.;
                    </li>
                    <li>
                        Cango Wild Life Ranch, cave diving with crocodiles, valley of the ancients;
                    </li>
                    <li>
                        Various game lodges, walks with meerkats, bush safaris, as well as elephant feeding and more;
                    </li>
                    <li>
                        Undisturbed nature reserves, home to unique vegetation – fynbos, as well as thicket and succulent Karoo;
                    </li>
                    <li>
                        Wine cellars, wine tasting and purchasing of quality dry red and white wines, also Muscadel, Port, pot still brandy and the like;
                    </li>
                    <li>
                        A number of fascinating museums;
                    </li>
                    <li>
                        Skydiving along with hot air ballooning in Oudtshoorn – silently drift over the Garden Route in complete tranquillity;
                    </li>
                    <li>
                        Enjoy Klein Karoo cuisine, meet the friendly helpful Klein Karoo people while relaxing in the deeply serene and peaceful atmosphere.
                    </li>
                </ul>
            </section>
        </>
    )
}