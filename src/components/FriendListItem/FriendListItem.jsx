import clsx from "clsx";
import styles from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={styles["friendlist-item"]}>
      <img
        src={avatar}
        alt="Avatar"
        width="48"
        className={styles["friendlist-img"]}
      />
      <p className={styles["friendlist-name"]}>{name}</p>
      {isOnline ? (
        <p
          className={clsx(
            styles["friendlist-status"],
            styles["friendlist-online"]
          )}
        >
          Online
        </p>
      ) : (
        <p
          className={clsx(
            styles["friendlist-status"],
            styles["friendlist-offline"]
          )}
        >
          Offline
        </p>
      )}
    </li>
  );
};

export default FriendListItem;
