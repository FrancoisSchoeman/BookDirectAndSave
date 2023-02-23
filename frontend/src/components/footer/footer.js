import footerStyles from './footer.module.css';

import Link from 'next/link';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faAngleRight, faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';

// import { useQuery } from '@tanstack/react-query';
// import { getListingTypes } from '../../api/listingTypeApi';


export default function Footer(props) {
    // const { data: listingTypes, isLoading, isError } = useQuery('listingTypes', getListingTypes);

    return (
        <footer className={footerStyles.footer}>
            <div className={footerStyles.footerColumnsContainer}>

                <div className={footerStyles.footerColumn}>
                    <h3>About Us</h3>
                    <p>
                        Book Direct & Save is a powerful accommodation platform that helps you make bookings hassle free within seconds.
                    </p>
                    <Link href="/about">Read more <FontAwesomeIcon icon={faCaretRight} /></Link>
                </div>

                <div className={footerStyles.footerColumn}>
                    <h3>Explore</h3>
                    <ul className={footerStyles.footerList}>



                        {/* {listingTypes?.map((type) => {
                            return <li style={{ cursor: "pointer" }} onClick={() => {
                                navigate("/all-listings", {
                                    state:
                                    {
                                        "location": "",
                                        "listingType": type.listing_type,
                                        "guests": 1,
                                        "arrivalDate": "",
                                        "departureDate": ""
                                    }
                                })
                            }}><FontAwesomeIcon key={type.id} icon={faAngleRight} size="sm" /> {type.listing_type}</li>
                        })} */}

                        <li><FontAwesomeIcon icon={faAngleRight} size="sm" /> All Listings</li>
                        <li><FontAwesomeIcon icon={faAngleRight} size="sm" /> All Regions</li>
                        <li><FontAwesomeIcon icon={faAngleRight} size="sm" /> All Listing Types</li>
                        <li><FontAwesomeIcon icon={faAngleRight} size="sm" /> All Amenities</li>


                    </ul>
                </div>

                <div className={footerStyles.footerColumn}>
                    <h3>Regions</h3>
                    <ul className={footerStyles.footerList}>
                        <li><FontAwesomeIcon icon={faAngleRight} size="sm" /> George</li>
                        <li><FontAwesomeIcon icon={faAngleRight} size="sm" /> Greater Knysna</li>
                        <li><FontAwesomeIcon icon={faAngleRight} size="sm" /> Hessequa</li>
                        <li><FontAwesomeIcon icon={faAngleRight} size="sm" /> Kannaland</li>
                        <li><FontAwesomeIcon icon={faAngleRight} size="sm" /> Mossel Bay</li>
                        <li><FontAwesomeIcon icon={faAngleRight} size="sm" /> Oudtshoorn</li>
                        <li><FontAwesomeIcon icon={faAngleRight} size="sm" /> Plettenberg Bay</li>
                    </ul>
                </div>

                <div className={footerStyles.footerColumn}>
                    <h3>Contact Us</h3>
                    <ul className={footerStyles.footerList}>
                        <li><FontAwesomeIcon icon={faEnvelope} size="sm" /> <a href="mailto:bookings@bookdirectandsave.co.za?subject=New Message From Book Direct And Save Website">bookings@bookdirectandsave.co.za</a></li>
                        <li><FontAwesomeIcon icon={faPhone} size="sm" /> <a href="tel:0824167279">082 416 7279</a></li>
                        <li><FontAwesomeIcon icon={faLocationDot} size="sm" /> Stibaai, Western Cape</li>
                        <li><FontAwesomeIcon icon={faAngleRight} size="sm" /> Privacy Policy</li>
                        <li><FontAwesomeIcon icon={faAngleRight} size="sm" /> Terms of Service</li>
                    </ul>
                </div>

            </div>
            <div className={footerStyles.belowFooter}>
                <span>
                    Copyright {new Date().getFullYear()} © Book Direct And Save | Powered by <a href='https://grkkwebpresence.co.za/' rel="noreferrer" target="_blank">GRKK Web Presence</a>
                </span>
            </div>
        </footer>
    )
}