import React from 'react'
import './SectionTwo.css'
import CardImg1 from "../../../Images/CardImg1.png";
import CardImg2 from "../../../Images/CardImg2.png";
import CardImg3 from "../../../Images/CardImg3.png";
import Rectangle39 from "../../../Images/Rectangle39.png";
import Rectangle40 from "../../../Images/Rectangle40.png";
import Rectangle41 from "../../../Images/Rectangle41.png";
import { Heart } from 'react-bootstrap-icons';
import { Collection } from 'react-bootstrap-icons';
import badge from "../../../Images/badge.png";

function SectionTwo() {
    return (
      <>
        <h4>New NFTs</h4>
        <div className="card rounded-4 mb-3">
          <div className="card-body d-flex">
            <div className="me-3">
              <img src={CardImg1} alt="img" width={80} />
            </div>
            <div>
              <p style={{ fontSize: "10px" }}>Metroverse Genesis</p>
              <p className="fw-bold">Block #1460</p>
              <p style={{ fontSize: "10px" }}>
                Owned by <span className="text-warning">BabyKee</span>
              </p>
              <div className="w-100 d-flex justify-content-between">
                <p className="me-5">
                  <Heart /> 1K
                </p>
                <p className="ms-auto">
                  <Collection /> 1K
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card rounded-4 mb-3">
          <div className="card-body d-flex">
            <div className="me-3">
              <img src={CardImg2} alt="img" width={80} />
            </div>
            <div>
              <p style={{ fontSize: "10px" }}>Metroverse Genesis</p>
              <p className="fw-bold">Block #1460</p>
              <p style={{ fontSize: "10px" }}>
                Owned by <span className="text-warning">BabyKee</span>
              </p>
              <div className="w-100 d-flex justify-content-between">
                <p className="me-5">
                  <Heart /> 1K
                </p>
                <p className="ms-auto">
                  <Collection /> 1K
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card rounded-4 mb-3">
          <div className="card-body d-flex">
            <div className="me-3">
              <img src={CardImg3} alt="img" width={80} />
            </div>
            <div>
              <p style={{ fontSize: "10px" }}>Metroverse Genesis</p>
              <p className="fw-bold">Block #1460</p>
              <p style={{ fontSize: "10px" }}>
                Owned by <span className="text-warning">BabyKee</span>
              </p>
              <div className="w-100 d-flex justify-content-between">
                <p className="me-5">
                  <Heart /> 1K
                </p>
                <p className="ms-auto">
                  <Collection /> 1K
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-4 p-3 my-5">
          <div className="d-flex justify-content-between align-items-baseline">
            <p>History</p>
            <select
              class="form-select w-50"
              aria-label="Default select example"
            >
              <option selected>Last month</option>
              <option value="1">Last week</option>
              <option value="2">Last day</option>
            </select>
          </div>
          <div className="bg-white rounded-4 d-flex p-2">
            <div>
              <img src={Rectangle39} alt="" className="img-fluid" />
            </div>
            <div className="p-2 w-75">
              <p className="fw-bold">Cet #6882</p>
              <div className="d-flex justify-content-between">
                <h6 className="">Cets on Creck </h6>

                <p className=""><img src={badge} alt="" /> 250{" "}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-4 d-flex p-2">
            <div>
              <img src={Rectangle40} alt="" className="img-fluid" />
            </div>
            <div className="p-2 w-75">
              <p className="fw-bold">Cet #6882</p>
              <div className="d-flex justify-content-between">
                <h6 className="">Cets on Creck </h6>
                <p className=""> <img src={badge} alt="" /> 38{" "}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-4 d-flex p-2 mb-5">
            <div>
              <img src={Rectangle41} alt="" className="img-fluid" />
            </div>
            <div className="p-2 w-75">
              <p className="fw-bold">Cet #6882</p>
              <div className="d-flex justify-content-between">
                <h6 className="">Cets on Creck </h6>

                <p className=""> <img src={badge} alt="" /> 15{" "}</p>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <button
              type="button"
              class="btn btn-warning text-white justify-content-center w-100 rounded-pill"
            >
              Show All
            </button>
          </div>
        </div>
      </>
    );
}

export default SectionTwo