import { useState, useEffect } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = () => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => setUsers(json))
        .catch((error) => console.error("Error:", error));
    };

    // initial call
    fetchUsers();

    // interval call (every 5 seconds)
    const intervalId = setInterval(fetchUsers, 5000);

    // cleanup (very important!)
    return () => clearInterval(intervalId);
  }, []); // ✅ empty dependency array

  return (
    <>
      <h2>User List</h2>
      <ul>
        {users.map((u) => (
          <li key={u.id}>
            {u.id} - {u.name} - {u.email}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Users;