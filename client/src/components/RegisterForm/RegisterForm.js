import React, { useEffect, useState } from 'react';

// import useFetch from '../../Hooks/useFetch.js';

export default function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function handleEmailInput(e) {
    setEmail(e.target.value);
  }

  function handlePasswordInput(e) {
    setPassword(e.target.value);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    // Post request example
    fetch('myUrl', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setIsLoading(false);
      });
    setEmail('');
    setPassword('');
  }

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {!isLoading && (
        <form onFormSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="input-email">Email:</label>
            <input
              id="input-email"
              type="text"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleEmailInput}
            ></input>
          </div>
          <div>
            <label htmlFor="input-password">Password: </label>
            <input
              id="input-password"
              type="text"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handlePasswordInput}
            ></input>
          </div>
          <div>
            <input type="Submit" value="Register" disabled={isLoading} />
          </div>
        </form>
      )}
    </>
  );
}
