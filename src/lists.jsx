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
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-100 text-gray-800 p-6 font-serif">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-orange-900">
          ✨ Yearly Lists Archive ✨
        </h1>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <select
            value={year}
            onChange={e => setYear(e.target.value)}
            className="p-2 rounded-xl shadow bg-white"
          >
            <option value="all">All Years</option>
            {years.map(y => <option key={y} value={y}>{y}</option>)}
          </select>

          <select
            value={author}
            onChange={e => setAuthor(e.target.value)}
            className="p-2 rounded-xl shadow bg-white"
          >
            <option value="all">All Authors</option>
            {authors.map(a => <option key={a} value={a}>{a}</option>)}
          </select>

          <select
            value={category}
            onChange={e => setCategory(e.target.value)}
            className="p-2 rounded-xl shadow bg-white"
          >
            <option value="all">All Categories</option>
            {categories.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>

        {/* Lists */}
        <div className="space-y-6">
          {filtered.map((list, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold text-orange-800 mb-2">
                {list.year} – {list.category} by {list.author}
              </h2>
              <ol className="list-decimal ml-6 space-y-1 text-gray-700">
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