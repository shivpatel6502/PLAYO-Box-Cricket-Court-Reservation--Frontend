import React from 'react'
import vg from "../assets/cricket_2.svg"
import fi from "../assets/ballimg1.png"
import {AiFillGoogleCircle, AiFillYoutube, AiFillInstagram} from "react-icons/ai"

const Home = () => {
    return (
        <>
            <div className="home" id="home" >
                <main>
                <img src={fi} alt="" />
                <div>
                    <h1>Crickies</h1>
                    <p>Learn. Book. Play.</p>
                </div>
                </main>
            </div>

            <div className="home2">

                <div>
                    <p>
                        We are here with a bang!
                        Play the game by booking at the fingertips at you favourite place.
                    </p>
                </div>
                <img src={vg} alt="Graphics" />
            </div>

            <div className="home3">
                <div>
                    <h1>Who we are?</h1>
                    <p>We are one of the firms that brings and provides best and feasible solutions and develops large projects while matching the demands of customer.</p>
                </div>
            </div>

            <div className="home4">
                <div>
                    <h1>Social</h1>
                    <article>

                        <div 
                        style={{
                            animationDelay: "0.3s",
                        }} >
                            <AiFillGoogleCircle />
                            <p>Google</p>
                        </div>

                        <div 
                        style={{
                            animationDelay: "0.5s",
                        }} >
                            <AiFillYoutube />
                            <p>YouTube</p>
                        </div>
                        
                        <div 
                        style={{
                            animationDelay: "0.7s",
                        }} >
                            <AiFillInstagram />
                            <p>Instagram</p>
                        </div>

                    </article>
                </div>
            </div>
        </>
    )
}

export default Home