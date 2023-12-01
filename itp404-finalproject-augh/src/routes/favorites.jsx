import { Link, useLoaderData } from "react-router-dom"
import FadeIn from "react-fade-in";


export default function Favorites() {
    const favorites = useLoaderData();

    return (
        <div>
            <h1>FAVORITES</h1>
            <FadeIn delay="10" transitionDuration="600">
                <div className="container flex">
                    {favorites.map((favorite) => {
                        return (
                            <div className="outfit-img-title">
                                <Link to={`/favorites/${favorite.slug}`}>
                                    <img src={`/images/${favorite.image}`} alt={favorite.title} className="outfit-img"/>
                                    <div className="outfit-title">{favorite.title}</div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </FadeIn>
        </div>
    )
}