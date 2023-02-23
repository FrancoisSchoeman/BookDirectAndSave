import { useEffect, useState } from "react";
import recentListingStyles from "./recentListings.module.css";

import { useRouter } from "next/router";

import { useQuery } from "@tanstack/react-query";
import { getRecentListings } from "@/pages/api/listingsApi";

// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faBath, faUser } from "@fortawesome/free-solid-svg-icons";

export default function RecentListings(props) {
    const { data: listings, isLoading, error } = useQuery(["recent-listings"], getRecentListings);

    const router = useRouter();

    if (isLoading) return <div>Loading...</div>;

    if (error) return `An error occured: ${error.message}`;

    return (
        <div className={recentListingStyles.mainCard}>
            {listings?.map((listing) => (
                <div
                    key={listing.id}
                    className={recentListingStyles.singleCard}
                    onClick={() => {
                        router.push(`/listing/${listing.url}`);
                    }}
                >
                    <div className={recentListingStyles.imageCard}>
                        {listing.gallery && (
                            <img
                                className={recentListingStyles.listingImage}
                                src={listing.gallery[0]["image"]}
                                alt={listing.title}
                            />
                        )}
                        <p className={recentListingStyles.price}>R{listing.price} /night</p>
                    </div>
                    <div className={recentListingStyles.bottomCard}>
                        <p className={recentListingStyles.title}>{listing.title}</p>
                        <p className={recentListingStyles.location}>
                            {listing.location}
                            {listing.city && `, ${listing.city["city"]}`}{" "}
                            {listing.province && `, ${listing.province["province"]}`}
                        </p>
                        <div className={recentListingStyles.infoCard}>
                            <p>
                                <FontAwesomeIcon icon={faBed} /> {listing.bedrooms} Bedrooms
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faBath} /> {listing.bathrooms} Bathrooms
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faUser} /> {listing.guests} Guests
                            </p>
                        </div>
                        <p>
                            {listing.listing_type && listing.listing_type["listing_type"]}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
