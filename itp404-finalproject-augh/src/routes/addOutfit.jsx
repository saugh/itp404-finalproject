import { useEffect, useState } from "react";
import { addOutfit } from "../api";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

export default function AddOutfit() {
    useEffect(() =>{
        document.title = "aesth | Add Outfit";
    }, []);
    
    let redirect_Page = () => {
        let tID = setTimeout(function() {
            window.location.href = "/outfits";
            window.clearTimeout(tID);
        }, 2000)
    }

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [springAlbum, setSpringAlbum] = useState(false);
    const [summerAlbum, setSummerAlbum] = useState(false);
    const [fallAlbum, setFallAlbum] = useState(false);
    const [winterAlbum, setWinterAlbum] = useState(false);
    const [albums, setAlbums] = useState([]);
    const [slug, setSlug] = useState("");

    const setFinalAlbumList = () => {
        let albumList = [];
        if(springAlbum){
            albumList.push({ title: "Spring", id: 1});
        }
        if(summerAlbum){
            albumList.push({ title: "Summer", id: 2});
        }
        if(fallAlbum){
            albumList.push({ title: "Fall", id: 3});
        }
        if(winterAlbum){
            albumList.push({ title: "Winter", id: 4});
        }
        setAlbums(albumList);
    }

    return (
        <div className="page space">
            <h1>Add Outfit</h1>
            <div className="">
                <form id="add-form" className="me-5 was-validated" noValidate onSubmit={(event) => {
                    event.preventDefault();

                    addOutfit({
                        title: title,
                        slug: slug,
                        image: image,
                        description: description,
                        albums: albums,
                        favorited: false,
                    }).then(
                        () => {
                            toast.success("Outfit added. Redirecting...");
                            redirect_Page();
                        },
                        () => {
                            toast.error("Error adding outfit.");
                        }
                    )
                }} >
                    <div>
                        <label htmlFor="title-id" className="form-label my-2">Title: </label>
                        <input type="text" id="title-id" name="title-name" className="form-control" value={title} required onChange={(event) => {
                            setTitle(event.target.value);
                            setSlug(convertToSlug(event.target.value));
                        }}/>
                        <div className="invalid-feedback">Please provide a title.</div>
                    </div>

                    <div>
                        <label htmlFor="image-id" className="form-label mt-5">Image: </label>
                        <input type="file" id="image-id" name="image-name" className="form-control" required onChange={(event) => {
                            const file = event.target.value;
                            const fileName = file.replace(/^.*\\/, '');
                            setImage(fileName);
                        }}/>
                        <div className="invalid-feedback">Please provide an image.</div>
                    </div>
                    <div>
                        <label htmlFor="description-id" className="form-label mt-5">Description: </label>
                        <textarea type="text" id="description-id" name="description-name" className="form-control" value={description} required onChange={(event) => {
                            setDescription(event.target.value);
                        }}/>
                        <div className="invalid-feedback">Please provide a description.</div>
                    </div>

                    <div className="pt-5">
                        <div>Albums:</div>
                        <div className="ps-5">
                            <div className="form-check">
                                <label htmlFor="spring-id" className="form-check-label">Spring </label>
                                <input type="checkbox" id="spring-id" name="spring" className="form-check-input" value={springAlbum} onChange={(event) => {
                                    setSpringAlbum(event.target.checked);
                                }}/>
                            </div>

                            <div className="form-check">
                                <label htmlFor="summer-id" className="form-check-label">Summer </label>
                                <input type="checkbox" id="summer-id" name="summer" className="form-check-input" value={summerAlbum} onChange={(event) => {
                                    setSummerAlbum(event.target.checked);
                                }}/>
                            </div>

                            <div className="form-check">
                                <label htmlFor="fall-id" className="form-check-label">Fall </label>
                                <input type="checkbox" id="fall-id" name="fall" className="form-check-input" value={fallAlbum} onChange={(event) => {
                                    setFallAlbum(event.target.checked);
                                }}/>
                            </div>

                            <div className="form-check">
                                <label htmlFor="winter-id" className="form-check-label">Winter </label>
                                <input type="checkbox" id="winter-id" name="winter" className="form-check-input" value={winterAlbum} onChange={(event) => {
                                    setWinterAlbum(event.target.checked);
                                }}/>
                            </div>
                        </div>
                    </div>
                    {/* <div className="form-check pt-5">
                        <label htmlFor="favorited-id" className="form-check-label">Favorite? </label>
                        <input type="checkbox" id="favorited-id" name="favorited" className="form-check-input" value={favorited} onChange={(event) => {
                            setFavorited(event.target.checked);
                        }}/>
                    </div> */}

                    <input type="submit" value="Add Outfit" className="btn hm-outfits-btn mt-5" onClick={setFinalAlbumList}/>
                    <Link to={`/outfits`}><button type="button" className="btn btn-secondary float-end">Back to Outfits</button></Link>
                </form>
                <ToastContainer position="bottom-left" autoclose={2000}/>
            </div>
        </div>
    );
}


function convertToSlug(Text) {
    return Text.toLowerCase()
      .replace(/[^\w ]+/g, "")
      .replace(/ +/g, "-");
  }
