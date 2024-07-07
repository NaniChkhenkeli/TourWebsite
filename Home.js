import React, { useEffect, useState, useRef } from 'react';
import './home.css';
import background2 from '../../Assets/background2.png';
import background from '../../Assets/background.png';
import background1 from '../../Assets/background1.png';

import { GrLocation } from 'react-icons/gr';
import { FiCalendar, FiDollarSign, FiArrowRight } from 'react-icons/fi';
import { AiOutlineFacebook, AiOutlineInstagram } from 'react-icons/ai';
import { SiTripadvisor } from 'react-icons/si';
import Aos from 'aos';
import 'aos/dist/aos.css';

const destinations = ['Kutaisi', 'Samegrelo', 'Racha', 'Svaneti', 'Guria', 'Adjara'];
const backgrounds = [background2, background, background1];

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [price, setPrice] = useState(500);
  const [destination, setDestination] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const suggestionBoxRef = useRef(null);
  const [currentBackground, setCurrentBackground] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleSearch = () => {
    alert('Our team will organize the private tour! Check your email within 3 days!');
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleDestinationChange = (e) => {
    setDestination(e.target.value);
    setShowSuggestions(true);
  };

  const handleSuggestionClick = (suggestion) => {
    setDestination(suggestion);
    setShowSuggestions(false);
  };

  const handleClickOutside = (event) => {
    if (suggestionBoxRef.current && !suggestionBoxRef.current.contains(event.target)) {
      setShowSuggestions(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentBackground((prevBackground) => (prevBackground + 1) % backgrounds.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const handleFacebookClick = () => {
    window.open('https://www.facebook.com/login.php');
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/accounts/login/');
  };

  const handleTripadvisorClick = () => {
    window.open('https://www.tripadvisor.com/Registration');
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <section
      className='home'
      style={{ backgroundImage: `url(${backgrounds[currentBackground]})` }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className='overlay'></div>
      <div className='homeContent container'>
        <div className='textDiv'>
          <h1 data-aos="fade-up" className='homeTitle'>
            Welcome to Georgia
          </h1>
        </div>
        <div data-aos="fade-up" className='cardDiv grid'>
          <div className='destinationInput' ref={suggestionBoxRef}>
            <label htmlFor="city">Search your destination:</label>
            <div className='input flex'>
              <GrLocation className="icon" />
              <input
                type="text"
                placeholder='Enter name here...'
                value={destination}
                onChange={handleDestinationChange}
                onFocus={() => setShowSuggestions(true)}
              />
              {showSuggestions && (
                <div className='suggestions'>
                  {destinations.filter(suggestion => suggestion.toLowerCase().includes(destination.toLowerCase())).map((suggestion, index) => (
                    <div
                      key={index}
                      className='suggestion'
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      {suggestion}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className='dataInput'>
            <label htmlFor="date">Select your date:</label>
            <div className='input flex'>
              <FiCalendar className="icon" />
              <input type="date" />
            </div>
          </div>
          <div className='priceInput'>
            <div className='label_total flex'>
              <FiDollarSign className="icon" />
              <label htmlFor="price">Max price:</label>
              <h3 className='total'>${price}</h3>
            </div>
            <div className='input flex'>
              <input
                type="range"
                max="500"
                min="30"
                value={price}
                onChange={handlePriceChange}
              />
            </div>
          </div>
          <div className='searchoptions flex' onClick={handleSearch}>
            <span>BOOK NOW <FiArrowRight className="icon" /></span>
          </div>
        </div>
        <div className='homeFooterIcons flex'>
          <div className='leftIcons'>
            <AiOutlineFacebook className="icon" onClick={handleFacebookClick} />
            <AiOutlineInstagram className="icon" onClick={handleInstagramClick} />
            <SiTripadvisor className='icon' onClick={handleTripadvisorClick} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
