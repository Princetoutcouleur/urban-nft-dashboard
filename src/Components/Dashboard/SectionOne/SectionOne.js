import React from 'react'
import './SectionOne.css'
import { ArrowLeft } from 'react-bootstrap-icons'
import { ArrowRight } from 'react-bootstrap-icons'
import BannerImg from "../../../Images/image.png";
import Group17 from '../../../Images/Group17.png'
import Group18 from '../../../Images/Group18.png'
import Group19 from '../../../Images/Group19.png'
import Group20 from '../../../Images/Group20.png'
import Group21 from '../../../Images/Group21.png'
import Group22 from '../../../Images/Group22.png'


function SectionOne() {
    return (
      <>
        <div className="container">
          <div className="row bg-white rounded-4 p-3">
            <div className="d-flex justify-content-end mb-3">
              <ArrowLeft className="text-warning me-3" />
              <ArrowRight className="text-warning" />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <h5 className="text-warning fw-bold mb-4">
                Create Metroverse Genesis
              </h5>
              <p className="mb-4">
                physical claim for issue #1 now live. Please check <br />
                that the token is available for claim via website
              </p>
              <button
                type="button"
                class="btn btn-warning px-3 text-light rounded-pill mb-4"
              >
                Explorer Now
              </button>
              <table class="table table-bordered border-warning">
                <thead>
                  <tr>
                    <th scope="col" className=" text-center text-warning">
                      24,8K
                    </th>
                    <th scope="col" className=" text-center text-warning">
                      4,1K
                    </th>
                    <th scope="col" className=" text-center text-warning">
                      0.221
                    </th>
                    <th scope="col" className=" text-center text-warning">
                      43.1k
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className=" text-center">Items</td>
                    <td className=" text-center">Owners</td>
                    <td className=" text-center">Floor Price</td>
                    <td className=" text-center">Volum Traded</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <img src={BannerImg} className='img-fluid'/>
            </div>
          </div>
        </div>
        <div className="container collections">
          <div className="container-fluid pt-5">
            <div className="d-flex justify-content-between">
              <p className="text-lead fs-4">Top Collections</p>
              <button
                type="button"
                class="btn btn-link text-decoration-none text-dark"
              >
                View All <ArrowRight />
              </button>
            </div>
          </div>
          <div className="row my-3">
            <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
              <img src={Group17} className="container-fluid" />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
              <img src={Group18} className="container-fluid" />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
              <img src={Group19} className="container-fluid" />
            </div>
          </div>
          <div className="container-fluid pt-5">
            <div className="d-flex justify-content-between">
              <p className="text-lead fs-4">Trading NFTs</p>
              <button
                type="button"
                class="btn btn-link text-decoration-none text-dark"
              >
                Marketplace <ArrowRight />
              </button>
            </div>
          </div>
          <div className="row my-3">
            <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
              <img src={Group20} className="container-fluid" />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
              <img src={Group21} className="container-fluid" />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
              <img src={Group22} className="container-fluid" />
            </div>
          </div>
        </div>
      </>
    );
}

export default SectionOne