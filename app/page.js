'use client';

import React, { useEffect, useState } from 'react';

export default function Home() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/categories');
      const data = await response.json();
      console.log(data.categories);
      setCategories(data.categories);
    }
    fetchData();
  }, []);

  return (
    <main>
      <h1>Categories</h1>
      <div className="container">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Url</th>
            <th>Title</th>
            <th>Published Date</th>
            <th>Product Count</th>
          </tr>
        </thead>
        <tbody>
          {categories.map(category => (
            <tr key={category.id}>
              <td>{category.id}</td>
              <td>{category.url}</td>
              <td>{category.title}</td>
              <td>{category.publishDate}</td>
              <td>{category.count}</td>
            </tr>
          ))}
        </tbody>
      </table></div>
    </main>
  );
}
