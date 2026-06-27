export const FIELDS = [
  { key: 'name', label: 'Name', type: 'text' },
  { key: 'age', label: 'Age', type: 'number' },
  { key: 'nickname', label: 'Nickname', type: 'text' },
];

export const EMPTY = { name: '', age: '', nickname: '' };

export function Input({ data, setData, field, size = '' }) {
  return (
    <input
      type={field.type}
      className={`form-control ${size}`.trim()}
      placeholder={field.label}
      value={data[field.key]}
      onChange={(e) => setData({ ...data, [field.key]: e.target.value })}
    />
  );
}
