import { useState } from "react";
import {users as defaultUsers} from './utils'

export default function KeysndValues() {
  const [users, setUsers] = useState(defaultUsers);

  const handleRemove = (id:number) => {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  };

  return (
    <div className="flex flex-col items-start mx-auto">
      {users.map((user) => {
        return (
          <button keys={user.id} onClick={() => handleRemove(user.id)}>{user.name}</button>
        );
      })}
    </div>
  );
}
