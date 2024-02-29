import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CallToActions from "../../../components/common/CallToActions";
import Seo from "../../../components/common/Seo";
import Header11 from "../../../components/header/header-6";
import DefaultFooter from "../../../components/footer/footer-6";
import MainFilterSearchBox from "../../../components/hotel-list/hotel-list-v1/MainFilterSearchBox";
import TopHeaderFilter from "../../../components/hotel-list/hotel-list-v1/TopHeaderFilter";
import HotelProperties from "../../../components/hotel-list/hotel-list-v1/HotelProperties";
import Sidebar from "../../../components/hotel-list/hotel-list-v1/Sidebar";
import { AllData } from "../../../features/business/listReducer";

const Index = () => {
  const dispatch = useDispatch();

  const [dataSource, setDataSource] = useState([]);
  const [searchData, setSearchData] = useState({
    city: "",
    category: "",
    categoryLevel: [],
    state: "",
  });
  const { listData } = useSelector((state) => state.List);

  const handleDataChange = (value) => {
    setSearchData(value);
  };
  const Search = () => {
    dispatch(AllData(searchData));
  };
  const handleCategoryLevel = (level) => {
    setSearchData({...searchData, categoryLevel: level})
  };
  useEffect(() => {
    if (listData?.getAllData !== undefined) {
      setDataSource(listData?.getAllData);
    }
  }, [listData?.getAllData]);

  return (
    <>
      <Seo pageTitle="Hotel List v1" />
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <Header11 colorstate={true} />
      {/* End Header 1 */}

      <section className="pt-40 pb-40 bg-light-2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <h1 className="text-30 fw-600">Find Your Dream Luxury Hotel</h1>
              </div>
              {/* End text-center */}
              <MainFilterSearchBox
                handleChangeData={handleDataChange}
                data={searchData}
                handleSearch={Search}
              />
            </div>
            {/* End col-12 */}
          </div>
        </div>
      </section>
      {/* Top SearchBanner */}

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-30">
            <div className="col-xl-3">
              <aside className="sidebar y-gap-40 xl:d-none">
                <Sidebar handleCategoryLevel={handleCategoryLevel} />
              </aside>
              {/* End sidebar for desktop */}

              <div
                className="offcanvas offcanvas-start"
                tabIndex="-1"
                id="listingSidebar"
              >
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasLabel">
                    Filter Hotels
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                {/* End offcanvas header */}

                <div className="offcanvas-body">
                  <aside className="sidebar y-gap-40  xl:d-block">
                    <Sidebar />
                  </aside>
                </div>
                {/* End offcanvas body */}
              </div>
              {/* End mobile menu sidebar */}
            </div>
            {/* End col */}

            <div className="col-xl-9 ">
              <TopHeaderFilter listData={dataSource} />
              <div className="mt-30"></div>
              {/* End mt--30 */}
              <div className="row y-gap-30">
                <HotelProperties listData={dataSource} />
              </div>
              {/* End .row */}
            </div>
            {/* End .col for right content */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End layout for listing sidebar and content */}

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
    </>
  );
};

export default Index;
