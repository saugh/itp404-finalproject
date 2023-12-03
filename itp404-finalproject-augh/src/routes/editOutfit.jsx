import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { editOutfit, editOutfitInFavorites } from "../api";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export default function EditOutfit() {
    const outfit = useLoaderData();
    const [title, setTitle] = useState(outfit.title);
    const [description, setDescription] = useState(outfit.description);

    useEffect(() =>{
        document.title = "aesth | Edit Outfit";
    }, []);

    let redirect_Page = () => {
        let tID = setTimeout(function() {
            window.location.href = `/outfits/${outfit.id}`;
            window.clearTimeout(tID);
        }, 2000)
    }

    return (
        <div className="page space">
            <h1>Edit Outfit</h1>
            <div className="">
                <form id="edit-form" className="me-5" onSubmit={(event) => {
                    event.preventDefault();
                    if(outfit.favorited) {
                        editOutfitInFavorites(outfit.id, {
                            title: title,
                            slug: convertToSlug(title),
                            description: description
                        })
                    }

                    editOutfit(outfit.id, {
                        title: title,
                        slug: convertToSlug(title),
                        description: description,
                    }).then(
                        () => {
                            toast.success("Outfit edited. Redirecting...");
                            redirect_Page();
                        },
                        () => {
                            toast.error("Error editing outfit details.");
                        }
                    )
                }} >
                    <label htmlFor="title-id" className="form-label my-2">Title: </label>
                    <input type="text" id="title-id" name="title-name" className="form-control" value={title} onChange={(event) => {
                        setTitle(event.target.value);
                    }}/>

                    <label htmlFor="description-id" className="form-label mt-5">Description: </label>
                    <textarea type="text" id="description-id" name="description-name" className="form-control" value={description} onChange={(event) => {
                        setDescription(event.target.value);
                    }}/>

                    <input type="submit" value="Save Changes" className="btn hm-outfits-btn mt-5"/>
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
  
