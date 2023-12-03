import { useRef, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import $ from 'jquery';

export default function Admin() {
    
    const [allChecked, setAllChecked] = useState(false);
    const [selectionMade, setSelectionMade] = useState(false);
    const [selectedOutfits, setSelectedOutfits] = useState([]);
    const outfits = useLoaderData();
    
    let redirect_Page = () => {
        let tID = setTimeout(function() {
            window.location.href = "/admin";
            window.clearTimeout(tID);
        }, 2000)
    }
    
    const setOutfitsToDelete = () => {
        let outfitsToDelete = [];
        
        selectedOutfits.forEach((outfit) => {
            let promise = $.ajax({ type: "DELETE", url: `http://localhost:5000/outfits/${outfit.id}`})
            outfitsToDelete.push(promise);
            if(outfit.favorited) {
                promise = $.ajax({ type: "DELETE", url: `http://localhost:5000/favorited-outfits/${outfit.id}`})
                outfitsToDelete.push(promise);
            }
        })

        return outfitsToDelete;
    }

    return (
        <div className="page">
            <h1>ADMIN PAGE</h1>
            <Checkbox
                label={<strong className="ms-2">Select All</strong>}
                isIndeterminate={true}
                onChange={(isChecked) => {
                    if(isChecked) {
                        setAllChecked(true);
                        setSelectionMade(true);
                        setSelectedOutfits(outfits);
                        // for all outfits, setchecked to true
                        outfits.forEach((outfit) => {
                            outfit.checked = true;
                        })
                        
                    } else {
                        setAllChecked(false);
                        setSelectionMade(false);
                        setSelectedOutfits([]);
                        // for all outfits, setchecked to false
                        outfits.forEach((outfit) => {
                            outfit.checked = false;
                        })
                    }
                }}
            />
            {selectionMade ? <button className="btn btn-secondary float-end" onClick={() => {
                // promises and delete outfits in setOutfitsToDelete()
                let outfitsToDelete = setOutfitsToDelete();
                Promise.all(outfitsToDelete).then(() => {
                    toast.success("Outfits deleted. Refreshing...");
                    redirect_Page();
                },
                () => {
                    toast.error("Error deleting outfits.");
                })
                
            }
            }>Delete Selected</button> : null}
            <ToastContainer position="bottom-left" autoclose={2000}/>
            {outfits.map((outfit) => {
                    return (
                        <div className="col-6 mt-2" key={`${outfit.slug}`}>
                            <Checkbox
                                label={<em className="ms-2">{outfit.title}</em>}
                                checked={outfit.checked}
                                isIndeterminate={false}
                                onChange={(isChecked) => {
                                    if(isChecked){
                                        setSelectionMade(true);
                                        setSelectedOutfits([...selectedOutfits, outfit]);
                                        outfit.checked = true;
                                    }
                                    // delete from selected array and check if array empty to see whether to display button or not
                                    else{
                                        setSelectedOutfits(selectedOutfits.filter((selectedOutfit) => selectedOutfit.id !== outfit.id));
                                        if(selectedOutfits.length === 1) {
                                            setSelectionMade(false);
                                        }
                                        outfit.checked = false;
                                    }
                                }}
                            />
                        </div>
                    )
                })}
        </div>
    )
}

function Checkbox(props) {
    const { label, checked, isIndeterminate, onChange } = props;
    const checkboxRef = useRef();
  
    useEffect(() => {
      checkboxRef.current.indeterminate = isIndeterminate;
    }, [isIndeterminate]);
  
    return (
      <label>
        <input
          type="checkbox"
          ref={checkboxRef}
          checked={checked}
          onChange={(event) => {
            onChange(event.target.checked);
          }}
        />
        {label}
      </label>
    );
  }
  