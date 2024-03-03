import React, { useState, useRef, useEffect } from "react";
import { addSub, addName } from "../../../../services/affiliate/offer";
import { ToastContainer, toast } from "react-toastify";

const SubAndFrom = (props) => {
  const offer = props.dataSource
  
  const addSubject = async (e) => {
    e.preventDefault()
      const formData = {
        id: offer._id,
        subject: e.target.value
      }
  
      if (offer) {
        const res = await addSub({formData})
        if (res.success) {
          toast.success(res.message);
          props.update(props.current)
        }
      }
  }

  const addFrom = async (e) => {
    e.preventDefault()
      const formData = {
        id: offer._id,
        fromName: e.target.value
      }
  
      if (offer) {
        const res = await addName({formData})
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
              <input type="text" onChange={addSubject} required />
              <label className="lh-1 text-16 text-light-1">Insert Subject</label>
            </div>
            <div className="">
              {offer.subjects?.split(",").slice(1, 100).map((link, i) => (
                <div key={i}>{link}</div>
              ))}
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-input">
              <input type="text" onChange={addFrom} required />
              <label className="lh-1 text-16 text-light-1">Insert From Name</label>
            </div>
            <div className="">
              {offer.fromNames?.split(",").slice(1, 100).map((link, i) => (
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

export default SubAndFrom;
