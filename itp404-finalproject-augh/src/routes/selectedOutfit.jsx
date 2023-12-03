import { Link, useLoaderData } from "react-router-dom";
import FadeIn from "react-fade-in";
import { deleteOutfit, deleteOutfitFromFavorites } from "../api";
import { useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export default function SelectedOutfit() {
    const outfit = useLoaderData();

    useEffect(() =>{
        document.title = "aesth | " + outfit.title;
    }, []);

    let redirect_Page = () => {
        let tID = setTimeout(function() {
            window.location.href = "/outfits";
            window.clearTimeout(tID);
        }, 2000)
    }

    return (
        <div className="page space">
            <FadeIn delay="100" transitionDuration="600">
            <h1>{outfit.title} </h1>
            <button type="button" className="btn btn-outline-danger ms-3 mt-2 float-end me-3" onClick={() => {
                deleteOutfit(outfit.id);
                deleteOutfitFromFavorites(outfit.id).then(
                    () => {
                        toast.success("Outfit deleted. Redirecting...");
                        redirect_Page();
                    },
                    () => {
                        toast.error("Error deleting outfit.");
                    }
                )
            }}>Delete Outfit</button>
            <ToastContainer position="bottom-left" autoclose={2000}/>
            <Link to={`/outfits/${outfit.id}/edit`} className="float-end"><button type="button" className="btn hm-outfits-btn mt-2">Edit Outfit</button></Link>
                <div className="container pb-5">
                    <div className="row">
                        <img src={`/images/${outfit.image}`} alt={outfit.title} className="outfit-details-img col-7 mt-5 me-3" />
                        <div className="col-4 outfit-details">
                            <h4><strong>Description: </strong></h4>
                            <h5 className="desc">{outfit.description}</h5>
                            <h4 className="pt-5"><strong>Albums: </strong></h4>
                            {outfit.albums.map((album) => {
                                return (
                                    <div key={`${album.title}`}>
                                        <Link to={`/albums/${album.id}`}>
                                        <h5 className="">{album.title}</h5>
                                        </Link>
                                    </div>
                                )
                            })}    
                        
                        </div>

                    </div>

                </div>
            </FadeIn>
        </div>
    );
}
