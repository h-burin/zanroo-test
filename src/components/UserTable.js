import { useState } from 'react';
import { FIELDS, EMPTY, Input } from '../fields';

export default function UserTable({ users, onUpdate, onDelete }) {
  const [editId, setEditId] = useState(null);
  const [draft, setDraft] = useState(EMPTY);

  const startEdit = (user) => {
    setEditId(user.id);
    setDraft(user);
  };

  const saveEdit = () => {
    if (!draft.name.trim()) return;
    onUpdate(editId, draft);
    setEditId(null);
  };

  return (
    <div className="table-responsive">
      <table className="table table-bordered align-middle">
        <thead className="table-light">
          <tr>
            {FIELDS.map((f) => (
              <th key={f.key}>{f.label}</th>
            ))}
            <th style={{ width: 180 }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 && (
            <tr>
              <td colSpan={FIELDS.length + 1} className="text-center text-muted">No data</td>
            </tr>
          )}
          {users.map((user) =>
            editId === user.id ? (
              <tr key={user.id}>
                {FIELDS.map((f) => (
                  <td key={f.key}>
                    <Input data={draft} setData={setDraft} field={f} size="form-control-sm" />
                  </td>
                ))}
                <td>
                  <button className="btn btn-primary btn-sm me-2" onClick={saveEdit}>Save</button>
                  <button className="btn btn-secondary btn-sm" onClick={() => setEditId(null)}>Cancel</button>
                </td>
              </tr>
            ) : (
              <tr key={user.id}>
                {FIELDS.map((f) => (
                  <td key={f.key}>{user[f.key]}</td>
                ))}
                <td>
                  <button className="btn btn-success btn-sm me-2" onClick={() => startEdit(user)}>Edit</button>
                  <button className="btn btn-danger btn-sm" onClick={() => onDelete(user.id)}>Delete</button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}
