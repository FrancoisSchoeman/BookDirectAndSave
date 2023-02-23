import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import listingStyles from "../styles/AllListings.module.css";

// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faBath, faUser, faHouse } from '@fortawesome/free-solid-svg-icons';

import MyGoogleMaps from "@/components/google-map/googleMapsMap";
import { Marker } from "@react-google-maps/api";

import { useQuery } from "@tanstack/react-query";
import { getListings } from "./api/listingsApi";

export default function AllListings() {

    const router = useRouter();
    const { location, listingType, guests, arrivalDate, departureDate } = router.query;

    const [pageNum, setPageNum] = useState(1);

    // TODO: Add arrivalDate and departureDate to query
    const { data: listings, isLoading, error } = useQuery(["listings", pageNum, location, listingType, guests], getListings);

    const [sortByValue, setSortByValue] = useState();

    isLoading && <p>Loading...</p>;

    error && <p>Error: {error.message}</p>;

    return (
        <>
            <Head>
                <title>All Listings - Book Direct And Save</title>
                <meta name="description" content="All Listings" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div style={{ backgroundColor: "#f7f8f9" }}>


                <MyGoogleMaps zoom={12} center={{ lat: -34.35639139101535, lng: 21.414978979605802 }} mapMargin="80px 0 0 0">
                    {listings?.results.map((listing) => (
                        <Marker key={listing.url} position={{
                            lat: listing.latitude ? listing.latitude : -34.35639139101535,
                            lng: listing.longitude ? listing.longitude : 21.414978979605802
                        }}
                        />
                    ))}
                </MyGoogleMaps>

                <div className={listingStyles.listingsContainer}>
                    <div>
                        <h2 className={listingStyles.mainHeading}>All Listings</h2>
                        {/* <div className={listingStyles.sortBySection}>
                        {listings?.length === undefined ? <span></span> : <span>{listings?.length} Rentals</span>}
                        <span>
                            Sort By:
                            <select className={listingStyles.sortBySelect} onChange={handleSortByChange} value={sortByValue}>
                                <option disabled selected value="" >Choose</option>
                                <option value="titleAscending">Title (asc)</option>
                                <option value="titleDescending">Title (desc)</option>
                                <option value="locationAscending">Location (asc)</option>
                                <option value="locationDescending">Location (desc)</option>
                                <option value="lowPrice">Price (low to high)</option>
                                <option value="highPrice">Price (high to low)</option>
                                <option value="uploadDate">Upload Date</option>
                            </select>
                        </span>
                    </div> */}
                    </div>

                    <div className={listingStyles.mainCard}>
                        {listings?.results.map((listing) => (
                            <div key={listing.id} className={listingStyles.singleCard} onClick={() => { router.push(`/listing/${listing.url}`) }}>
                                <div className={listingStyles.imageCard}>
                                    {listing.gallery && <img className={listingStyles.listingImage} src={listing.gallery[0]['image']} alt={listing.title} />}
                                    <p className={listingStyles.price}>R{listing.price} /night</p>
                                </div>
                                <div className={listingStyles.bottomCard}>
                                    <p className={listingStyles.title}>{listing.title}</p>
                                    <p className={listingStyles.location}>{listing.location}{listing.city && `, ${listing.city['city']}`} {listing.province && `, ${listing.province['province']}`}</p>
                                    <p className={listingStyles.title}>{listing.description}</p>
                                    <div className={listingStyles.infoCard}>
                                        <p><FontAwesomeIcon icon={faBed} /> {listing.bedrooms} Bedrooms</p>
                                        <p><FontAwesomeIcon icon={faBath} /> {listing.bathrooms} Bathrooms</p>
                                        <p><FontAwesomeIcon icon={faUser} /> {listing.guests} Guests</p>
                                    </div>
                                    <p>{listing.listing_type && listing.listing_type['listing_type']}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}