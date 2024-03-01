import dynamic from "next/dynamic";
import Seo from "../../components/common/Seo";
import Footer2 from "../../components/footer/footer-6";
import Header2 from "../../components/header/header-6";
import Hero3 from "../../components/hero/hero-2";
import AppBanner from "../../components/home/home-2/AppBanner";
import BlockGuide from "../../components/home/home-2/BlockGuide";
import Subscribe from "../../components/home/home-2/Subscribe";
import TestimonialRating from "../../components/home/home-2/TestimonialRating";
import Testimonial from "../../components/home/home-2/Testimonial";
import Travellers from "../../components/home/home-2/Travellers";
import FilterHotelsTabs from "../../components/hotels/filter-tabs/FilterHotelsTabs";
import FilterHotels from "../../components/hotels/FilterHotels";
import Link from "next/link";

const home_2 = () => {
  return (
    <>
      <Seo pageTitle="Affiliate" />
      <Header2 />
      <Hero3 />
      <section className="layout-pt-lg layout-pb-md">
        <div className="container">
          <div className="row y-gap-40 sm:y-gap-10 justify-between">
            <BlockGuide />
          </div>
        </div>
      </section>
{/* 
      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Recent Activity</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  These popular destinations have a lot to offer
                </p>
              </div>
            </div>

            <div className="col-auto">
              <div className="d-flex x-gap-15 items-center justify-center pt-40 sm:pt-20">
                <div className="col-auto">
                  <button className="d-flex items-center text-24 arrow-left-hover js-places-prev">
                    <i className="icon icon-arrow-left" />
                  </button>
                </div>

                <div className="col-auto">
                  <div className="pagination -dots text-border js-places-pag" />
                </div>

                <div className="col-auto">
                  <button className="d-flex items-center text-24 arrow-right-hover js-places-next">
                    <i className="icon icon-arrow-right" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <Travellers />
        </div>
      </section>

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-10 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">List of Business</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Interdum et malesuada fames ac ante ipsum
                </p>
              </div>
            </div>

            <div className="col-auto tabs -pills-2 ">
              <FilterHotelsTabs />
            </div>
          </div>

          <div className="relative overflow-hidden pt-40 sm:pt-20">
            <div className="row y-gap-30">
              <FilterHotels />
            </div>
          </div>
          <div className="row justify-center pt-60">
            <div className="col-auto">
              <Link
                href="/hotel/hotel-list-v2"
                className="button px-40 h-50 -outline-blue-1 text-blue-1"
              >
                View All <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="layout-pt-lg layout-pb-lg bg-dark-3">
        <div className="container">
          <div className="row y-gap-60">
            <div className="col-xl-5 col-lg-6">
              <TestimonialRating />
            </div>

            <div className="col-xl-4 offset-xl-2 col-lg-5 offset-lg-1 col-md-10">
              <Testimonial />
            </div>
          </div>
        </div>
      </section>
      <Subscribe />
      <AppBanner /> */}
      <Footer2 />
    </>
  );
};

export default dynamic(() => Promise.resolve(home_2), { ssr: false });
