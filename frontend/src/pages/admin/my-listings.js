import styles from "./admin-styles/my-listings.module.css";
import ListingActions from "@/components/listing-actions/listingActions";
import { BACKEND_URL } from "@/helpers/constants";
import { useUserData } from "@/hooks";
import { useRouter } from "next/router";


export default function MyListings() {
    const { userData, isLoading, error, session, status } = useUserData();
    console.log(userData);

    const router = useRouter();

    if (isLoading) return <div>Loading...</div>

    if (error) return <div>Error: {error}</div>

    if (status === "authenticated") {
        return <>
            <div className={styles.myListingsPage}>
                <table className={styles.myListingsTable}>
                    <thead>
                        <tr>
                            <th>Thumbnail</th>
                            <th>Title</th>
                            <th>Address</th>
                            <th>Type</th>
                            <th>Price</th>
                            <th>Bedrooms</th>
                            <th>Bathrooms</th>
                            <th>Guests</th>
                            <th>ID</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userData?.listings?.map((listing) => {
                            return (
                                <tr key={listing.id}>
                                    <td
                                        className={styles.myListingsClickable}
                                        onClick={() => {
                                            router.push(`/listing/${listing.url}`);
                                        }}
                                    >
                                        <img
                                            className={styles.myListingsThumb}
                                            src={`${BACKEND_URL}${listing.gallery[0].image}`}
                                            alt={listing.title}
                                        />
                                    </td>
                                    <td
                                        className={styles.myListingsClickable}
                                        onClick={() => {
                                            router.push(`/listing/${listing.url}`);
                                        }}
                                    >
                                        {listing.title}
                                    </td>
                                    <td>{listing.location}</td>
                                    <td>{listing.listing_type.listing_type}</td>
                                    <td>R{listing.price}</td>
                                    <td>{listing.bedrooms}</td>
                                    <td>{listing.bathrooms}</td>
                                    <td>{listing.guests}</td>
                                    <td>{listing.id}</td>
                                    <td>
                                        {listing.is_published ? (
                                            <span>Published</span>
                                        ) : (
                                            <span>Draft</span>
                                        )}
                                    </td>
                                    <td>
                                        <ListingActions url={listing.url} />
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    }

    return <a href="/api/auth/signin">Log In</a>
}
