import React, { useState } from 'react';

const RandomVerse = () => {
  const [verse, setVerse] = useState('');
  const [error, setError] = useState(null);

  // Fetch a random Bible verse
  const fetchRandomVerse = async () => {
    try {
      const response = await fetch('https://labs.bible.org/api/?passage=random&type=json');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      // The API returns an array; we use the first element
      const verseObj = data[0];
      const verseText = `${verseObj.bookname} ${verseObj.chapter}:${verseObj.verse} - ${verseObj.text}`;
      setVerse(verseText);
    } catch (err) {
      console.error('Error fetching random verse:', err);
      setError('Failed to fetch verse.');
    }
  };

  return (
    <div className="random-verse">
      <button onClick={fetchRandomVerse}>Get Random Verse</button>
      {error && <p className="error">{error}</p>}
      {verse && <p className="verse">{verse}</p>}
    </div>
  );
};

export default RandomVerse;
