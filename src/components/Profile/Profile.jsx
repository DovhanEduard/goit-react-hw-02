import css from "./Profile.module.css"

const Profile = ({ name, tag, location, image, stats }) => {
    const { followers, views, likes } = stats;
    
    
    
    return (
        <div className={css.profileContainer}>
            <div className={css.profileInfo}>
                <img
                    className={css.profileAvatar}
                    src={image}
                    alt="User avatar"
                />
                <p className={css.profileName} >{name}</p>
                <p className={css.profileText} >@{tag}</p>
                <p className={css.profileText} >{location}</p>
            </div>

            <ul className={css.profileStatsList}>
                <li className={css.profileStatsListItem}>
                    <span className={css.profileStatsText} >Followers</span>
                    <span className={css.profileStatsNumber}>{followers}</span>
                </li>
                <li className={css.profileStatsListItem}>
                    <span className={css.profileStatsText}>Views</span>
                    <span className={css.profileStatsNumber}>{views}</span>
                </li>
                <li className={css.profileStatsListItem}>
                    <span className={css.profileStatsText}>Likes</span>
                    <span className={css.profileStatsNumber}>{likes}</span>
                </li>
            </ul>
        </div>);
}

export default Profile;