import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import {
  FaPlus,
  FaEdit,
  FaTrash,
  FaSearch,
  FaSave,
  FaTimes,
  FaSync,
  FaUserTie,
  FaGraduationCap,
  FaBookOpen,
  FaClock
} from "react-icons/fa";

const BASE_URL = process.env.REACT_APP_API_BASE_URL || "https://gayatri-backend.onrender.com"; 


const emptyForm = { name: "", subject: "", qualification: "", experience: "" };

export default function Faculty() {
  const [list, setList] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [query, setQuery] = useState("");
  const [sortKey, setSortKey] = useState("name");
  const [sortDir, setSortDir] = useState("asc");
  const [error, setError] = useState(null);

  // Fetch all
  const fetchAll = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${BASE_URL}/api/faculty`);
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
    // optional: live refresh every 30s
    const t = setInterval(fetchAll, 30000);
    return () => clearInterval(t);
  }, []);

  const filtered = useMemo(() => {
    let rows = [...list];
    if (query.trim()) {
      const q = query.toLowerCase();
      rows = rows.filter((r) =>
        [r.name, r.subject, r.qualification, String(r.experience)]
          .filter(Boolean)
          .some((v) => String(v).toLowerCase().includes(q))
      );
    }
    rows.sort((a, b) => {
      const av = String(a[sortKey] ?? "").toLowerCase();
      const bv = String(b[sortKey] ?? "").toLowerCase();
      if (av < bv) return sortDir === "asc" ? -1 : 1;
      if (av > bv) return sortDir === "asc" ? 1 : -1;
      return 0;
    });
    return rows;
  }, [list, query, sortKey, sortDir]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: name === "experience" ? value.replace(/[^0-9.]/g, "") : value }));
  };

  const resetForm = () => {
    setForm(emptyForm);
    setEditingId(null);
  };

  const validate = () => {
    if (!form.name.trim()) return "Please enter name";
    if (!form.subject.trim()) return "Please enter subject";
    if (!form.qualification.trim()) return "Please enter qualification";
    const exp = parseFloat(form.experience);
    if (isNaN(exp) || exp < 0) return "Experience must be a positive number";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const msg = validate();
    if (msg) return setError(msg);
    try {
      setSaving(true);
      setError(null);
      if (editingId) {
        const { data } = await axios.put(`${BASE_URL}/api/faculty/${editingId}`, {
          ...form,
          experience: Number(form.experience)
        });
        setList((prev) => prev.map((r) => (r._id === editingId ? data : r)));
      } else {
        const { data } = await axios.post(`${BASE_URL}/api/faculty`, {
          ...form,
          experience: Number(form.experience)
        });
        setList((prev) => [data, ...prev]);
      }
      resetForm();
    } catch (err) {
      setError(err?.response?.data?.message || err.message || "Save error");
    } finally {
      setSaving(false);
    }
  };

  const startEdit = (item) => {
    setEditingId(item._id);
    setForm({
      name: item.name || "",
      subject: item.subject || "",
      qualification: item.qualification || "",
      experience: item.experience ?? ""
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this faculty?")) return;
    try {
      setSaving(true);
      await axios.delete(`${BASE_URL}/api/faculty/${id}`);
      setList((prev) => prev.filter((r) => r._id !== id));
    } catch (err) {
      setError(err?.response?.data?.message || err.message || "Delete error");
    } finally {
      setSaving(false);
    }
  };

  const toggleSort = (key) => {
    if (sortKey === key) setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    else {
      setSortKey(key);
      setSortDir("asc");
    }
  };

  return (
    <div className="fx-wrap">
      <header className="fx-header">
        <div className="fx-title">Faculty Manager</div>
        <div className="fx-actions">
          <button className="fx-btn ghost" onClick={fetchAll} title="Refresh">
            <FaSync />
            <span>Refresh</span>
          </button>
        </div>
      </header>

      {error && <div className="fx-alert">{error}</div>}

      <section className="fx-card fx-form-card">
        <h3 className="fx-section-title">
          {editingId ? (
            <>
              <FaEdit /> Edit Faculty
            </>
          ) : (
            <>
              <FaPlus /> Add Faculty
            </>
          )}
        </h3>
        <form className="fx-form" onSubmit={handleSubmit}>
          <div className="fx-form-grid">
            <label className="fx-field">
              <span className="fx-label"><FaUserTie /> Name</span>
              <input
                name="name"
                placeholder="e.g., S. Ramesh"
                value={form.name}
                onChange={onChange}
                required
              />
            </label>
            <label className="fx-field">
              <span className="fx-label"><FaBookOpen /> Subject</span>
              <input
                name="subject"
                placeholder="e.g., Mathematics"
                value={form.subject}
                onChange={onChange}
                required
              />
            </label>
            <label className="fx-field">
              <span className="fx-label"><FaGraduationCap /> Qualification</span>
              <input
                name="qualification"
                placeholder="e.g., M.Sc, B.Ed"
                value={form.qualification}
                onChange={onChange}
                required
              />
            </label>
            <label className="fx-field">
              <span className="fx-label"><FaClock /> Experience (years)</span>
              <input
                name="experience"
                inputMode="decimal"
                placeholder="e.g., 5"
                value={form.experience}
                onChange={onChange}
                required
              />
            </label>
          </div>
          <div className="fx-form-actions">
            <button className="fx-btn primary" type="submit" disabled={saving}>
              {editingId ? <FaSave /> : <FaPlus />}
              <span>{editingId ? (saving ? "Saving..." : "Save Changes") : (saving ? "Adding..." : "Add Faculty")}</span>
            </button>
            {editingId && (
              <button type="button" className="fx-btn danger" onClick={resetForm}>
                <FaTimes />
                <span>Cancel</span>
              </button>
            )}
          </div>
        </form>
      </section>

      <section className="fx-card">
        <div className="fx-toolbar">
          <div className="fx-search">
            <FaSearch />
            <input
              placeholder="Search name, subject, qualification..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className="fx-sort-group">
            <span className="fx-sort-label">Sort by:</span>
            <button
              className={`fx-chip ${sortKey === "name" ? "active" : ""}`}
              onClick={() => toggleSort("name")}
            >
              Name {sortKey === "name" ? (sortDir === "asc" ? "↑" : "↓") : ""}
            </button>
            <button
              className={`fx-chip ${sortKey === "subject" ? "active" : ""}`}
              onClick={() => toggleSort("subject")}
            >
              Subject {sortKey === "subject" ? (sortDir === "asc" ? "↑" : "↓") : ""}
            </button>
            <button
              className={`fx-chip ${sortKey === "qualification" ? "active" : ""}`}
              onClick={() => toggleSort("qualification")}
            >
              Qualification {sortKey === "qualification" ? (sortDir === "asc" ? "↑" : "↓") : ""}
            </button>
            <button
              className={`fx-chip ${sortKey === "experience" ? "active" : ""}`}
              onClick={() => toggleSort("experience")}
            >
              Exp {sortKey === "experience" ? (sortDir === "asc" ? "↑" : "↓") : ""}
            </button>
          </div>
        </div>

        <div className="fx-grid">
          {loading ? (
            <div className="fx-skeleton-list">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="fx-skeleton-card" />
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <div className="fx-empty">No faculty found.</div>
          ) : (
            filtered.map((item) => (
              <article key={item._id} className="fx-item">
                <div className="fx-item-head">
                  <div className="fx-avatar">{(item.name || "?").charAt(0)}</div>
                  <div className="fx-item-title">{item.name}</div>
                </div>
                <ul className="fx-item-meta">
                  <li><strong>Subject:</strong> {item.subject}</li>
                  <li><strong>Qualification:</strong> {item.qualification}</li>
                  <li><strong>Experience:</strong> {item.experience} yrs</li>
                  <li><small>ID: {item._id}</small></li>
                </ul>
                <div className="fx-item-actions">
                  <button className="fx-icon-btn" title="Edit" onClick={() => startEdit(item)}>
                    <FaEdit />
                  </button>
                  <button className="fx-icon-btn danger" title="Delete" onClick={() => handleDelete(item._id)}>
                    <FaTrash />
                  </button>
                </div>
              </article>
            ))
          )}
        </div>
      </section>
    </div>
  );
}

