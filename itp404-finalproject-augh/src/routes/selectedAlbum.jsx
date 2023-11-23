import { Link, useLoaderData } from "react-router-dom"

export default function SelectedAlbum() {
    const album = useLoaderData();
    return (
        <div>
            <h1>{album.title}</h1>
            <div className="filler">
                <div className="filler container col-12">
                    {album.outfits.map((outfit) => {
                        return (
                            <div className="col-6">
                                <Link to={`/albums/${album.title}/${outfit.slug}`}>
                                    <img src={outfit.image} alt={outfit.title} />
                                    {outfit.title}
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}