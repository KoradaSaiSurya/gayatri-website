
import React, { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL_2 = process.env.REACT_APP_API_BASE_URL || "https://gayatri-backend.onrender.com"; 


export default function Faculty2() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchAll = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${BASE_URL_2}/api/faculty`);
      setList(Array.isArray(data) ? data : data?.items || []);
      setError(null);
    } catch (err) {
      setError(err?.response?.data?.message || err.message || "Fetch error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAll();
    // Light auto-refresh to keep in sync with updates from Faculty.js
    const t = setInterval(fetchAll, 30000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="fx2-wrap">
      <header className="fx2-header">
        <h2 className="fx2-title">Faculty Directory</h2>
        <button className="fx2-refresh" onClick={fetchAll} aria-label="Refresh">↻</button>
      </header>

      {error && <div className="fx2-alert">{error}</div>}

      {loading ? (
        <div className="fx2-skeleton-grid">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="fx2-skeleton" />
          ))}
        </div>
      ) : list.length === 0 ? (
        <div className="fx2-empty">No faculty yet.</div>
      ) : (
        <div className="fx2-grid">
          {list.map((f) => (
            <div key={f._id} className="fx2-card" role="article">
              <div className="fx2-badge">{(f.name || "?").slice(0,1)}</div>
              <div className="fx2-info">
                <h3 className="fx2-name">{f.name}</h3>
                <div className="fx2-row"><span>Subject</span><b>{f.subject}</b></div>
                <div className="fx2-row"><span>Qualification</span><b>{f.qualification}</b></div>
                <div className="fx2-row"><span>Experience</span><b>{f.experience} yrs</b></div>
                <div className="fx2-id">ID: {f._id}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}