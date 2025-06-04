import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState(null);

  const submit = e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    fetch('/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).then(() => setStatus('Sent'));
  };

  return (
    <div className="container">
      <h1 className="text-2xl font-bold mb-3">Contact Us</h1>
      {status && <div className="alert alert-success">Message sent!</div>}
      <form onSubmit={submit} className="space-y-3">
        <div>
          <label className="form-label">Name</label>
          <input name="name" className="form-control" required />
        </div>
        <div>
          <label className="form-label">Email</label>
          <input type="email" name="email" className="form-control" required />
        </div>
        <div>
          <label className="form-label">Message</label>
          <textarea name="message" className="form-control" required />
        </div>
        <button className="btn btn-primary" type="submit">Send</button>
      </form>
    </div>
  );
}
