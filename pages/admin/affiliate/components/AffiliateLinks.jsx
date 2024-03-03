import React, { useState, useRef, useEffect } from "react";
import { makeLink, addOfferLink, addUnsubedLink, addPriLink, addConditionLink, addTelLink,  } from "../../../../services/affiliate/offer";
import { ToastContainer, toast } from "react-toastify";
import { getOffers } from "../../../../services/affiliate/offer";

const AffiliateLinks = (props) => {
  const offer = props.dataSource
  
  const addOffLink = async (e) => {
    e.preventDefault()
      const formData = {
        id: offer._id,
        offLink: e.target.value
      }
  
      if (offer) {
        const res = await addOfferLink({formData})
        if (res.success) {
          toast.success(res.message);
          props.update(props.current)
        }
      }
  }

  const addUnsubLink = async (e) => {
    e.preventDefault()
      const formData = {
        id: offer._id,
        unsubLink: e.target.value
      }
  
      if (offer) {
        const res = await addUnsubedLink({formData})
        if (res.success) {
          toast.success(res.message);
          props.update(props.current)
        }
      }
  }

  const addPrivacyLink = async (e) => {
    e.preventDefault()
      const formData = {
        id: offer._id,
        privacyLink: e.target.value
      }
  
      if (offer) {
        const res = await addPriLink({formData})
        if (res.success) {
          toast.success(res.message);
          props.update(props.current)
        }
      }
  }

  const addCondLink = async (e) => {
    e.preventDefault()
      const formData = {
        id: offer._id,
        condLink: e.target.value
      }
  
      if (offer) {
        const res = await addConditionLink({formData})
        if (res.success) {
          toast.success(res.message);
          props.update(props.current)
        }
      }
  }

  const addTelephoneLink = async (e) => {
    e.preventDefault()
      const formData = {
        id: offer._id,
        telLink: e.target.value
      }
  
      if (offer) {
        const res = await addTelLink({formData})
        if (res.success) {
          toast.success(res.message);
          props.update(props.current)
        }
      }
  }

  return (
    <div className="col-12 text-center mt-10">
      <form>
        <div className="row y-gap-30">
          
              <div className="col-md-6">
                <div className="form-input">
                  <input type="text" onChange={addOffLink} required />
                  <label className="lh-1 text-16 text-light-1">Insert Offer Link</label>
                </div>
                <div className="">
                  {offer.offLinks?.split(",").slice(1, 100).map((link, i) => (
                    <div key={i}>{link}</div>
                  ))}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-input">
                  <input type="text" onChange={addUnsubLink} required />
                  <label className="lh-1 text-16 text-light-1">Insert Unsub Link</label>
                </div>
                <div className="">
                  {offer.unsubLinks?.split(",").slice(1, 100).map((link, i) => (
                    <div key={i}>{link}</div>
                  ))}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-input">
                  <input type="text" onChange={addPrivacyLink} required />
                  <label className="lh-1 text-16 text-light-1">Insert Privacy Link</label>
                </div>
                <div className="">
                  {offer.privacyLinks?.split(",").slice(1, 100).map((link, i) => (
                    <div key={i}>{link}</div>
                  ))}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-input">
                  <input type="text" onChange={addCondLink} required />
                  <label className="lh-1 text-16 text-light-1">Insert Condition Link</label>
                </div>
                <div className="">
                  {offer.condLinks?.split(",").slice(1, 100).map((link, i) => (
                    <div key={i}>{link}</div>
                  ))}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-input">
                  <input type="text" onChange={addTelephoneLink} required />
                  <label className="lh-1 text-16 text-light-1">Insert Telephone Link</label>
                </div>
                <div className="">
                  {offer.telephoneLinks?.split(",").slice(1, 100).map((link, i) => (
                    <div key={i}>{link}</div>
                  ))}
                </div>
              </div>
            </div>
          </form >
          <ToastContainer />
          </div>
  );
};

export default AffiliateLinks;
