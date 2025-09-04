import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BASE_URL_2 = process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";

export default function Faculty3() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

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
    const t = setInterval(fetchAll, 30000);
    return () => clearInterval(t);
  }, []);

  const handleAddClick = () => {
    setShowPassword(true);
  };

  const handlePasswordSubmit = () => {
    if (password === "surya2003") {
      navigate("/faculty"); // ✅ navigate to FacultyPage.js
    } else {
      alert("❌ Wrong password");
    }
  };

  return (
    <div className="fx3-wrap">
      <header className="fx3-header">
        <h2 className="fx3-title"> Our Faculty</h2>
        <div className="fx3-actions">
          <button className="fx3-refresh" onClick={fetchAll} aria-label="Refresh">↻</button>
          <button className="fx3-add" onClick={handleAddClick}>+</button>
        </div>
      </header>

      {error && <div className="fx3-alert">{error}</div>}

      {loading ? (
        <div className="fx3-skeleton-grid">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="fx3-skeleton" />
          ))}
        </div>
      ) : list.length === 0 ? (
        <div className="fx3-empty">No faculty yet.</div>
      ) : (
        <div className="fx3-grid">
          {list.map((f) => (
            <div key={f._id} className="fx3-card" role="article">
              <div className="fx3-badge">{(f.name || "?").slice(0, 1)}</div>
              <div className="fx3-info">
                <h3 className="fx3-name" style={{ textTransform: "uppercase"}}>{f.name}</h3>
                <div className="fx3-row"><b><span> Subject </span> </b>{f.subject}</div>
                <div className="fx3-row"><b><span> Qualification </span> </b>{f.qualification}</div>
                <div className="fx3-row"><b><span> Experience </span> </b>{f.experience} yrs</div>
                <div className="fx3-id">ID: {f._id}</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Password Modal */}
      {showPassword && (
        <div className="fx3-modal">
          <div className="fx3-modal-box">
            <h3>Enter Password</h3>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="fx3-input"
            />
            <div className="fx3-modal-actions">
              <button onClick={handlePasswordSubmit} className="fx3-submit">Submit</button>
              <button onClick={() => setShowPassword(false)} className="fx3-cancel">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
