import { Link } from "react-router-dom";

export default function Albums () {

    return (
        <div>
            <h1>ALBUMS</h1>
            <div className="filler">
                <div>
                    <h3>Style</h3>
                    <Link to="/albums/business"><h5>Business</h5></Link>
                    <Link to="/albums/casual"><h5>Casual</h5></Link>
                </div>
                <div>
                    <h3>Seasons</h3>
                    <Link to="/albums/spring"><h5>Spring</h5></Link>
                    <Link to="/albums/summer"><h5>Summer</h5></Link>
                    <Link to="/albums/fall"><h5>Fall</h5></Link>
                    <Link to="/albums/winter"><h5>Winter</h5></Link>
                </div>
            </div>
        </div>
    )
}