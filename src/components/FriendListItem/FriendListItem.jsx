import clsx from "clsx";
import css from "./FriendListItem.module.css"

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <div className={css.friendListInfo}>
            <img className={css.friendListAvatar} src={avatar} alt="Avatar" width="48" />
            <p className={css.friendListName}>{name}</p>
            <p className={isOnline ? css.isOnline : css.isOffline}>{isOnline ? "Online" : "Offline"}</p>
        </div>
    );
}

export default FriendListItem;