import React, { Component } from 'react';
import img1 from '../slide1.jpg';
import img2 from '../slide2.jpg';
import img3 from '../slide3.jpg';
import img5 from '../image2.jpg';
import img6 from '../image3.jpg';
import '../App.css';
class Home extends Component {
    render() {
        return (
            <div>
                <div id="carouselExampleInterval" className="carousel slide py-4 my-2 mb-4 px-5" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item " data-interval="2000">
                            <img src={img1} className="d-block w-100" alt="" />
                        </div>
                        <div className="carousel-item" data-interval="2000">
                            <img src={img2} className="d-block w-100" alt="" />
                        </div>
                        <div className="carousel-item" data-interval="2000">
                            <img src={img3} className="d-block w-100" alt="" />
                        </div>
                        <div className="carousel-item" data-interval="2000">
                            <img src={img5} className="d-block w-100" alt="" />
                        </div>
                        <div className="carousel-item active" data-interval="2000">
                            <img src={img6} className="d-block w-100" alt="" />
                        </div>
                        <div className="carousel-caption d-none d-md-block">
                            <h1 className=" display-4 bg-light font-weight-bold text-dark">Let deliciousness twirl in your mouth.</h1>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        );
    }
}

export default Home;
