import React, { useState } from "react";
import axios from "axios";

export default function AddUser({ onAdd }) {
  const [newUser, setNewUser] = useState({ name: "", email: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
  axios.post("http://localhost:3001/users", newUser)
  .then(res => {
    alert("Thêm user thành công!");
    onAdd(); // cập nhật lại danh sách
    setNewUser({ name: "", email: "" });
  })
  .catch(err => console.error(err));

  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Thêm User</h2>
      <input
        type="text"
        placeholder="Tên"
        value={newUser.name}
        onChange={e => setNewUser({ ...newUser, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={newUser.email}
        onChange={e => setNewUser({ ...newUser, email: e.target.value })}
      />
      <button type="submit">Thêm</button>
    </form>
  );
}
