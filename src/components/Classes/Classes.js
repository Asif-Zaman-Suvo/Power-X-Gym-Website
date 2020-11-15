import React from 'react';
import "./Classes.scss";
import ClassesData from './ClassesData';
import Footer from '../Footer/Footer';

let classesData = [


    {
        name: "PSYCHO TRAINING",

        description: "It isn't bad to work out every day. Doing some form of physical activity each day is smart when you're trying to slim down. But if you want to lose weight, repeating the same workout mode, intensity, or duration day after day won't work.",

        img: "https://i.ibb.co/Zm5mTjg/Psycho-Training.png"

    },

    {
        name: "SELF DEFENCE",

        description: "Self-defense is highly crucial in danger and intimidating situations to avoid you from being shaken and froze. It gives you confidence and knowledge to back yourself in an unfavorable scenario.",

        img: "https://i.ibb.co/xMrpT53/Self-Defence.jpg"
    },

    {
        name: "ADVANCE GYM",

        description: "Weight Training Workouts: Advanced. It is assumed that anyone that is beginning an advanced weight training program has been lifting weights for at least one year. The intent of the advanced weight training program is to continue to build lean muscle mass and to develop muscular definition.",

        img: "https://i.ibb.co/XD0hpHY/Advance-Gym.jpg",
    },

    {
        name: "CARDIO TRAINING",

        description: "Low-intensity cardio workouts are great for beginners who may not be comfortable breaking an intense sweat every time they hit the gym. Exercises like walking and stationary cycling are easy on your joints and approachable for first-time gym goers",

        img: "https://i.ibb.co/wRjT9TN/Cardio-Training.jpg"

    },

    {
        name: "STRENGTH TRAINING",

        description: "Every time you perform a strength exercise, you create microscopic tears in the muscles you've worked. ... On the flip side, if you tax the same muscles every day, you aren't them the time they need to actually become stronger, she says. Instead, you'll risk overtraining and lackluster results.",

        img: "https://i.ibb.co/27RF3Mz/Strength-Training.jpg"
    },

    {
        name: "PSYCHO TRAINING PRO",

        description: "It isn't bad to work out every day. Doing some form of physical activity each day is smart when you're trying to slim down. But if you want to lose weight, repeating the same workout mode, intensity, or duration day after day won't work.",

        img: "https://i.ibb.co/M8TN8NT/Psycho-Training-Pro.jpg"

    },


]


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