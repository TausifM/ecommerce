import React from 'react';
import Service01 from '../images/service_img1.png';
import Service02 from '../images/service_img2.png';
import Service03 from '../images/service_img3.png';
import Service04 from '../images/service_img4.png'

const Services = () => {
    return (
       <>
      <div className="services_main">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="titlepage">
                     <h2>Services</h2>
                     <span>It is a long established fact that a reader will be distracted by the readable content </span>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-sm-12">
                  <ul className="nav nav-tabs md-tabs border_none" id="myTabMD" role="tablist">
                     <li className="nav-item lisertab">
                        <a className="nav-link servi_tab active" id="home-tab-md" data-toggle="tab" href="#home-md" role="tab" aria-controls="home-md"
                           aria-selected="true">RESIDENTAL</a>
                     </li>
                     <li className="nav-item lisertab">
                        <a className="nav-link servi_tab" id="profile-tab-md" data-toggle="tab" href="#profile-md" role="tab" aria-controls="profile-md"
                           aria-selected="false">RETAIL DESIGN</a>
                     </li>
                     <li className="nav-item lisertab">
                        <a className="nav-link servi_tab" id="contact-tab-md" data-toggle="tab" href="#contact-md" role="tab" aria-controls="contact-md"
                           aria-selected="false">SPACE ADAPTATION</a>
                     </li>
                  </ul>
                  <div className="tab-content card back_bg" id="myTabContentMD">
                     <div className="tab-pane fade show active" id="home-md" role="tabpanel" aria-labelledby="home-tab-md">
                        <div className="row">
                           <div className="col-md-4 col-sm-6 padding_0 margin_right20">
                              <div className="services">
                                 <div className="services_img">
                                    <figure><img src={Service01} alt="Service01" />  </figure>
                                    <div className="ho_dist">
                                       <span>Reader will be distracted</span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-4 col-sm-6 padding_0 margin_top70p margin_right20 margin_left20">
                              <div className="services">
                                 <div className="services_img">
                                    <figure><img src={Service02} alt="2" />  </figure>
                                    <div className="ho_dist">
                                       <span>Reader will be distracted</span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-4 col-sm-6 padding_0 margin_left20">
                              <div className="services">
                                 <div className="services_img">
                                    <figure><img src={Service03} alt="3" />  </figure>
                                    <div className="ho_dist">
                                       <span>Reader will be distracted</span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-4 offset-md-8 col-sm-6 padding_0 margin_top170">
                              <div className="services margin_left60">
                                 <div className="services_img">
                                    <figure><img src={Service04} alt="4" />  </figure>
                                    <div className="ho_dist">
                                       <span>Reader will be distracted</span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-sm-6 margin_top40">
                              <a className="read_more " href="/">Read More</a>
                           </div>
                        </div>
                     </div>
                     <div className="tab-pane fade" id="profile-md" role="tabpanel" aria-labelledby="profile-tab-md">
                        <div className="row">
                           <div className="col-md-4 col-sm-6 padding_0 margin_right20">
                              <div className="services">
                                 <div className="services_img">
                                    <figure><img src={Service03} alt="3" />  </figure>
                                    <div className="ho_dist">
                                       <span>Reader will be distracted</span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-4 col-sm-6 padding_0 margin_top70p margin_right20 margin_left20">
                              <div className="services">
                                 <div className="services_img">
                                    <figure><img src={Service02} alt="2" />  </figure>
                                    <div className="ho_dist">
                                       <span>Reader will be distracted</span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-4 col-sm-6 padding_0 margin_left20">
                              <div className="services">
                                 <div className="services_img">
                                    <figure><img src={Service04} alt="4" />  </figure>
                                    <div className="ho_dist">
                                       <span>Reader will be distracted</span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-4 offset-md-8 col-sm-6 padding_0 margin_top170">
                              <div className="services margin_left60">
                                 <div className="services_img">
                                    <figure><img src={Service02} alt="2" />  </figure>
                                    <div className="ho_dist">
                                       <span>Reader will be distracted</span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-sm-6 margin_top40">
                              <a className="read_more " href="/">Read More</a>
                           </div>
                        </div>
                     </div>
                     <div className="tab-pane fade" id="contact-md" role="tabpanel" aria-labelledby="contact-tab-md">
                        <div className="row">
                           <div className="col-md-4 col-sm-6 padding_0 margin_right20">
                              <div className="services">
                                 <div className="services_img">
                                    <figure><img src={Service03} alt="3" />  </figure>
                                    <div className="ho_dist">
                                       <span>Reader will be distracted</span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-4 col-sm-6 padding_0 margin_top70p margin_right20 margin_left20">
                              <div className="services">
                                 <div className="services_img">
                                    <figure><img src={Service02} alt="#" />  </figure>
                                    <div className="ho_dist">
                                       <span>Reader will be distracted</span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-4 col-sm-6 padding_0 margin_left20">
                              <div className="services">
                                 <div className="services_img">
                                    <figure><img src={Service01} alt="1" />  </figure>
                                    <div className="ho_dist">
                                       <span>Reader will be distracted</span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-4 offset-md-8 col-sm-6 padding_0 margin_top170">
                              <div className="services margin_left60">
                                 <div className="services_img">
                                    <figure><img src={Service03} alt="3" />  </figure>
                                    <div className="ho_dist">
                                       <span>Reader will be distracted</span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-sm-6 margin_top40">
                              <a className="read_more " href="/">Read More</a>
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

export default Services;
