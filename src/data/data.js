import React, { useState } from 'react';
import Sidebar from '../component/Sidebar'; 
import './dataTable.css'; 

const Data = () => {
  const [urls, setUrls] = useState([
    // This would normally be fetched from a server
    { id: 1, originalUrl: 'http://example.com', shortUrl: 'http://exmpl.co/abc', hits: 150 },
    { id: 2, originalUrl: 'http://anotherexample.com', shortUrl: 'http://aexmpl.co/def', hits: 85 },
    // Add as many URL objects as needed
  ]);

  return (
    <div className="app-container">
      <Sidebar />
      <div className="data-content">
        <table className="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Original URL</th>
              <th>Short URL</th>
              <th>Hits</th>
            </tr>
          </thead>
          <tbody>
            {urls.map((url) => (
              <tr key={url.id}>
                <td>{url.id}</td>
                <td>{url.originalUrl}</td>
                <td>{url.shortUrl}</td>
                <td>{url.hits}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Data;

