import React, { useState } from "react";
import data from "./data.json";

export default function Lists() {
  const [year, setYear] = useState("all");
  const [author, setAuthor] = useState("all");
  const [category, setCategory] = useState("all");

  const years = [...new Set(data.map(d => d.year))];
  const authors = [...new Set(data.map(d => d.author))];
  const categories = [...new Set(data.map(d => d.category))];

  const filtered = data.filter(d => {
    return (year === "all" || d.year === parseInt(year)) &&
           (author === "all" || d.author === author) &&
           (category === "all" || d.category === category);
  });

  return (
    <div className="lists-root">
      <div className="lists-container">
        <h1 className="lists-title">Yearly Lists Archive</h1>
        <p className="lists-subtitle">Filter by year, author, and category</p>

        {/* Filters */}
        <div className="filters">
          <select
            value={year}
            onChange={e => setYear(e.target.value)}
            className="select"
          >
            <option value="all">All Years</option>
            {years.map(y => <option key={y} value={y}>{y}</option>)}
          </select>

          <select
            value={author}
            onChange={e => setAuthor(e.target.value)}
            className="select"
          >
            <option value="all">All Authors</option>
            {authors.map(a => <option key={a} value={a}>{a}</option>)}
          </select>

          <select
            value={category}
            onChange={e => setCategory(e.target.value)}
            className="select"
          >
            <option value="all">All Categories</option>
            {categories.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>

        {/* Lists */}
        <div className="cards">
          {filtered.map((list, i) => (
            <div key={i} className="card">
              <h2 className="card-title">
                <span className="accent">{list.year}</span> – {list.category} by {list.author}
              </h2>
              <ol className="items">
                {list.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}