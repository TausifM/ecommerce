import React from 'react';
import PointShape03 from '../img/shapes/points3.png';
import BlogImage01 from '../img/blog1.png';
import BlogImage02 from '../img/blog2.png';
import BlogImage03 from '../img/blog3.png';

const Blog = () => {
    return (
        <div>
             <section class="blog section">
                    <div class="container">
                    <div class="section-header">
                        <h3 class="title" data-title="Last News">My blog</h3>
                        <p class="text">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo,
                        deserunt?
                        </p>
                    </div>

                    <div class="blog-wrapper">
                        <div class="blog-wrap">
                        <img
                            src={PointShape03}
                            alt=""
                            class="points points-sq"
                        />

                        <div class="blog-card">
                            <div class="blog-image">
                            <img src={BlogImage01} alt="" />
                            </div>

                            <div class="blog-content">
                            <div class="blog-info">
                                <h5 class="blog-date">March, 19 2020</h5>
                                <h5 class="blog-user"><i class="fas fa-user"></i>Admin</h5>
                            </div>
                            <h3 class="title-sm">This is a short title</h3>
                            <p class="blog-text">
                                Lorem ipsum, dolor sit amet elit. rem poimus? Tempora
                                expedita eos autem! Lorem ipsum, dolor sit met.
                            </p>
                            <a href="#/" class="btn small">Read more</a>
                            </div>
                        </div>
                        </div>

                        <div class="blog-wrap">
                        <div class="blog-card">
                            <div class="blog-image">
                            <img src={BlogImage02} alt="" />
                            </div>

                            <div class="blog-content">
                            <div class="blog-info">
                                <h5 class="blog-date">August, 02 2020</h5>
                                <h5 class="blog-user"><i class="fas fa-user"></i>Admin</h5>
                            </div>
                            <h3 class="title-sm">This is a short title</h3>
                            <p class="blog-text">
                                Lorem ipsum, dolor sit amet elit. Sint atque culpa repellat
                                sunt sit amet nobis! Lorem ipsum dolor sit amet.
                            </p>
                            <a href="#/" class="btn small">Read more</a>
                            </div>
                        </div>
                        </div>

                        <div class="blog-wrap">
                        <div class="blog-card">
                            <div class="blog-image">
                            <img src={BlogImage03} alt="" />
                            </div>

                            <div class="blog-content">
                            <div class="blog-info">
                                <h5 class="blog-date">December, 12 2020</h5>
                                <h5 class="blog-user"><i class="fas fa-user"></i>Admin</h5>
                            </div>
                            <h3 class="title-sm">This is a short title</h3>
                            <p class="blog-text">
                                Lorem ipsum dolor sit, amet elit. enim numquam, laborum
                                earum? Lorem ipsum dolor sit amet.
                            </p>
                            <a href="#/" class="btn small">Read more</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>

        </div>
    )
}

export default Blog
