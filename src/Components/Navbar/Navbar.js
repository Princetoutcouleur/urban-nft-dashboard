import React from 'react'
import { BsSearch, BsSliders, BsFillBellFill, BsFillFilterCircleFill } from "react-icons/bs";
import avatar from "../../Images/avatar.png"
import './Navbar.css'


function Navbar() {
    return (
      <>
        <nav class="navbar">
          <div class="container-fluid ">
            <form className="navForm">
              <div class="input-group">
                <span
                  class="input-group-text bg-white rounded-start-4"
                  id="basic-addon1"
                >
                  <BsSearch />
                </span>
                <input
                  type="text"
                  class="form-control "
                  placeholder="Search..."
                />
                <span
                  class="input-group-text rounded-end-4 bg-white"
                  id="basic-addon1"
                >
                  <BsSliders />
                </span>
              </div>
            </form>
            <ul class="ms-auto list-unstyled  d-flex align-items-center navList">
              <li>
                <a href="/">
                  <BsFillBellFill className="fs-4 text-warning" />
                </a>
              </li>
              <li>
                <a href="/">
                  <BsFillFilterCircleFill className="fs-4 text-warning" />
                </a>
              </li>
              <li>
                <div className="d-flex align-items-center">
                  <img src={avatar} class="rounded-4 " alt="" width="50" />
                  <p className="d-none d-sm-inline">
                    <br />
                    <span>Baba Thiam</span>
                    <br />
                    <span>babathiam0000@gmail.com</span>
                  </p>
                  <div class="dropdown d-lg-none d-md-none">
                    <a
                      class="btn dropdown-toggle fs-4"
                      href="/"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    ></a>

                    <ul class="dropdown-menu dropdown-menu-end">
                      <li>
                        <a class="dropdown-item" href="/">
                          Baba Thiam
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/">
                          babathiam0000@gmail
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
}

export default Navbar