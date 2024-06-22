import React, { useState } from 'react';
import axios from 'axios';
import links from '../../../assets/links.json';

const EditLinks = () => {
  const [message, setMessage] = useState('');
  const [linkList, setLinkList] = useState(
    Array.from(
      { length: 10 },
      (_, i) => links.links[i] || { platform: '', url: '' }
    )
  );

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { name, value } = e.target;
    const updatedLinks = [...linkList];
    updatedLinks[index] = { ...updatedLinks[index], [name]: value };
    setLinkList(updatedLinks);
  };

  const handleSaveLinks = async (e: React.FormEvent) => {
    e.preventDefault();
    const filteredLinks = linkList.filter((link) => link.platform && link.url);
    try {
      await axios.post('/api/save-links', { links: filteredLinks });
      setMessage('Links saved successfully!');
    } catch (error) {
      console.error('Error saving links:', error);
      setMessage('Error saving links');
    } finally {
      setTimeout(() => {
        setMessage('');
      }, 2500);
    }
  };

  return (
    <>
      {linkList.map((link, index) => (
        <span key={index}>
          <p>
            <input
              type="text"
              name="platform"
              placeholder="Link title"
              value={link.platform}
              onChange={(e) => handleInputChange(e, index)}
              style={{ marginRight: '10px' }}
            />
          </p>
          <p>
            <input
              type="text"
              name="url"
              placeholder="URL"
              value={link.url}
              onChange={(e) => handleInputChange(e, index)}
            />
          </p>
        </span>
      ))}
      <button onClick={handleSaveLinks}>Save Links</button>
      {message.length > 0 && <p>{message}</p>}
    </>
  );
};

export default EditLinks;
