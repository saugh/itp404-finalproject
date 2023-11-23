import { Link, useLoaderData } from "react-router-dom"

export default function Favorites() {
    const favorites = useLoaderData();

    return (
        <div>
            <h1>FAVORITES</h1>
            <div className="filler">
                {favorites.map((favorite) => {
                    return (
                        <div>
                            <Link to={`/favorites/${favorite.slug}`}>
                            <img src={favorite.image} alt={favorite.title} />
                            {favorite.title}
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}