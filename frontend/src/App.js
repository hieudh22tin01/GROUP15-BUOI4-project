import React from "react";
import UserList from "./UserList";
import AddUser from "./AddUser";

function App() {
  const [reload, setReload] = React.useState(false);

  const handleReload = () => setReload(!reload);

  return (
    <div style={{ padding: 20 }}>
      <h1>Quản lý User</h1>
      <AddUser onAdd={handleReload} />
      <UserList key={reload} />
    </div>
  );
}

export default App;
