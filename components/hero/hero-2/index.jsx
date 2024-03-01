import { useSelector, useDispatch } from "react-redux";
import { addCurrentTab } from "../../../features/hero/findPlaceSlice";
import MainFilterSearchBox from "./MainFilterSearchBox";
import SelectFilter from '../../../components/hotels/filter-tabs/SelectFilter'

const Index = () => {
  const { tabs, currentTab } = useSelector((state) => state.hero) || {};
  const dispatch = useDispatch();

  return (
    <section className="masthead -type-2 z-2">
      <div className="masthead__bg " style={{ backgroundColor: "#013186" }}>
        <img alt="image" src="/img/masthead/2/bg.png" className="js-lazy" />
      </div>

      <div className="container">
        <div className="masthead__tabs">
          <div className="tabs -bookmark-2 js-tabs">
            <div className="tabs__controls d-flex items-center js-tabs-controls">
              {tabs?.map((tab) => (
                <button
                  key={tab?.id}
                  className={`tabs__button px-30 py-20 sm:px-20 sm:py-15 rounded-4 fw-600 text-white js-tabs-button ${
                    tab?.name === currentTab ? "is-tab-el-active" : ""
                  }`}
                  onClick={() => dispatch(addCurrentTab(tab?.name))}
                >
                  <i className={`${tab.icon} text-20 mr-10 sm:mr-5`}></i>
                  {tab?.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="masthead__content">
          <div className="row y-gap-40">
            <div className="col-xl-5" data-aos="fade-up" data-aos-offset="0">
              <h1 className="z-2 text-40 lg:text-40 md:text-30 text-white pt-80 xl:pt-0">
                <span className="text-yellow-1">SUPERIOR AFFILIATE LINK </span>
                <br />
                CUSTUMIZATION TOOL
              </h1>
              {/* <p className="z-2 text-white mt-20">
                Please seach the businesses easily.
              </p> */}

              {/* <MainFilterSearchBox /> */}
            </div>

            <div className="col-xl-7">
              <div className="masthead__images relative-1">
                <div data-aos="fade" data-aos-delay="400">
                  <img
                    src="/img/affiliate/istockphoto-1.JPG"
                    alt="image"
                    className="js-mouse-move"
                  />
                </div>

                <div data-aos="fade" data-aos-delay="600">
                  <img
                    src="/img/affiliate/istockphoto-5.JPG"
                    alt="image"
                    className="js-mouse-move"
                  />
                </div>

                <div data-aos="fade" data-aos-delay="800">
                  <img
                    src="/img/affiliate/istockphoto-6.JPG"
                    alt="image"
                    className="js-mouse-move"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
