import React from 'react';
import regionBannerStyles from './regionBanner.module.css';

import george from '../../../public/images/george.jpg';
import knysna from '../../../public/images/knysna.jpg'
import hessequa from '../../../public/images/hessequa.jpg';
import kannaland from '../../../public/images/kannaland.jpg';
import mosselBay from '../../../public/images/mossel-bay.jpg';
import oudtshoorn from '../../../public/images/oudtshoorn.jpg';
import plettenbergBay from '../../../public/images/plettenberg-bay.jpg';

export default function RegionBanner(props) {

    return (
        <section className={regionBannerStyles.regionBanner}>
            <div className={regionBannerStyles.bannerColumn}>

                <div className={regionBannerStyles.imageContainer} style={{ backgroundImage: `url(${george.src})` }} >
                    <div className={regionBannerStyles.imageOverlay}>
                        <div className={regionBannerStyles.imageOverlayText}>
                            <p>George</p>
                            <p>Wilderness</p>
                            <p>Victoria Bay</p>
                            <p>Uniondale</p>
                            <p>Glentana</p>
                            <p>Herolds Bay</p>
                            <p>Herold Hamlet</p>
                        </div>
                    </div>
                    <div className={`front-overlay ${regionBannerStyles.frontOverlay}`}>
                        <h3>George</h3>
                    </div>
                </div>

                <div className={regionBannerStyles.imageContainer} style={{ backgroundImage: `url(${knysna.src})` }}>
                    <div className={regionBannerStyles.imageOverlay}>
                        <div className={regionBannerStyles.imageOverlayText}>
                            <p>Knysna</p>
                            <p>Brenton On Sea</p>
                            <p>Rheenendal</p>
                            <p>Sedgefield</p>
                        </div>
                    </div>
                    <div className={`front-overlay ${regionBannerStyles.frontOverlay}`}>
                        <h3>Greater Knysna</h3>
                    </div>
                </div>

                <div className={regionBannerStyles.imageContainer} style={{ backgroundImage: `url(${hessequa.src})` }} >
                    <div className={regionBannerStyles.imageOverlay}>
                        <div className={regionBannerStyles.imageOverlayText}>
                            <p>Albertinia</p>
                            <p>Gouritsmond</p>
                            <p>Heidelberg</p>
                            <p>Jongensfontein</p>
                            <p>Riversdale</p>
                            <p>Stilbaai</p>
                            <p>Witsand</p>
                        </div>
                    </div>
                    <div className={`front-overlay ${regionBannerStyles.frontOverlay}`}>
                        <h3>Hessequa</h3>
                    </div>
                </div>

            </div>

            <div className={regionBannerStyles.bannerColumn}>

                <div className={regionBannerStyles.imageContainer} style={{ backgroundImage: `url(${kannaland.src})` }} >
                    <div className={regionBannerStyles.imageOverlay}>
                        <div className={regionBannerStyles.imageOverlayText}>
                            <p>Calitzdorp</p>
                            <p>Ladismith</p>
                            <p>Van Wyksdorp</p>
                        </div>
                    </div>
                    <div className={`front-overlay ${regionBannerStyles.frontOverlay}`}>
                        <h3>Kannaland</h3>
                    </div>
                </div>

                <div className={regionBannerStyles.imageContainer} style={{ backgroundImage: `url(${mosselBay.src})` }} >
                    <div className={regionBannerStyles.imageOverlay}>
                        <div className={regionBannerStyles.imageOverlayText}>
                            <p>Mossel Bay</p>
                            <p>Dana Bay</p>
                            <p>Glentana</p>
                            <p>Great Brak</p>
                            <p>Hartenbos</p>
                            <p>Reebok</p>
                        </div>
                    </div>
                    <div className={`front-overlay ${regionBannerStyles.frontOverlay}`}>
                        <h3>Mossel Bay</h3>
                    </div>
                </div>

                <div className={regionBannerStyles.imageContainer} style={{ backgroundImage: `url(${oudtshoorn.src})` }} >
                    <div className={regionBannerStyles.imageOverlay}>
                        <div className={regionBannerStyles.imageOverlayText}>
                            <p>Oudtshoorn</p>
                            <p>De Rust</p>
                        </div>
                    </div>
                    <div className={`front-overlay ${regionBannerStyles.frontOverlay}`}>
                        <h3>Oudtshoorn</h3>
                    </div>
                </div>

                <div className={regionBannerStyles.imageContainer} style={{ backgroundImage: `url(${plettenbergBay.src})` }} >
                    <div className={regionBannerStyles.imageOverlay}>
                        <div className={regionBannerStyles.imageOverlayText}>
                            <p>Plettenberg Bay</p>
                            <p>Keurboomstrand</p>
                            <p>Nature's Calley</p>
                        </div>
                    </div>
                    <div className={`front-overlay ${regionBannerStyles.frontOverlay}`}>
                        <h3>Plettenberg Bay</h3>
                    </div>
                </div>

            </div>
        </section>
    );
}