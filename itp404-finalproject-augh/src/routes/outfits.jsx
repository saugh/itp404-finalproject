import { Link, useLoaderData } from "react-router-dom"

export default function Outfits () {
    const outfits = useLoaderData();

    return (
        <div>
            <h1>OUTFITS</h1>
            <Link to="/addOutfit"><button type="button" className="btn">Add an outfit</button></Link>
            <div className="filler container col-12">
                {outfits.map((outfit) => {
                    return (
                        <div className="col-6">
                            <Link to={`/outfits/${outfit.slug}`}>
                                <img src={outfit.image} alt={outfit.title} />
                                {outfit.title}
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}