import React from 'react';
import TestimonialImage from '../img/testi.png';

const Testimonials = () => {
    return (
    <div>      
      <section className="testimonials section" id="testimonials">
        <div className="container">
          <div className="section-header">
            <h3 className="title" data-title="What People Say">Testimonials</h3>
          </div>

           <div className="testi-content grid-2">
            <div className="column-1 reviews">
              <div className="swiper-container">
                <div className="swiper-wrapper">
                  <div className="swiper-slide review">
                    <i className="fas fa-quote-left quote"></i>
                    <div className="rate">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>

                    <p className="review-text">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Laudantium adipisci veniam debitis quas, sapiente
                      repellendus mollitia. Laboriosam labore voluptate quos?
                    </p>

                    <div className="review-info">
                      <h3 className="review-name">Matias Butt</h3>
                      <h5 className="review-job">Photographer, Paris</h5>
                    </div>
                  </div>

                  <div className="swiper-slide review">
                    <i className="fas fa-quote-left quote"></i>
                    <div className="rate">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>

                    <p className="review-text">
                    “You took a genuine interest in my goals to help people, 
                    and worked with me, and develop my website as per my requirements,
                    that I was unable to articulate on my own.”
                    </p>

                    <div className="review-info">
                      <h3 className="review-name">Dilip Bawankar</h3>
                      <h5 className="review-job">Founder Themb Founation</h5>
                    </div>
                  </div>

                  <div className="swiper-slide review">
                    <i className="fas fa-quote-left quote"></i>
                    <div className="rate">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>

                    <p className="review-text">
                    “Tausif, understand my requirements, which I want to have to make in my website. 
                    He also added some other features in my website which makes my website into NEXT level.” 
                    </p>

                    <div className="review-info">
                      <h3 className="review-name">Dnyandev Jagtap</h3>
                      <h5 className="review-job">Founder PBS Infotech</h5>
                    </div>
                  </div>

                  <div className="swiper-slide review">
                    <i className="fas fa-quote-left quote"></i>
                    <div className="rate">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>

                    <p className="review-text">
                      
                    </p>
                    “Tausif takes care of your website so you can focus on what you do best.
                    he’s trusted, reliable, and a joy to work with!”

                    <div className="review-info">
                      <h3 className="review-name">Vinesh Kakde</h3>
                      <h5 className="review-job">Founder of VSPC, CSR Fund Raiser, 
                      Freelancer, Social Activist</h5>
                    </div>
                  </div>
                </div>

                <div className="review-nav swiper-button-prev">
                  <i className="fas fa-long-arrow-alt-left"></i>
                </div>
                <div className="review-nav swiper-button-next">
                  <i className="fas fa-long-arrow-alt-right"></i>
                </div>
              </div>
            </div>

            <div className="column-2 image">
              <img src={TestimonialImage} alt="" className="img-element" />
            </div>
          </div>
        </div>
      </section>
    </div>
    )
}

export default Testimonials
