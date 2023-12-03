import { Link } from "react-router-dom";
import FadeIn from "react-fade-in";
import { useEffect } from "react";

export default function Index () {
    useEffect(() =>{
        document.title = "aesth | Home";
    }, []);
    return (
        <div className="container homepage page space">
            <div className="row">
                <div className="col-6" id="opening-text"> 
                    <FadeIn delay="100" transitionDuration="1800">
                        <h1><strong>aesth</strong> FASHION LOG</h1>
                        <h4 className="pb-0">Your fashion <em>safe space.</em></h4>
                        <h5 className="pt-1">Compile and organize your outfits here.</h5>
                        <div>
                            <Link to="/outfits"><button type="button" className="btn hm-outfits-btn">My outfits</button></Link>
                            <Link to="/addOutfit"><button type="button" className="btn ms-3 hm-add-outfit-btn">Add an outfit</button></Link>
                        </div>
                    </FadeIn>
                </div>
                <div className="col-6" id="opening-img">
                    <FadeIn delay="100" transitionDuration="1800">
                        <img id="homepage-main-img" src="https://img.freepik.com/premium-photo/women-s-aesthetic-minimal-fashion-pastel-clothes-made-washed-linen-stylish-female-blouses-dresses-pants-shirts-hanger-white-background-fashion-blog-website-social-media_408798-9507.jpg" alt="clothing rack"/>
                    </FadeIn>
                </div>
                {/* <div className="filler"></div> */}
            </div>
        </div>
    )
}