import React, { useState } from 'react';
import './navbar.css';
import logo from '../../Assets/logo.png';
import { AiFillCloseCircle } from 'react-icons/ai';
import { TbGridDots } from 'react-icons/tb';

function Navbar() {
  const [active, setActive] = useState('navBar');
  const [theme, setTheme] = useState('light-mode');
  const [language, setLanguage] = useState('en');

  const showNav = () => {
    setActive('navBar activeNavbar');
  };

  const removeNavbar = () => {
    setActive('navBar');
  };

  const toggleTheme = () => {
    setTheme(theme === 'light-mode' ? 'dark-mode' : 'light-mode');
    document.documentElement.classList.toggle('dark');
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const openSignUpWindow = () => {
    const signUpWindow = window.open('', '_blank', 'width=600,height=600');
    signUpWindow.document.write(`
      <html>
        <head>
          <style>
            body { 
              font-family: Arial, sans-serif; 
              padding: 20px; 
              background-color: #f4f4f4; 
            }
            .sign-up-container { 
              display: flex; 
              flex-direction: column; 
              max-width: 300px; 
              margin: auto; 
              background-color: #ffffff; 
              padding: 20px; 
              border-radius: 10px; 
              box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); 
            }
            .sign-up-container h2 {
              text-align: center; 
            }
            .sign-up-container label { 
              margin-top: 10px; 
            }
            .sign-up-container input { 
              padding: 8px; 
              margin-top: 5px; 
              border: 1px solid #ccc; 
              border-radius: 5px; 
            }
            .sign-up-container button { 
              margin-top: 20px; 
              padding: 10px; 
              background-color: #007bff; 
              color: white; 
              border: none; 
              cursor: pointer; 
              border-radius: 5px; 
              transition: background-color 0.3s; 
            }
            .sign-up-container button:hover { 
              background-color: #0056b3; 
            }
            .sign-up-container .sign-in-link { 
              margin-top: 10px; 
              text-align: center; 
            }
            .welcome-message { 
              margin-top: 20px; 
              color: #007bff; 
              font-weight: bold; 
              text-align: center; 
            }
          </style>
        </head>
        <body>
          <div class="sign-up-container">
            <h2>Sign Up</h2>
            <form id="signUpForm">
              <div>
                <label htmlFor="firstName">First Name:</label>
                <input type="text" id="firstName" name="firstName" required />
              </div>
              <div>
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" id="lastName" name="lastName" required />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div>
                <label htmlFor="password"> Password : </label>
                <input type="password" id="password" name="password" required />
              </div>
              <button type="submit">Sign Up</button>
            </form>
            <div class="welcome-message" id="welcomeMessage" style="display: none;">Welcome! We have a discount for you!</div>
          </div>
          <script>
            document.getElementById('signUpForm').onsubmit = function(event) {
              event.preventDefault();
              document.getElementById('signUpForm').style.display = 'none';
              document.getElementById('welcomeMessage').style.display = 'block';
            };
          </script>
        </body>
      </html>
    `);
  };

  const texts = {
    en: {
      home: 'Home',
      hotels: 'Hotels',
      transportation: 'Transportation',
      whatToDo: 'What to Do',
      tours: 'Tours',
      articles: 'Articles',
      signUp: 'Sign Up',
    },
    ru: {
      home: 'Главная',
      hotels: 'Гостиницы',
      transportation: 'Транспорт',
      whatToDo: 'Что делать',
      tours: 'Туры',
      articles: 'Статьи',
      signUp: 'Зарегистрироваться',
    },
    ka: {
      home: 'მთავარი',
      hotels: 'სასტუმროები',
      transportation: 'ტრანსპორტი',
      whatToDo: 'რა გავაკეთოთ',
      tours: 'ტურები',
      articles: 'სტატიები',
      signUp: 'რეგისტრაცია',
    },
  };

  return (
    <section className={`navBarSection ${theme}`}>
      <header className="header flex">
        <div className='logoDiv'>
          <a href="#" className='logo flex'>
            <img src={logo} alt="Logo" className="logoImage" />
            <h1>GeoTours</h1>
          </a>
        </div>

        <div className={active}>
          <ul className='navLists grid'>
            <li className='navItem'>
              <a href='#home' className='navLink'>{texts[language].home}</a>
            </li>
            <li className='navItem'>
              <a href='#hotels' className='navLink'>{texts[language].hotels}</a>
            </li>
            <li className='navItem'>
              <a href='#transportation' className='navLink'>{texts[language].transportation}</a>
            </li>
            <li className='navItem'>
              <a href='#whatToDo' className='navLink'>{texts[language].whatToDo}</a>
            </li>
            <li className='navItem'>
              <a href='#tours' className='navLink'>{texts[language].tours}</a>
            </li>
            <li className='navItem'>
              <a href='#articles' className='navLink'>{texts[language].articles}</a>
            </li>
            <button className={`btn ${theme}`} onClick={openSignUpWindow}>
              {texts[language].signUp}
            </button>
          </ul>

          <div onClick={removeNavbar} className='closeNavBar'>
            <AiFillCloseCircle className='icon' />
          </div>
        </div>

        <div className='toggleContainer'>
          <button onClick={toggleTheme} className='toggleBtn'>
            {theme === 'light-mode' ? 'Dark Mode' : 'Light Mode'}
          </button>
          <select onChange={handleLanguageChange} value={language} className={`languageSelect ${theme}`}>
            <option value="en">English</option>
            <option value="ru">Русский</option>
            <option value="ka">ქართული</option>
          </select>
          <div onClick={showNav} className='toggleNavbar'>
            <TbGridDots className='icon' />
          </div>
        </div>
      </header>
    </section>
  );
}

export default Navbar;
