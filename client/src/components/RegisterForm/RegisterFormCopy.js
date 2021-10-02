// import React, { useEffect, useState } from 'react';
// import '../../styles/RegisterForm.css';

// // import useFetch from '../../Hooks/useFetch.js';

// export default function RegisterForm() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   function handleEmailInput(e) {
//     setEmail(e.target.value);
//   }

//   function handlePasswordInput(e) {
//     setPassword(e.target.value);
//   }

//   function handleFormSubmit(e) {
//     e.preventDefault();
//     setIsLoading(true);
//     // Post request example
//     fetch('myUrl', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         name: name,
//         password: password,
//       }),
//     })
//       .then(response => response.json())
//       .then(data => {
//         console.log(data);
//       })
//       .catch(error => console.log(error))
//       .finally(() => {
//         setIsLoading(false);
//       });
//     setEmail('');
//     setPassword('');
//   }

//   const switchers = [...document.querySelectorAll('.switcher')];

//   switchers.forEach(item => {
//     item.addEventListener('click', function () {
//       switchers.forEach(item =>
//         item.parentElement.classList.remove('is-active')
//       );
//       this.parentElement.classList.add('is-active');
//     });
//   });

//   return (
//     <>
//       {isLoading && <p>Loading...</p>}
//       {!isLoading && (
//         <form onFormSubmit={handleFormSubmit}>
//           <div className="forms-section">
//             <div className="forms">
//               <div className="form-wrapper is-active">
//                 <button type="button" className="switcher switcher-login">
//                   Login
//                   <span className="underline"></span>
//                 </button>
//                 <form className="form form-login">
//                   <fieldset>
//                     <legend>
//                       Please, enter your email and password for login.
//                     </legend>
//                     <div className="input-block">
//                       <label htmlFor="input-email">E-mail</label>
//                       <input
//                         id="input-email"
//                         type="text"
//                         required
//                         placeholder="Email"
//                         name="email"
//                         value={email}
//                         onChange={handleEmailInput}
//                       ></input>
//                     </div>
//                     <div className="input-block">
//                       <label htmlFor="input-password">Password</label>
//                       <input
//                         id="input-password"
//                         type="text"
//                         required
//                         placeholder="Password"
//                         name="password"
//                         value={password}
//                         onChange={handlePasswordInput}
//                       />
//                     </div>
//                   </fieldset>
//                   <button type="submit" className="btn-login">
//                     Login
//                   </button>
//                 </form>
//               </div>
//               <div className="form-wrapper">
//                 <button type="button" className="switcher switcher-signup">
//                   Sign Up
//                   <span className="underline"></span>
//                 </button>
//                 <form className="form form-signup">
//                   <fieldset>
//                     <legend>
//                       Please, enter your email, password and password
//                       confirmation for sign up.
//                     </legend>
//                     <div className="input-block">
//                       <label htmlFor="signup-email">E-mail</label>
//                       <input
//                         id="signup-email"
//                         type="email"
//                         required
//                         value={email}
//                         onChange={handleEmailInput}
//                       ></input>
//                     </div>
//                     <div className="input-block">
//                       <label htmlFor="signup-password">Password</label>
//                       <input
//                         id="signup-password"
//                         type="password"
//                         required
//                       ></input>
//                     </div>
//                     <div className="input-block">
//                       <label htmlFor="signup-password-confirm">
//                         Confirm password
//                       </label>
//                       <input
//                         id="signup-password-confirm"
//                         type="password"
//                         required
//                       ></input>
//                     </div>
//                   </fieldset>
//                   <button type="Submit" class="btn-signup" disabled={isLoading}>
//                     Continue
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </form>
//       )}
//     </>
//   );
// }
