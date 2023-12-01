import { Link } from "react-router-dom";
import FadeIn from "react-fade-in";

export default function Albums () {

    return (
        <div>
            <h1>ALBUMS</h1>
            <FadeIn delay="20" transitionDuration="600">
                <div className="pt-3 pb-5">
                    <div>
                        <h3>Style</h3>
                        <Link to="/albums/Business"><h5>Business</h5></Link>
                        <Link to="/albums/Casual"><h5>Casual</h5></Link>
                    </div>
                    <div className="pt-4">
                        <h3>Seasons</h3>
                        <Link to="/albums/Spring"><h5>Spring</h5></Link>
                        <Link to="/albums/Summer"><h5>Summer</h5></Link>
                        <Link to="/albums/Fall"><h5>Fall</h5></Link>
                        <Link to="/albums/Winter"><h5>Winter</h5></Link>
                    </div>
                </div>
            </FadeIn>
        </div>
    )
}