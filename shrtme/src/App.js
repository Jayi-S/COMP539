import React, { useState } from 'react';
import Sidebar from './component/Sidebar';


function URLShortenComponent() {
    const [longUrl, setLongUrl] = useState("");
    const [urlType, setUrlType] = useState("magic");
    const [shortUrl, setShortUrl] = useState(""); // You can use this state to display the generated short URL

    const generateShortUrl = () => {
        // Implement the logic to generate a short URL here and set it using setShortUrl
        // For now, let's just set it to a placeholder value
        setShortUrl("Shortened URL will appear here");
    };

    return (
        <>
        {/* <Sidebar /> */}
        <Sidebar />
        <div className="concept">
            <h2>Short Me</h2>
            <div className="main-container">
                <input
                    type="text"
                    placeholder="Enter long URL"
                    value={longUrl}
                    onChange={e => setLongUrl(e.target.value)}
                />
                <select value={urlType} onChange={e => setUrlType(e.target.value)}>
                    <option value="magic">Magic URL</option>
                    <option value="emoji">Emoji URL</option>
                    <option value="aglin">Aglin URL</option>
                </select>
                <button onClick={generateShortUrl}>Generate Shorten URL</button>
            </div>
            <p>Shortened URL: {shortUrl}</p>
        </div>
        </>
    );
}

export default URLShortenComponent;







