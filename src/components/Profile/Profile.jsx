import clsx from "clsx";
import styles from "./Profile.module.css";

const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={clsx(styles["profile-container"])}>
      <div className={clsx(styles["profile-info-wrapper"])}>
        <img
          src={image}
          alt="User avatar"
          className={clsx(styles["profile-img"])}
        />
        <p className={clsx(styles["profile-name"])}>{name}</p>
        <p className={clsx(styles["profile-tag"])}>@{tag}</p>
        <p className={clsx(styles["profile-location"])}>{location}</p>
      </div>

      <ul className={clsx(styles["profile-list-stat"])}>
        <li className={clsx(styles["profile-list-item"])}>
          <span className={clsx(styles["profile-list-header"])}>Followers</span>
          <span className={clsx(styles["profile-list-quantity"])}>
            {followers}
          </span>
        </li>
        <li className={clsx(styles["profile-list-item"])}>
          <span className={clsx(styles["profile-list-header"])}>Views</span>
          <span className={clsx(styles["profile-list-quantity"])}>{views}</span>
        </li>
        <li className={clsx(styles["profile-list-item"])}>
          <span className={clsx(styles["profile-list-header"])}>Likes</span>
          <span className={clsx(styles["profile-list-quantity"])}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};
export default Profile;
