import { faBookmark, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FavoriteAction(props) {
    const favoriteBookmarkColor = props.favoriteBookmarkColor || "white";
    const favoriteHeartColor = props.favoriteHeartColor || "pink";
    const bookmarkColor = props.favorited ? favoriteBookmarkColor : "rgb(110, 104, 97)";
    const heartColor = props.favorited ? favoriteHeartColor : "rgb(110, 104, 97)";
    const bookmark = 
        <button
            type="button"
            className="btn bookmark-icon"
            data-testid="bookmark-button"
            favorited={props.favorited}
            key={`${props.id}`}
            onClick={() => {
                props.onBookmarkClick(props.id);
            }}
        >
            <FontAwesomeIcon
                icon={faBookmark}
                className="bookmark-icon"
                data-testid="bookmark-icon"
                favorited={props.favorited}
                // color={props.favorited ? favoriteBookmarkColor : "rgb(110, 104, 97)"}
                style={{color : bookmarkColor}}
            />
            <FontAwesomeIcon 
                icon={faHeart} 
                favorited={props.favorited}
                data-testid="heart-icon"
                // color={props.favorited ? favoriteHeartColor : "rgb(110, 104, 97)"}
                style={{color : heartColor}}
                className="heart-icon" />
        </button>
    return <> {bookmark} </>
}