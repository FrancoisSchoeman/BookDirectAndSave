import Head from 'next/head'
import Image from 'next/image'

import MainHeader from "../components/main-header/mainHeader";
import ShapeDivider from "../components/shape-divider/shapeDivider";
import RegionBanner from "../components/region-banner/regionBanner";
import RecentListings from "../components/recent-listings/recentListings";

// import userService from "../api/auth/user-service";

export default function Home() {


  // Getting user data after successful login
  // useEffect(() => {
  //   userService.getUserBoard().then((response) => {
  //     console.log(response.data);
  //   });
  // }, []);

  // useEffect(() => {
  //   const ical = axios.get(
  //     "https://calendar.google.com/calendar/ical/64732812a87f0ddf500ffafffb8e419fbbe1005198547cdcc006b9e981119e49%40group.calendar.google.com/public/basic.ics",
  //     {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //       },
  //     }
  //   );
  //   console.log(ical);
  // }, []);

  return (
    <>
      <Head>
        <title>Book Direct And Save</title>
        <meta name="description" content="Accommodation at your fingertips" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <MainHeader
        heading="Book Direct And Save"
        subheading="Best Prices Guaranteed"
      />

      <section className="mainSection">
        <h2 className="mainSubheading">Dual-Purpose Nature</h2>

        <h3 className="mainSmallHeading">
          The purpose of Book Direct and Save is twofold:
        </h3>

        <ul className="mainList">
          <li>A platform for booking accommodation</li>
          <li>
            A platform for submitting your property for accommodation purposes
          </li>
        </ul>
      </section>

      <hr className="mainHorizontalRule" />

      <section className="mainSection">
        <h2 className="mainSubheading">
          INSTANT BOOKING AT YOUR FINGERTIPS
        </h2>

        <p className="mainParagraph">
          Stop and consider for a moment: why indiscriminately pay all the
          hidden costs if a cheaper option for the same accommodation is
          available?
        </p>

        <p className="mainParagraph">
          Book Accommodation Direct, and in doing so, cut out the general
          platform fees as rendered by all the main booking platforms.
        </p>

        <p className="mainParagraph">
          We help you to book the same accommodation direct with the owner at
          guaranteed lower prices. Fast, safe, hassle free bookings at the type
          of accommodation that suits you best, be it a Bed and Breakfast,
          Self-catering Home/Apartment, or Backpackers Hostel, etc.
        </p>

        <p className="mainParagraph">
          As our name indicates, we focus on Accommodation Opportunities
          throughout the Garden Route and Klein Karoo regions in the Western
          Cape Province at the tip of South Africa.
        </p>

        <p className="mainParagraph">
          It is not difficult to see why this region is one of the most popular
          destinations, not only in South Africa, but also worldwide.
        </p>

        <p className="mainParagraph">
          Starting from Heidelberg, the Garden Route stretches eastwards between
          the Langeberg Mountains and the coast through to Plettenberg Bay.
          Pristine beaches, indigenous fynbos, virgin forests: one vast
          playground for lovers of water sports, extreme sports, fishing and
          unspoiled nature. Archaeological finds witness the rich history of the
          area going as far back as the Middle Stone Age (± 70 000 years ago).
        </p>

        <p className="mainParagraph">
          In turn, the Klein Karoo to the north of the Langeberg Mountain Range
          stretches from Montagu eastwards to Uniondale. Almost completely
          surrounded by mountains, this 350 km long valley holds a majestic
          beauty of its own, what with the spectacular mountain passes, fruit
          orchards, vineyards and ostrich farms.
        </p>

        <p className="mainParagraph">
          A visit to this incredibly beautiful segment of the country should be
          on the bucket list of every South African nature enthusiast, as well
          as international tourist.
        </p>
      </section>

      <RegionBanner />

      <ShapeDivider color="white">
        <section
          className="mainSection"
          style={{ backgroundColor: "#f7f8f9" }}
        >
          <h2 className="mainSubheading">RECENT LISTINGS</h2>

          <p className="mainParagraph">
            Peruse the newly added listings on display for your convenience, or
            else, go straight to the All Listings page.
          </p>

          <p className="mainParagraph">
            The Garden Route and Klein Karoo region is extremely popular as a
            holiday destination, thus accommodation is in high demand during the
            holiday seasons.
          </p>

          <p className="mainParagraph">
            So, to avoid disappointment, book your stay today for an
            unforgettable experience – when you want it; where you like it; the
            way you prefer it.
          </p>

          <p className="mainParagraph">
            This might turn out to be the only item you want on your bucket
            list. Ever.
          </p>
        </section>

        <RecentListings />
      </ShapeDivider>

      <ShapeDivider color="#f7f8f9">
        <div className="mainDoubleColumn">
          <section className="mainSection">
            <h2 className="mainSubheading">HOW TO BOOK YOUR STAY</h2>

            <p className="mainParagraph">
              This platform communicates with all major platforms in South
              Africa. Read more about the booking process and marvel at the ease
              and speed of it.
            </p>
          </section>

          <section className="mainSection">
            <h2 className="mainSubheading">
              HOW TO SUBMIT YOUR PROPERTY
            </h2>

            <p className="mainParagraph">
              Go ahead… See how easy it is to add that property of yours to the
              platform for the purpose of holiday accommodation. Check it out
              today!
            </p>
          </section>
        </div>
      </ShapeDivider>


    </>
  )
}
