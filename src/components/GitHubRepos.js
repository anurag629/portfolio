// src/components/GitHubRepos.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './GitHubRepos.css';

const GitHubRepos = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get(
          'https://api.github.com/users/anurag629/repos',
        );

        // sort the repositories by the number of stars and forks
        response.data.sort(
          (a, b) =>
            b.stargazers_count +
            b.forks_count -
            (a.stargazers_count + a.forks_count),
        );

        setRepos(response.data);
      } catch (error) {
        console.error('Error fetching repositories:', error);
      }
    };

    fetchRepos();


  }, []);

  return (
    <div className="github-repos">
        <h2>Popular GitHub Repositories</h2>
      <div className="repos-list">
        {repos.slice(0, 6).map((repo) => (
          <div key={repo.id} className="repo-card">
            <h3>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                {repo.name}
              </a>
            </h3>
            <p>{repo.description}</p>
            <div className="repo-stats">
              <span>⭐ {repo.stargazers_count}</span>
              <span>🍴 {repo.forks_count}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GitHubRepos;
