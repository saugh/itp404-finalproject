import { Link, useLoaderData } from "react-router-dom"
import FadeIn from "react-fade-in";

export default function Outfits () {
    const outfits = useLoaderData();

    return (
        <div id="outfits-page">
            <FadeIn delay="10" transitionDuration="600">
            <div className="outfits-page-top">
                <h1>OUTFITS</h1>
                <Link to="/addOutfit" className="ms-3 float-end"><button type="button" className="btn hm-outfits-btn">Add an outfit</button></Link>
            </div>
            <div className="container col-12 flex">
                {outfits.map((outfit) => {
                    return (
                        <div className="col-6 outfit-img-title" key={`${outfit.slug}`}>
                            <Link to={`/outfits/${outfit.slug}`}>
                                <img src={`/images/${outfit.image}`} alt={outfit.title} className="outfit-img"/>
                                <div className="outfit-title">{outfit.title}</div>
                            </Link>
                        </div>
                    )
                })}
            </div>
            </FadeIn>
        </div>
    )
}