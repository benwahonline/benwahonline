import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const submit = e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(res => (res.ok ? navigate('/dashboard') : res.json().then(err => setError(err.error))));
  };

  return (
    <div className="container">
      <h1 className="text-2xl font-bold mb-3">Login</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={submit} className="space-y-3">
        <div>
          <label className="form-label">Email</label>
          <input type="email" name="email" className="form-control" required />
        </div>
        <div>
          <label className="form-label">Password</label>
          <input type="password" name="password" className="form-control" required />
        </div>
        <button className="btn btn-primary" type="submit">Login</button>
      </form>
    </div>
  );
}
