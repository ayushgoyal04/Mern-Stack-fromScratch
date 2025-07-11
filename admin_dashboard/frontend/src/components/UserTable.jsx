import { Button, Table } from 'react-bootstrap';

export default function UserTable({ users, onEdit, onDelete }) {
  return (
    <div className="table-responsive">
      <Table striped bordered hover className="w-100 align-middle text-nowrap">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>First</th>
            <th>Last</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center">No users found.</td>
            </tr>
          ) : (
            users.map((u) => (
              <tr key={u._id}>
                <td>{u._id}</td>
                <td style={{ wordBreak: 'break-word' }}>{u.firstname}</td>
                <td style={{ wordBreak: 'break-word' }}>{u.lastname}</td>
                <td style={{ wordBreak: 'break-word' }}>{u.email}</td>
                <td>
                  <Button
                    size="sm"
                    variant="warning"
                    className="me-2"
                    onClick={() => onEdit(u)}
                  >
                    Edit
                  </Button>
                  <Button
                    size="sm"
                    variant="danger"
                    onClick={() => onDelete(u._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </div>
  );
}
