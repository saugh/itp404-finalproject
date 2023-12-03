import { useLoaderData } from "react-router-dom"
import FadeIn from "react-fade-in";
import { useEffect } from "react";


export default function SelectedAlbum() {
    const album = useLoaderData();
    const albumTitle = album.title;
    useEffect(() =>{
        document.title = "aesth | " + albumTitle;
    }, []);
    return (
        <div className="page space">
            <h1>{album.title}</h1>
            <FadeIn delay="10" transitionDuration="600">
                <div className="container col-12 flex">
                    {album.outfits.map((outfit) => {
                        return (
                            <div className="col-6 outfit-img-title">
                                {/* <Link to={`/outfits/${outfit.id}`}> */}
                                    <img src={`/images/${outfit.image}`} alt={outfit.title} className="outfit-img"/>
                                    <div className="outfit-title">{outfit.title}</div>
                                {/* </Link> */}
                            </div>
                        )
                    })}
                </div>
            </FadeIn>
        </div>
    )
}