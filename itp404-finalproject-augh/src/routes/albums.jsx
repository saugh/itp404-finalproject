import { Link } from "react-router-dom";
import FadeIn from "react-fade-in";
import { useEffect } from "react";

export default function Albums () {
    useEffect(() =>{
        document.title = "aesth | Albums";
    }, []);
    return (
        <div className="page space">
            <h1>ALBUMS</h1>
            <FadeIn delay="20" transitionDuration="600">
                <div className="pt-3 pb-5">
                    <div className="pt-4">
                        <h3>Seasons</h3>
                        <Link to="/albums/1"><h5>Spring</h5></Link>
                        <Link to="/albums/2"><h5>Summer</h5></Link>
                        <Link to="/albums/3"><h5>Fall</h5></Link>
                        <Link to="/albums/4"><h5>Winter</h5></Link>
                    </div>
                    <div className="pt-5">
                        <h2><em>Coming Soon...</em></h2>
                        <h3>Style</h3>
                        <h5>Business</h5>
                        <h5>Casual</h5>
                    </div>
                </div>
            </FadeIn>
        </div>
    )
}