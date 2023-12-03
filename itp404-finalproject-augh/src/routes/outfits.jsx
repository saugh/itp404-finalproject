import { Link, useLoaderData } from "react-router-dom"
import FadeIn from "react-fade-in";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { AddFavoriteUpdate, addFavorite, deleteOutfitFromFavorites, unFavoriteUpdate } from "../api";
import { useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import FavoriteAction from "./FavoriteAction";

export default function Outfits () {
    useEffect(() =>{
        document.title = "aesth | Outfits";
    }, []);
    const outfits = useLoaderData();

    // const [favorited, setFavorited] = useState(false);

    let redirect_Page = () => {
        let tID = setTimeout(function() {
            window.location.href = "/outfits";
            window.clearTimeout(tID);
        }, 2000)
    }

    return (
        <div id="outfits-page" className="ms-5 page">
            <FadeIn delay="10" transitionDuration="600">
            <div className="outfits-page-top">
                <h1>OUTFITS</h1>
                <Link to="/addOutfit" className="ms-4 mt-4"><button type="button" className="btn hm-outfits-btn">Add an outfit</button></Link>
            </div>
            <div className="container col-12 flex">
                {outfits.map((outfit) => {
                    // setFavorited(outfit.favorited);
                    return (
                        <div className="col-6 outfit-img-title" key={`${outfit.slug}`}>
                            <div className="outfit-img-icon">
                                <img src={`/images/${outfit.image}`} alt={outfit.title} className="outfit-img"/>
                                {/* {favorited(outfit)} */}
                                <FavoriteAction
                                    id={outfit.id}
                                    favorited={outfit.favorited}
                                    favoriteBookmarkColor={"rgb(215, 206, 196)"}
                                    favoriteHeartColor={"rgb(110, 104, 97)"}
                                    onBookmarkClick={(id) => {
                                        if(outfit.favorited){
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
                                        else {
                                            var date = new Date();
                                            // setFavorited(true);
                                            addFavorite({
                                                "title": outfit.title,
                                                "description": outfit.description,
                                                "image": outfit.image,
                                                "date": date.toLocaleDateString(),
                                                "time": date.toLocaleTimeString(),
                                                "id": outfit.id,
                                            })
                                            AddFavoriteUpdate(outfit.id, {
                                                "favorited": true
                                            }).then(
                                                () => {
                                                    toast.success("Favorited. Refreshing...");
                                                    redirect_Page();
                                                },
                                                () => {
                                                    toast.error("Error favoriting.");
                                                }
                                            )
                                        }
                                    }}/>
                                <ToastContainer position="bottom-left" autoclose={2000}/>

                            </div>
                            <Link to={`/outfits/${outfit.id}`}>
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

// function favorited(props){
//     let redirect_Page = () => {
//         let tID = setTimeout(function() {
//             window.location.href = "/outfits";
//             window.clearTimeout(tID);
//         }, 2000)
//     }
//     if(props.favorited){
//         return (
//             <button>
//                 <FontAwesomeIcon icon={faBookmark} className="bookmark-icon active" onClick={() => {
//                     deleteOutfitFromFavorites(props.id);
//                     unFavoriteUpdate(props.id).then(
//                         () => {
//                             toast.success("Unfavorited. Refreshing...");
//                             redirect_Page();
//                         },
//                         () => {
//                             toast.error("Error unfavoriting.");
//                         }
//                     )
//                 }}/>
//                 <ToastContainer position="bottom-left" autoclose={2000}/>
//             </button>
//         )
//     }
//     else {
//         return (
//             <button>
//                 <FontAwesomeIcon icon={faBookmark} className="bookmark-icon" onClick={() => {
//                     var date = new Date();
//                     addFavorite({
//                         "title": props.title,
//                         "description": props.description,
//                         "image": props.image,
//                         "date": date.toLocaleDateString(),
//                         "time": date.toLocaleTimeString(),
//                         "id": props.id,
//                     })
//                     AddFavoriteUpdate(props.id, {
//                         "favorited": true
//                     }).then(
//                         () => {
//                             toast.success("Favorited. Refreshing...");
//                             redirect_Page();
//                         },
//                         () => {
//                             toast.error("Error favoriting.");
//                         }
//                     )
//                 }}/>
//                 <ToastContainer position="bottom-left" autoclose={2000}/>
//             </button>
//         )
//     }
// }