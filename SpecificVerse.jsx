import React, { useState } from 'react';

const SpecificVerse = ({ passage }) => {
  const [verse, setVerse] = useState('');
  const [error, setError] = useState(null);

  // Fetch the specific Bible verse based on the passage prop
  const fetchSpecificVerse = async () => {
    try {
      const url = `https://labs.bible.org/api/?passage=${encodeURIComponent(passage)}&type=json`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      const verseObj = data[0];
      const verseText = `${verseObj.bookname} ${verseObj.chapter}:${verseObj.verse} - ${verseObj.text}`;
      setVerse(verseText);
    } catch (err) {
      console.error('Error fetching specific verse:', err);
      setError('Failed to fetch specific verse.');
    }
  };

  return (
    <div className="specific-verse">
      <h2>{passage}</h2>
      <button onClick={fetchSpecificVerse}>Get {passage}</button>
      {error && <p className="error">{error}</p>}
      {verse && <p className="verse">{verse}</p>}
    </div>
  );
};

export default SpecificVerse;
