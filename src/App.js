import './App.css';
import useUsers from './hooks/useUsers';
import UserForm from './components/UserForm';
import UserTable from './components/UserTable';

function App() {
  const { users, addUser, updateUser, deleteUser } = useUsers();

  return (
    <div className="container py-4" style={{ maxWidth: 800 }}>
      <h1 className="h3 mb-4">User Management</h1>
      <UserForm onAdd={addUser} />
      <UserTable users={users} onUpdate={updateUser} onDelete={deleteUser} />
    </div>
  );
}

export default App;
