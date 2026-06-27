import { useState } from 'react';
import { FIELDS, EMPTY, Input } from '../fields';

export default function UserForm({ onAdd }) {
  const [form, setForm] = useState(EMPTY);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim()) return;
    onAdd(form);
    setForm(EMPTY);
  };

  return (
    <form className="row g-2 mb-4" onSubmit={handleSubmit}>
      {FIELDS.map((f) => (
        <div className="col-12 col-md" key={f.key}>
          <Input data={form} setData={setForm} field={f} />
        </div>
      ))}
      <div className="col-12 col-md-auto d-grid">
        <button type="submit" className="btn btn-primary">Add</button>
      </div>
    </form>
  );
}
