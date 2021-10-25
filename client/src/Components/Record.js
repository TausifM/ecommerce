import React from 'react';
import SquareShape from '../img/shapes/square.png';
import CircleShape from '../img/shapes/circle.png';
import HalfCircleShape from '../img/shapes/half-circle.png';
import XShape from '../img/shapes/x.png';
import WaveShape from '../img/shapes/wave.png';
import TriangleShape from '../img/shapes/triangle.png';

const Record = () => {
    return (
        <div>
            <section class="records">
                <div class="overlay overlay-sm">
                <img src={SquareShape} alt="" class="shape square1" />
                <img src={SquareShape} alt="" class="shape square2" />
                <img src={CircleShape} alt="" class="shape circle" />
                <img src={HalfCircleShape} alt=""class="shape half-circle"
                />
                <img src={WaveShape} alt="" class="shape wave wave1" />
                <img src={WaveShape} alt="" class="shape wave wave2" />
                <img src={XShape} alt="" class="shape xshape" />
                <img src={TriangleShape} alt="" class="shape triangle" />
                </div>

                <div class="container">
                <div class="wrap">
                    <div class="record-circle">
                    <h2 class="number" data-num="235">0</h2>
                    <h4 class="sub-title">Projects</h4>
                    </div>
                </div>

                <div class="wrap">
                    <div class="record-circle active">
                    <h2 class="number" data-num="174">0</h2>
                    <h4 class="sub-title">Happy Clients</h4>
                    </div>
                </div>

                <div class="wrap">
                    <div class="record-circle">
                    <h2 class="number" data-num="892">0</h2>
                    <h4 class="sub-title">Work Hour</h4>
                    </div>
                </div>

                <div class="wrap">
                    <div class="record-circle">
                    <h2 class="number" data-num="368">0</h2>
                    <h4 class="sub-title">Awards</h4>
                    </div>
                </div>
                </div>
            </section>

        </div>
    )
}

export default Record
