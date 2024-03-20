import React from "react";

const USER_API_URI = "https://jsonplaceholder.typicode.com/users";

interface User {
  id: number;
  name: string;
}

const UserPage = async () => {
  const res = await fetch(USER_API_URI);
  const users: User[] = await res.json();

  return (
    <>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default UserPage;
