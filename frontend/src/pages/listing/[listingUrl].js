import { useEffect, useState, useRef } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import listingStyles from "@/styles/Listing.module.css";

import BookingForm from "@/components/booking-form/bookingForm";

import { getSingleListing } from "../api/listingsApi";
import { useQuery } from "@tanstack/react-query";

// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBed,
    faBath,
    faUser,
    faLocationDot,
    faHouseChimney,
    faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

import MyGoogleMaps from "@/components/google-map/googleMapsMap";
import { Marker } from "@react-google-maps/api";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

// React Date Picker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays, subDays } from "date-fns";


export default function Listing(props) {
    const router = useRouter();
    const { listingUrl } = router.query;

    const { data: listing, isLoading, error } = useQuery(["listing", listingUrl], getSingleListing);

    const [images, setImages] = useState([]);
    const [startDate, setStartDate] = useState(new Date());

    const ref = useRef(null);

    useEffect(() => {
        if (listing?.gallery) {
            const newImages = listing?.gallery.map((image) => {
                return {
                    original: image.image,
                    thumbnail: image.image,
                    originalAlt: listing.title,
                    thumbnailAlt: listing.title,
                };
            });
            setImages(newImages);
        }
    }, [listing]);

    let showPrice = "";

    if (listing?.separate_rooms.length > 0) {
        let priceArr = listing?.separate_rooms
            .map((room) => {
                return room.price;
            })
            .sort((a, b) => a - b);
        showPrice = (
            <span>
                R{priceArr[0]} - R{priceArr.slice(-1)} /night
            </span>
        );
    } else {
        showPrice = <span>R{listing?.price}/night</span>;
    }

    const imageGallery =
        images.length > 0 ? (
            <ImageGallery
                items={images}
                lazyLoad={true}
                showFullscreenButton={false}
                additionalClass={listingStyles.imageGallery}
                showPlayButton={false}
            />
        ) : (
            <span>Loading...</span>
        );

    if (isLoading) return <p>Loading...</p>;

    if (error) return <p>Error: {error.message}</p>;

    return (
        <>
            <Head>
                <title>{listing.title} - Book Direct And Save</title>
                <meta name="description" content={listing.title} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>


            <div style={{ backgroundColor: "#f7f8f9" }}>
                {imageGallery}

                <div className={listingStyles.listingContainer}>
                    <div>
                        <h2 className={listingStyles.mainHeading}>{listing["title"]}</h2>
                    </div>

                    <div className={listingStyles.mainContent}>
                        <div className={listingStyles.leftContent}>
                            <div>
                                <p className={listingStyles.title}>{listing.title}</p>
                                <p>
                                    <FontAwesomeIcon icon={faLocationDot} /> {listing.location}
                                    {listing.city && `, ${listing.city["city"]}`}{" "}
                                    {listing.province && `, ${listing.province["province"]}`}
                                </p>
                                <div className={listingStyles.quickOverview}>
                                    <div className={listingStyles.singleQuickOverview}>
                                        <FontAwesomeIcon
                                            color="#d8dce1"
                                            icon={faHouseChimney}
                                            size="2x"
                                        />
                                        <span>
                                            {" "}
                                            {listing.listing_type && listing.listing_type["listing_type"]}
                                        </span>
                                    </div>
                                    <div className={listingStyles.singleQuickOverview}>
                                        <FontAwesomeIcon color="#d8dce1" icon={faBed} size="2x" />
                                        <span> {listing.bedrooms} Bedrooms</span>
                                    </div>
                                    <div className={listingStyles.singleQuickOverview}>
                                        <FontAwesomeIcon color="#d8dce1" icon={faBath} size="2x" />
                                        <span> {listing.bathrooms} Bathrooms</span>
                                    </div>
                                    <div className={listingStyles.singleQuickOverview}>
                                        <FontAwesomeIcon color="#d8dce1" icon={faUser} size="2x" />
                                        <span> {listing.guests} Guests</span>
                                    </div>
                                </div>
                                <section className={listingStyles.contentSection}>
                                    <h3>About this listing:</h3>
                                    <p>{listing.description}</p>
                                </section>

                                {listing.separate_rooms.length > 0 ? (
                                    <section className={listingStyles.contentSection}>
                                        <h3>Separate Rooms:</h3>
                                        <div className={listingStyles.mainCard}>
                                            {listing.separate_rooms.map((room) => {
                                                return (
                                                    <div key={room.id} className={listingStyles.singleCard}>
                                                        <div className={listingStyles.imageCard}>
                                                            {room.gallery && (
                                                                <img
                                                                    className={listingStyles.listingImage}
                                                                    src={room.gallery[0]["image"]}
                                                                    alt={room.title}
                                                                />
                                                            )}
                                                            <p className={listingStyles.separatePrice}>
                                                                R{room.price} /night
                                                            </p>
                                                        </div>
                                                        <div className={listingStyles.bottomCard}>
                                                            <p className={listingStyles.separateTitle}>{room.title}</p>
                                                            <p className={listingStyles.separateTitle}>
                                                                {room.description}
                                                            </p>
                                                            {room.amenities &&
                                                                room.amenities.map((amenity) => {
                                                                    return (
                                                                        <span className={listingStyles.separateAmenities}>
                                                                            <FontAwesomeIcon
                                                                                size="xs"
                                                                                icon={faAngleRight}
                                                                            />{" "}
                                                                            {amenity.amenities}
                                                                        </span>
                                                                    );
                                                                })}
                                                            <div className={listingStyles.infoCard}>
                                                                <p>
                                                                    <FontAwesomeIcon icon={faBed} /> {room.bedrooms}{" "}
                                                                    Bedrooms
                                                                </p>
                                                                <p>
                                                                    <FontAwesomeIcon icon={faBath} /> {room.bathrooms}{" "}
                                                                    Bathrooms
                                                                </p>
                                                                <p>
                                                                    <FontAwesomeIcon icon={faUser} /> {room.guests}{" "}
                                                                    Guests
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className={listingStyles.separateCalendar}>
                                                            <DatePicker
                                                                selected={startDate}
                                                                excludeDateIntervals={room.booked_dates.map(
                                                                    (date) => {
                                                                        return {
                                                                            start: subDays(new Date(date.from_date), 1),
                                                                            end: subDays(new Date(date.to_date), 1),
                                                                        };
                                                                    }
                                                                )}
                                                                selectsRange
                                                                selectsDisabledDaysInRange
                                                                inline
                                                                monthsShown={2}
                                                            />
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </section>
                                ) : (
                                    ""
                                )}

                                <section className={listingStyles.contentSection}>
                                    <h3>Amenities:</h3>
                                    <div>
                                        {listing.amenities &&
                                            listing.amenities.map((amenity) => {
                                                return (
                                                    <div>
                                                        <FontAwesomeIcon icon={faAngleRight} size="sm" />
                                                        <span> {amenity.amenities}</span>
                                                    </div>
                                                );
                                            })}
                                    </div>
                                </section>

                                <section className={listingStyles.contentSection}>
                                    <h3>More Details:</h3>
                                    <div>
                                        <div>
                                            <FontAwesomeIcon icon={faAngleRight} size="sm" />
                                            <span>
                                                {" "}
                                                Listing Type:{" "}
                                                {listing.listing_type &&
                                                    listing.listing_type["listing_type"]}
                                            </span>
                                        </div>
                                        <div>
                                            <FontAwesomeIcon icon={faAngleRight} size="sm" />
                                            <span> Bedrooms: {listing.bedrooms}</span>
                                        </div>
                                        <div>
                                            <FontAwesomeIcon icon={faAngleRight} size="sm" />
                                            <span> Bathrooms: {listing.bathrooms}</span>
                                        </div>
                                        <div>
                                            <FontAwesomeIcon icon={faAngleRight} size="sm" />
                                            <span> Guests: {listing.guests}</span>
                                        </div>
                                        <div>
                                            <FontAwesomeIcon icon={faAngleRight} size="sm" />
                                            <span> Check-In Time: {listing["check_in"]}</span>
                                        </div>
                                        <div>
                                            <FontAwesomeIcon icon={faAngleRight} size="sm" />
                                            <span> Check-Out Time: {listing["check_out"]}</span>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>

                        <div className={`${listingStyles.rightContent} `} ref={ref}>
                            <div className={listingStyles.price}>{showPrice}</div>
                            <BookingForm listing={listing} />
                        </div>
                    </div>
                </div>

                <MyGoogleMaps
                    zoom={12}
                    center={{ lat: -34.35639139101535, lng: 21.414978979605802 }}
                    mapMargin="0 0 -50px 0"
                >
                    <Marker
                        position={{
                            lat: listing["latitude"] ? listing["latitude"] : -34.35639139101535,
                            lng: listing["longitude"]
                                ? listing["longitude"]
                                : 21.414978979605802,
                        }}
                    />
                </MyGoogleMaps>
            </div>
        </>
    )
}