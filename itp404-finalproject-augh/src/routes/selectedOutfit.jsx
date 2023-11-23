import { useLoaderData } from "react-router-dom";

export default function SelectedOutfit() {
    const outfit = useLoaderData();
    return (
        <div>
            <h1>{outfit.title}</h1>
            <div className="filler">
                <h3>{outfit.description}</h3>
                <img src={outfit.image} alt={outfit.title} />
            </div>
        </div>
    );
}