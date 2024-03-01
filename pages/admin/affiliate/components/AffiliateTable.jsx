import { useEffect, useRef, useState } from "react";
import Pagination from "../../common/Pagination";
import ActionsButton from "./ActionsButton";
import { getOffers, deleteUser, updateUser } from "../../../../services/affiliate/offer";
import Image from "next/image";
import Modal from "react-bootstrap/Modal";
import Dropdown from "./Dropdown";
import { ToastContainer, toast } from "react-toastify";
import OfferEditModal from "./OfferEditModal";

const AffiliateTable = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1)
  const [offers, setOffers] = useState([])
  const [modalShow, setModalShow] = useState(false)
  const [modalInfoShow, setModalInfoShow] = useState(false)
  const [selectedOfferId, setSelectedOfferId] = useState(1)
  const [isHovered, setIsHovered] = useState('');
  const [isAction, setIsAction] = useState(false);

  const [modalOfferShow, setModalOfferShow] = useState(false)

  
  const [selectedRole, setSeletedRole] = useState(null)
  const activeRef = useRef(null)
  const banRef = useRef(null)

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const tabItems = [
    "Affiliate Links",
    // "Banned",
  ];

  const getOffersInPage = async (page) => {
    const res = await getOffers(page)
    if (res.success) {
      setTotalPage(res.totalPages)
      setOffers(res.offers)
    }
  }

  useEffect(() => {
    getOffersInPage()
  }, [])

  const handleMouseEnter = (id) => {
    setIsHovered(id);
  };

  const handleTagClick = (pageIndex) => {
    getUsersInPage(pageIndex)
    setCurrentPage(pageIndex)
  }

  const handleUpdate = (id) => {
    setSelectedOfferId(id)
    setModalShow(true)

  }

  const showOfferInfo = (id) => {
    
    !isAction && (
      setSelectedOfferId(id),
      setModalInfoShow(true)
    )

  }

  const handleDelete = async (id) => {
    const res = await deleteUser(id)
    console.log(res)
    if (res.success) {
      toast.success(res.message);
      handleTagClick(currentPage)
    }
  }

  const handleClose = () => {
    setModalShow(false)
  }

  const handleInfoClose = () => {
    setModalInfoShow(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const isBanned = activeRef.current.checked ? false : true
    const role = selectedRole? selectedRole: users[selectedOfferId]?.role
    const body = {id: users[selectedOfferId]?._id, isBanned, role}
    const res = await updateUser(body)
    if (res.success) {
      toast.success(res.message);
      handleTagClick(currentPage)
    }
    setModalShow(false)
  }

  const handleOptionChange = (option) => {
    setSeletedRole(option)
  }

  const chnageUserInfo = () => {

  }

  const addOffer = (id) => {
    setModalOfferShow(true)
  }

  const handleOfferClose = () => {
    setModalOfferShow(false)
  }

  return (
    <>
      <div className="tabs -underline-2 js-tabs">
        {/* <div className="tabs__controls row x-gap-40 y-gap-10 lg:x-gap-20 js-tabs-controls">
          {tabItems.map((item, index) => (
            <div className="col-auto" key={index}>
              <button
                className={`tabs__button text-18 lg:text-16 text-light-1 fw-500 pb-5 lg:pb-0 js-tabs-button ${activeTab === index ? "is-tab-el-active" : ""
                  }`}
                onClick={() => handleTabClick(index)}
              >
                {item}
              </button>
            </div>
          ))}
        </div> */}
        {/* End tabs */}

        <div className="tabs__content pt-30 js-tabs-content">
          <div className="tabs__pane -tab-item-1 is-tab-el-active">
            <div className="overflow-scroll scroll-bar-1">
              <div className="d-flex justify-content-between">
                <div></div>
                <button
                  className="button h-50 px-24 -dark-1 bg-blue-1 text-white mb-10"
                  onClick={addOffer}
                >
                  <div className="icon-plus mr-15" /> Add 
                </button>
              </div>
              <table className="table-3 -border-bottom col-12">
                <thead className="bg-light-2">
                  <tr>
                    <th>ID</th>
                    <th>OFFER NAME</th>
                    <th>OFFER ID</th>
                    <th>AFFILIATE NAME</th>
                    <th>PAYOUT</th>
                    <th>CAP</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    offers.map(({ _id, offerName, offerID, affiliateName, payout, cap }, index) =>
                      <tr key={_id} onClick={() => showOfferInfo(index)} onMouseEnter={() => handleMouseEnter(_id)} id={_id}  style={{ backgroundColor: isHovered === _id ? 'lightblue' : 'white' }}>
                        <td></td>
                        <td>{offerName}</td>
                        <td>{offerID}</td>
                        <td>{affiliateName}</td>
                        <td>{payout}</td>
                        <td>{cap}</td>
                        <td onMouseEnter={() => setIsAction(true)} onMouseLeave={() => setIsAction(false)} > 
                          <ActionsButton onDelete={handleDelete} onUpdate={handleUpdate} id={_id} index={index}  />
                        </td>
                      </tr>
                    )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <Modal
        show={modalOfferShow}
        onHide={handleOfferClose}
        className="d-flex align-items-center justify-content-center"
        size='lg'
      >
        <Modal.Header
          closeButton
          style={{ borderBottom: "none" }}
        > <Modal.Title>Offer Info Edit</Modal.Title></Modal.Header>
        <Modal.Body>
          <OfferEditModal dataSource={offers[selectedOfferId]} closeModal={handleOfferClose} update={handleTagClick} current={currentPage} />
        </Modal.Body>

      </Modal>

      {/* <Modal
      
        show={modalShow}
        onHide={handleClose}
        className="d-flex align-items-center justify-content-center"
      >
        <Modal.Header
          closeButton
          style={{ borderBottom: "none" }}
        > <Modal.Title>Update</Modal.Title></Modal.Header>
        <Modal.Body>
          <div className="col-12 text-center mt-10">
            <form className="row y-gap-20 pt-20" onSubmit={handleSubmit}>
              <div className="col-12">
                <Image
                  src={users[selectedOfferId]?.avatar ? users[selectedOfferId]?.avatar : "/img/avatars/user_people_icon.svg"}
                  alt="Avatar Preview"
                  width={250}
                  height={250}
                  className="size-250 rounded-full object-cover"
                />
                <p className="text-20 mt-10 fw-600">{`${users[selectedOfferId]?.firstname} ${users[selectedOfferId]?.lastname}`}</p>
              </div>
              <div className="col-md-12 col-12 d-flex mt-20">
                <div className="col-md-6">
                  <label htmlFor="birthdate" className="form-label">
                    Role
                  </label>
                  <div className="border border-2 border-dark mr-10">
                    <Dropdown options={["admin", "user", "city owner", "business owner"]} originalOption = {users[selectedOfferId]?.role} handleOptionChange={handleOptionChange} />
                  </div>
                </div>
                <div className="col-md-6 pl-20">
                  <div className="col-md-4 col-4 ">
                    <label htmlFor="gender" className="form-label">
                      Status
                    </label>
                  </div>
                  <div className="col-md-8 col-8 pl-10">
                    <div className="form-radio d-flex flex-column align-items-start">
                      <div className="radio d-flex items-center ">
                        <input
                          type="radio"
                          name="rating"
                          value="active"
                          ref={activeRef}
                          defaultChecked={!users[selectedOfferId]?.isBanned}
                        />
                        <div className="radio__mark">
                          <div className="radio__icon" />
                        </div>
                        <div className="ml-10">
                          {" "}
                          <p>Active</p>
                        </div>
                      </div>
                      <div className="radio d-flex items-center">
                        <input
                          type="radio"
                          name="rating"
                          value="ban"
                          ref={banRef}
                          defaultChecked={users[selectedOfferId]?.isBanned}
                        />
                        <div className="radio__mark">
                          <div className="radio__icon" />
                        </div>
                        <div className="ml-10">
                          {" "}
                          <p className="">Banned</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 d-flex mt-30">
                <div className="col-6 pr-30">
                  <div className="col-md-12 col-12">
                    <button className="btn col-12 btn-danger">
                      Update
                    </button>
                  </div>
                </div>
                <div className="col-6 pl-30">
                  <div className="col-md-12 col-12">
                    <button className="btn col-12 btn-primary">
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </Modal.Body>

      </Modal>

      <Modal
        show={modalInfoShow}
        onHide={handleInfoClose}
        className="d-flex align-items-center justify-content-center"
        size='lg'
      >
        <Modal.Header
          closeButton
          style={{ borderBottom: "none" }}
        > <Modal.Title>User Information</Modal.Title></Modal.Header>
        <Modal.Body>
          <div className="col-12 text-center mt-10">
          <form>
        <div className="row y-gap-30 items-center">
          <div className="d-flex">
            <div className="d-flex ratio ratio-1:1 w-200 mr-20">
              <Image
                width={200}
                height={200}
                src={users[selectedOfferId]?.avatar ? users[selectedOfferId]?.avatar : "/img/avatars/user_people_icon.svg"}
                alt="avatar"
                className="img-ratio rounded-4"
              />
            </div>
            <div className="row x-gap-20 y-gap-20 text-left">
                <h4>
                  {users[selectedOfferId]?.username}
                </h4>
                <h5>
                  {users[selectedOfferId]?.email}
                </h5>
                <h5>
                  {users[selectedOfferId]?.role}
                </h5>
            </div>
        </div>

        <div className="border-top-light mt-30 mb-30" />

          

            <div className="col-md-6">
              <div className="form-input ">
                <input value={users[selectedOfferId]?.firstname} name="firstname" type="text" required />
                <label className="lh-1 text-16 text-light-1">First Name</label>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-input ">
                <input value={users[selectedOfferId]?.lastname} name="lastname" type="text" required />
                <label className="lh-1 text-16 text-light-1">Last Name</label>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-input ">
                <input value={users[selectedOfferId]?.phonenumber} name="phone_number" type="text" />
                <label className="lh-1 text-16 text-light-1">
                  Phone Number
                </label>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-input ">
                <input value={users[selectedOfferId]?.location} name="location" type="text" />
                <label className="lh-1 text-16 text-light-1">
                  Location
                </label>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-input ">
                <input value={users[selectedOfferId]?.birthday} name="birthday" type="text" />
                <label className="lh-1 text-16 text-light-1">
                  Birthday
                </label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-input ">
                <input value={users[selectedOfferId]?.gender} name="gender" type="text" />
                <label className="lh-1 text-16 text-light-1">
                  Gender
                </label>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-input ">
                <input value={users[selectedOfferId]?.facebook} name="facebook" type="text" />
                <label className="lh-1 text-16 text-light-1">facebook</label>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-input ">
                <input value={users[selectedOfferId]?.twitter} name="twitter" type="text" />
                <label className="lh-1 text-16 text-light-1">
                  Twitter
                </label>
              </div>
            </div>

          </div>
        <div className="d-inline-block pt-30">
          <button
            className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
            onClick={chnageUserInfo}
          >
            Chnage UserInfo <div className="icon-arrow-top-right ml-15" />
          </button>
        </div>
      </form >
          </div>
        </Modal.Body>

      </Modal> */}
      <Pagination currentPage={currentPage} handleTagClick={handleTagClick} totalPage={totalPage} />
      <ToastContainer />
    </>
  );
};



export default AffiliateTable;

