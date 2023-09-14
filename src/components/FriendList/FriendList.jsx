import { FriendListItem } from "components/FriendListItem/FriendListItem.1";
import css from '../FriendList/friendList.module.css'
export const FriendList = ({friends}) => {
  return (
    <ul className={css.friendList}>
     {friends.map(friend => {
         return (
           <FriendListItem
             avatar={friend.avatar}
             name={friend.name}
             key={friend.id}
             isOnline={friend.isOnline}
           ></FriendListItem>
         );
       })}
    </ul>
  )
}
