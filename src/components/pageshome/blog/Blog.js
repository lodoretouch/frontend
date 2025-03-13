import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Zamijenite s pravim API URL-om, ako stranica omogućava REST API
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://test-os-amihanovica-os.cms.skole.hr/category/zakoni/dokumenti/');
        
        // Ako stranica nudi API, obradite podatke ovako:
        // const data = response.data;
        // setPosts(data); // Ovdje trebate obraditi podatke prema strukturi odgovora.

        // Ako stranica nije RESTful i morate parsirati HTML:
        const html = response.data;
        console.log(html); // Debugging HTML sadržaja

        // Možete koristiti biblioteku kao cheerio za parsiranje HTML-a
        // (ali za to će biti potrebno koristiti Node.js ili backend rješenje)

      } catch (err) {
        setError('Došlo je do pogreške prilikom dohvaćanja podataka.');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <div>Učitavanje...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Objave</h1>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
