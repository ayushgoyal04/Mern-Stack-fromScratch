import React, { useEffect, useState } from 'react';
import UserTable from '../components/UserTable';
import UserFormModal from '../components/UserFormModal';
import { getUsers, createUser, updateUser, deleteUser } from '../api';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [currentUser, setCurrentUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const usersPerPage = 5;

  // Fetch users from backend
  const fetchUsers = () => {
    getUsers()
      .then(res => setUsers(res.data.data)) // adjust if your backend response is different
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Delete user
  const handleDelete = (id) => {
    deleteUser(id)
      .then(() => fetchUsers())
      .catch(err => console.error(err));
  };

  // Edit user
  const handleEdit = (user) => {
    setCurrentUser(user);
    setShowModal(true);
  };

  // Save user (create or update)
  const handleSave = (user) => {
    if (user._id) {
      updateUser(user._id, user)
        .then(() => {
          fetchUsers();
          setShowModal(false);
        })
        .catch(err => console.error(err));
    } else {
      createUser(user)
        .then(() => {
          fetchUsers();
          setShowModal(false);
        })
        .catch(err => console.error(err));
    }
  };

  // Filter and paginate users
  const filteredUsers = users.filter(u =>
    (u.firstname && u.firstname.toLowerCase().includes(search.toLowerCase())) ||
    (u.lastname && u.lastname.toLowerCase().includes(search.toLowerCase())) ||
    (u.email && u.email.toLowerCase().includes(search.toLowerCase()))
  );

  const indexOfLast = currentPage * usersPerPage;
  const indexOfFirst = indexOfLast - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirst, indexOfLast);

  return (
    <div>
      <h2>Users</h2>
      <div className="d-flex justify-content-between mb-2">
        <input
          type="text"
          placeholder="Search by name or email"
          className="form-control w-50"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <button className="btn btn-primary" onClick={() => {
          setCurrentUser(null);
          setShowModal(true);
        }}>Add User</button>
      </div>

      <UserTable users={currentUsers} onEdit={handleEdit} onDelete={handleDelete} />

      <div className="d-flex justify-content-between mt-3">
        <button
          className="btn btn-secondary"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(prev => prev - 1)}
        >Previous</button>

        <span>Page {currentPage}</span>

        <button
          className="btn btn-secondary"
          disabled={indexOfLast >= filteredUsers.length}
          onClick={() => setCurrentPage(prev => prev + 1)}
        >Next</button>
      </div>

      <UserFormModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        handleSubmit={handleSave}
        user={currentUser}
      />
    </div>
  );
};

export default Users;
