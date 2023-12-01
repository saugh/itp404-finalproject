import { Link, useLoaderData } from "react-router-dom";
import FadeIn from "react-fade-in";


export default function SelectedOutfit() {
    const outfit = useLoaderData();
    return (
        <div>
            <FadeIn delay="100" transitionDuration="600">
            <h1>{outfit.title}</h1>
            <Link to={`/${outfit.slug}/edit`} className="ms-3 float-end"><button type="button" className="btn hm-outfits-btn">Edit Outfit</button></Link>
                <div className="container pb-5">
                    <div className="row">
                        <img src={`/images/${outfit.image}`} alt={outfit.title} className="outfit-details-img col-7 mt-5 me-3" />
                        <div className="col-4 outfit-details">
                            <h4><strong>Description: </strong></h4>
                            <h5 className="desc">{outfit.description}</h5>
                            <h4 className="pt-5"><strong>Albums: </strong></h4>
                            {outfit.albums.map((album) => {
                                return (
                                    <div className="">
                                        <Link to={`/albums/${album.title}`}>
                                        <h5 className="">{album.title}</h5>
                                        </Link>
                                    </div>
                                )
                            })}    
                            <h4 className="pt-5"><strong>Favorited? </strong> {outfit.favorited ? "Yes" : "No"}</h4>
                        
                        </div>

                    </div>

                </div>
            </FadeIn>
        </div>
    );
}