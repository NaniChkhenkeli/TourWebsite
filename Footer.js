import React, { useEffect } from 'react';
import './footer.css';
import { FiChevronRight, FiSend } from 'react-icons/fi';
import { AiFillInstagram, AiOutlineTwitter, AiFillYoutube } from 'react-icons/ai';
import { FaTripadvisor } from 'react-icons/fa';
import logo from '../../Assets/logo.png';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className='footer'>
      <div className='backgroundDiv'>{}</div>

      <div className='secContent container'>
        <div className='contactDiv flex'>
          <div data-aos='fade-up' className='text'>
            <small>contact us📧</small>
          </div>

          <div className='inputDiv flex'>
            <input data-aos='fade-up' type='text' placeholder='Enter Email Address' />
            <button data-aos='fade-up' className='btn flex' type='submit'>
              SEND <FiSend className='icon' />
            </button>
          </div>
        </div>

        <div className='footerCard flex'>
          <div className='footerIntro flex'>
            <div className='logoDiv'>
              <a href='#home' className='logo flex'>
                <img src={logo} alt='GeoTours Logo' className='icon' />
                GeoTours.
              </a>
            </div>

            <div data-aos='fade-up' className='footerParagraph'>
              for more about us, please visit the following platforms.
            </div>

            <div data-aos='fade-up' className='footerSocials'>
              <AiOutlineTwitter className='icon' />
              <AiFillYoutube className='icon' />
              <AiFillInstagram className='icon' />
              <FaTripadvisor className='icon' />
            </div>
          </div>

          <div className='footerLinks grid'>
            <div data-aos='fade-up' data-aos-duration='3000' className='linkGroup'>
              <span className='groupTitle'>Articles</span>
              <ul>
                <li className='footerList flex'>
                  <FiChevronRight className='icon' /> Hiking
                </li>
                <li className='footerList flex'>
                  <FiChevronRight className='icon' /> Culinary
                </li>
                <li className='footerList flex'>
                  <FiChevronRight className='icon' /> Culture
                </li>
                <li className='footerList flex'>
                  <FiChevronRight className='icon' /> History
                </li>
                <li className='footerList flex'>
                  <FiChevronRight className='icon' /> Extreme Sport
                </li>
                
              </ul>
            </div>

            <div data-aos='fade-up' data-aos-duration='4000' className='linkGroup'>
              <span className='groupTitle'>Destinations</span>
              <ul>
                <li className='footerList flex'>
                  <FiChevronRight className='icon' /> Adventure 
                </li>
                <li className='footerList flex'>
                  <FiChevronRight className='icon' /> Nature
                </li>
                <li className='footerList flex'>
                  <FiChevronRight className='icon' /> Food Place
                </li>
                <li className='footerList flex'>
                  <FiChevronRight className='icon' /> Agrotourism
                </li>
                <li className='footerList flex'>
                  <FiChevronRight className='icon' /> degustation
                </li>
              </ul>
            </div>
          </div>
          <div className='footerDiv flex'>
            <small>BEST TRAVEL WEBSITE THEME</small>
            <small>COPYRIGHTS RESERVED - Kutaisi 2024</small>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
