import React from 'react'
import './Home.css'
import NavBar from "../Navbar/Navbar"
import SideBar from "../Sidebar/Sidebar"
import SectionOne from "../Dashboard/SectionOne/SectionOne"
import SectionTwo from "../Dashboard/SectionTwo/SectionTwo"


function Home() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 min-vh-100 bg-white">
            <SideBar />
          </div>
          <div className="col-10 fead">
            <div className="row ">
              <NavBar />
              <div className="col-lg-8 col-md-8 col-sm-12 min-vh-100 ">
                <SectionOne />
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <SectionTwo />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Home