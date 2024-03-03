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
      <table className="table-3 -border-bottom col-12 line" >
        <tr >
          <td className="col-2 alignText-center">Offer Links</td>
          <td>
            <div className="alignText-center">
              {offer.offLinks?.split(",").slice(1, 100).map((link, i) => (
                <div key={i}>{link}</div>
              ))}
            </div>
          </td>
        </tr>
        <tr >
          <td className="col-2 alignText-center">Unsub Links</td>
          <td>
            <div className="alignText-center">
              {offer.unsubLinks?.split(",").slice(1, 100).map((link, i) => (
                <div key={i}>{link}</div>
              ))}
            </div>
          </td>
        </tr>
        <tr >
          <td className="col-2 alignText-center">Privacy Links</td>
          <td>
            <div className="alignText-center">
              {offer.privacyLinks?.split(",").slice(1, 100).map((link, i) => (
                <div key={i}>{link}</div>
              ))}
            </div>
          </td>
        </tr>
        <tr >
          <td className="col-2 alignText-center">Condition Links</td>
          <td>
            <div className="alignText-center">
              {offer.condLinks?.split(",").slice(1, 100).map((link, i) => (
                <div key={i}>{link}</div>
              ))}
            </div>
          </td>
        </tr>
        <tr >
          <td className="col-2 alignText-center">Telephone Links</td>
          <td>
            <div className="alignText-center">
              {offer.telLinks?.split(",").slice(1, 100).map((link, i) => (
                <div key={i}>{link}</div>
              ))}
            </div>
          </td>
        </tr>
      </table>
      
      <ToastContainer />
      </div>
  );
};

export default AffiliateLinks;
