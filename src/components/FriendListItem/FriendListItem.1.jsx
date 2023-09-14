import css from '../FriendListItem/friendListItem.module.css'
export const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusClassName = isOnline ? css.isOnline : css.isOffline;

  return (
    <li className={css.item}>
      <span
        className={ 
             `${css.status} ${statusClassName}`
        } 
      ></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}; 

