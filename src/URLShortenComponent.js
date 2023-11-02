import React, { useState } from 'react';
import Sidebar from './component/Sidebar';
import Footer from './component/Footer';
import './URLShortenComponent.css';

function URLShortenComponent() {
    const [longUrl, setLongUrl] = useState("");
    const [urlType, setUrlType] = useState("magic");
    const [shortUrl, setShortUrl] = useState("");
    const [desiredUrl, setDesiredUrl] = useState("");

    const generateShortUrl = () => {
        setShortUrl("Shortened URL will appear here");
    };

    return (
        <>
            <Sidebar />
            <div className="concept">
                <h2>Shorten Me</h2>
                <div className="main-container">
                    <input
                        type="text"
                        placeholder="Enter long URL"
                        value={longUrl}
                        onChange={e => setLongUrl(e.target.value)}
                        className="input-field"
                    />
                    <select
                        value={urlType}
                        onChange={e => setUrlType(e.target.value)}
                        className="select-field"
                    >
                        <option value="magic">Magic URL</option>
                        <option value="emoji">Emoji URL</option>
                        <option value="aglin">Aglin URL</option>
                    </select>
                    {urlType !== "aglin" ? (
                        <input
                            type="text"
                            placeholder="Please type your desired URL"
                            value={desiredUrl}
                            onChange={e => setDesiredUrl(e.target.value)}
                            className="input-field"
                        />
                    ) : (
                        <input
                            type="text"
                            placeholder="Please type your desired URL"
                            value={desiredUrl}
                            onChange={e => setDesiredUrl(e.target.value)}
                            className="input-field"
                            disabled // Disable the input field
                        />
                    )}
                    <button onClick={generateShortUrl}>Generate Shorten URL</button>
                </div>
                <p>Shortened URL: {shortUrl}</p>
            </div>
            <Footer />
        </>
    );
}

export default URLShortenComponent;
