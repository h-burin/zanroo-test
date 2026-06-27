import { useState, useEffect } from 'react';

const STORAGE_KEY = 'users';

const clean = (u) => ({ ...u, name: u.name.trim(), nickname: u.nickname.trim() });

export default function useUsers() {
  const [users, setUsers] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
  }, [users]);

  const addUser = (user) => setUsers((prev) => [...prev, { ...clean(user), id: Date.now() }]);

  const updateUser = (id, user) =>
    setUsers((prev) => prev.map((u) => (u.id === id ? { ...clean(user), id } : u)));

  const deleteUser = (id) => setUsers((prev) => prev.filter((u) => u.id !== id));

  return { users, addUser, updateUser, deleteUser };
}
