import { useLoaderData } from "react-router-dom"
import FadeIn from "react-fade-in";
import { deleteOutfitFromFavorites, unFavoriteUpdate } from "../api";
import { useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import FavoriteAction from "./FavoriteAction";

export default function Favorites() {
    useEffect(() =>{
        document.title = "aesth | Favorites";
    }, []);

    let redirect_Page = () => {
        let tID = setTimeout(function() {
            window.location.href = "/favorites";
            window.clearTimeout(tID);
        }, 2000)
    }

    const favorites = useLoaderData();

    
    return (
        <div className="ms-5 page">
            <h1>FAVORITES</h1>
            <section className="container-section">
            <FadeIn delay="15" transitionDuration="600">
                    <main>
                <div className="container">
                    {favorites.map((favorite) => {
                        return (
                            <div className="row favorite-card" key={`${favorite.id}`}>
                                <div className="outfit-img-icon">
                                    <img src={`/images/${favorite.image}`} alt={favorite.title} className="outfit-img"/>
                                    <FavoriteAction
                                    id={favorite.id}
                                    favorited={1}
                                    onBookmarkClick={(id) => {
                                        deleteOutfitFromFavorites(id);
                                        unFavoriteUpdate(id).then(
                                            () => {
                                                toast.success("Unfavorited. Refreshing...");
                                                redirect_Page();
                                            },
                                            () => {
                                                toast.error("Error unfavoriting.");
                                            }
                                        )
                                        }
                                        }
                                    />
                                    <ToastContainer position="bottom-left" autoclose={2000}/>
                                </div>

                                <div className="favorites-details col-8 pt-4">
                                    {/* <Link to={`/favorites/${favorite.id}`}> */}
                                        <h3>{favorite.title}</h3>
                                    {/* </Link> */}
                                        <div className="mt-4">
                                            {favorite.description}
                                        </div>
                                        <div className="mt-3 favorite-date-time">
                                            Favorited on {favorite.date} at {favorite.time}
                                        </div>
                                        <ToastContainer position="bottom-left" autoclose={2000}/>
                                </div>

                            </div>
                        )
                    })}
                </div>
                </main>
            </FadeIn>
            </section>
        </div>
    )
}