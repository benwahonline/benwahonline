import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [cases, setCases] = useState([]);

  useEffect(() => {
    fetch('/cases').then(res => res.json()).then(setCases);
  }, []);

  return (
    <div className="container">
      <h1 className="text-2xl font-bold mb-3">Dashboard</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Seen</th>
          </tr>
        </thead>
        <tbody>
          {cases.map(c => (
            <tr key={c.id}>
              <td>{c.name}</td>
              <td>{c.lastSeen}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
