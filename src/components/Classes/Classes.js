import React from 'react';
import "./Classes.scss";
import ClassesData from './ClassesData';
import Footer from '../Footer/Footer';
import fakeData from './fakeData';

const classesData=fakeData;



const Classes = () => {
    return (
        <section>
            <div className="jumbotron jumbotron2-height">

                <nav className="navbar navbar-expand-lg navbar-dark bg-color">
                    <div className="container">
                        <a className="navbar-brand text-white" href="/">POWER <span className="logoX">X</span></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/home">Home<span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/services">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/ourClasses">Our Classes</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/aboutUs">About Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/blog">Blog</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/pricing">Pricing</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/contactUs">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className="container d-flex align-items-center justify-content-center  text-white intro-Style">
                <h1 className='ourClasses'>OUR CLASSES</h1>
                </div>
            </div>





            <div className="container">
                <div className="row mb-5 mt-5">



                    {
                        classesData.map(info => <ClassesData info={info}></ClassesData>)
                    }


                </div>


            </div>
            <Footer></Footer>
        </section>
    );
};

export default Classes;