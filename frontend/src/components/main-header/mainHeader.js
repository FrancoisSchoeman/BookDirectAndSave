import headerStyles from "./mainHeader.module.css";

import { ParallaxBanner } from "react-scroll-parallax";
import SearchForm from "../search-form/searchForm";
import headerImage from "../../../public/images/BookDirectHeader.jpg"

export default function MainHeader({ heading, subheading }) {
    return (
        <ParallaxBanner
            layers={[
                {
                    image: headerImage.src,
                    speed: 5,
                },
            ]}
            className={headerStyles.parallaxHeader}
        >
            <div className={headerStyles.mainHeader}>
                <h1 className={headerStyles.heading}>{heading}</h1>
                <h2 className={headerStyles.subheading}>{subheading}</h2>
                <SearchForm />
            </div>
        </ParallaxBanner>
    );
}
