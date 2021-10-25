import React from 'react'
import { Link } from 'react-router-dom';
import AboutImg from '../images/about_img.png'

function AboutUS() {
    return (
        <>
      <div id="about" className="about top_layer">
         <div className="container">
            <div className="row">
               <div className="col-sm-12">
                  <div className="titlepage">
                     <h2>About us</h2>
                     <p>It is a long established fact that a reader will be distracted by the readable content </p>
                  </div>
               </div>
               <div className=" col-sm-12">
                  <div className="about_box">
                     <div className="row d_flex">
                        <div className="col-md-5">
                           <div className="about_box_text">
                              <h3>Best INTERIOR Design</h3>
                              <p>There are many variations of passages of 
                                 Lorem Ipsum available, but the majority 
                                 have suffered alteration in some 
                                 form, by injected humour,There are many 
                                 variations of passages of 
                              </p>
                              <Link className="read_more" to="/">Read More</Link>
                           </div>
                        </div>
                        <div className=" col-md-7  pppp">
                           <div className="about_box_img">
                              <figure><img src={AboutImg} alt="#" /></figure>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
        </>
    )
}

export default AboutUS
