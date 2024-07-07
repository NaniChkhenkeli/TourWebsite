import React, { useEffect, useState } from 'react';
import './main.css';
import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from 'react-icons/hi';
import img1 from '../../Assets/img(1).jpg';
import img2 from '../../Assets/img(2).jpg';
import img3 from '../../Assets/img(3).jpg';
import img4 from '../../Assets/img(4).jpg';
import img5 from '../../Assets/img(5).jpg';
import img6 from '../../Assets/img(6).jpg';
import img7 from '../../Assets/img(7).jpg';
import img8 from '../../Assets/img(8).jpg';
import img9 from '../../Assets/img(9).jpg';
import profile1 from '../../Assets/profile1.jpg';
import profile2 from '../../Assets/profile2.jpg';
import profile3 from '../../Assets/profile3.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';


const Data = [
  {
    id: 1,
    imgSrc: img1,
    destTitle: 'Mestia',
    location: 'Svaneti',
    grade: 'cultural heritage',
    fees: '$500',
    date: new Date(2024, 5, 12),
    description: 'Situated on the southern slopes of the central Caucasus Mountains and surrounded by 3,000-5,000m peaks,highest inhabited area in the Caucasus.',
    bestTimeToVisit: 'Spring to Summer',
    tourGuide: {
      name: 'Nika Pachkhoria',
      experience: '5 years'
    },
    reviews: [
      'Amazing tour! Loved every moment.',
      'A wonderful experience, highly recommend!'
    ],
    questions: [
      { question: 'How long is the trip from Tbilisi?', answer: 'Approximately,needs 8-10 hours.' },
      { question: 'Can I have horse trip?', answer: 'sure! Comfortable shoes, a hat, and you can enjoy.' }
    ]
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: 'Gelati',
    location: 'Imereti',
    grade: 'cultural heritage',
    fees: '$300',
    date: new Date(2024, 4, 2),
    description: 'Founded in 1106,one of the largest medieval Orthodox monasteries, was also a centre of science and education. ',
    bestTimeToVisit: 'Spring to Autumn',
    tourGuide: {
      name: 'Nika Pachkhoria',
      experience: '5 years'
    },
    reviews: [
      'Wonderful place and moanstery.',
      'Amazed of this priceless masterpiece!'
    ],
    questions: [
      { question: 'Can I walk across the forest?', answer: 'Yes, with the leading of guide.' },
      { question: 'how far is Gelati from Tbilisi?', answer: '3-4 hours.' }
    ]
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: 'Bakhmaro',
    location: 'Guria',
    grade: 'relax center',
    fees: '$600',
    date: new Date(2024, 6, 1),
    description: ' village and mountain resort,at 1950 meters above sea level,even higher in altitude than the famous Swiss resorts  ',
    bestTimeToVisit: 'May to September',
    tourGuide: {
      name: 'Nika Pirtshkhalaishvili',
      experience: '9 years'
    },
    reviews: [
      'Amazing tour! Loved every moment.',
      'A wonderful experience, highly recommend!'
    ],
    questions: [
      { question: 'Is there snowfall during winter?', answer: 'Reaches up to 5 meters!.' },
      { question: 'How long does it take?', answer: 'Nearly, 5-6 hours.' }
    ]
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: 'Dadiani Palace',
    location: 'Samegrelo',
    grade: 'Museum',
    fees: '$450',
    date: new Date(2023, 5, 2),
    description: 'was the residency of Dadiani, princes of Samegrelo. It was built in17th century by the prince of Odishi, Levan Dadiani. It is located in the center of Zugdidi. ',
    bestTimeToVisit: 'All season',
    tourGuide: {
      name: 'Neli Akhobadze',
      experience: '7 years'
    },
    reviews: [
      'Samegrelo is amazing! loved the temper of people)).',
      'What a beautiful palace! Love it!'
    ],
    questions: [
      { question: 'Is lunch provided?', answer: 'Yes, lunch is provided.' },
      { question: 'What should I bring?', answer: 'Comfortable shoes, a hat, and a bottle of water.' }
    ]
  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: 'Lake Udziro',
    location: 'Racha',
    grade: 'Backpacking',
    fees: '$650',
    date: new Date(2024, 3, 6),
    description: 'located at an altitude of 2800 m above sea level, with a beautiful view on the Caucasus.hiking route starts from the village Shovi ',
    bestTimeToVisit: 'Summer to September',
    tourGuide: {
      name: 'Lasha Pirtshkhalaishvili',
      experience: '9 years'
    },
    reviews: [
      'Amazing tour! Loved every moment.',
      'A wonderful experience, highly recommend!'
    ],
    questions: [
      { question: 'Can tour be provided in a day?', answer: 'No, requiers more that a day.' },
      { question: 'is the go back route the same?', answer: 'No, after a circle, going down to village Glola.' }
    ]
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: 'Kakheti',
    location: 'Georgia',
    grade: 'cultural relax',
    fees: '$260',
    date: new Date(2024, 1, 2),
    description: 'Traces of human life in Kakheti date back to the Stone Age. "Chakrulo" was introduced to the world from here.',
    bestTimeToVisit: 'All seasons',
    tourGuide: {
      name: 'Neli Akhobadze',
      experience: '5 years'
    },
    reviews: [
      'Amazing wine tour! Loved every glass of wine.',
      'A wonderful Alazani Valley! love the Alazani.'
    ],
    questions: [
      { question: 'Is wine tour available?', answer: 'Of course, place is hometown of wine making.' },
      { question: 'Is there one tour?', answer: 'There is several, according to the interest of you.' }
    ]
  },
  {
    id: 7,
    imgSrc: img7,
    destTitle: 'Adjara',
    location: 'Georgia',
    grade: 'cultural relax',
    fees: '$370',
    date: new Date(2024, 8, 6),
    description: 'historical-geographical site of Georgia,located in the gorge of Adjaratskali,on the coast of the Black Sea. ',
    bestTimeToVisit: 'All seasons',
    tourGuide: {
      name: 'Nika Pachkhoria',
      experience: '5 years'
    },
    reviews: [
      'Amazing tour! Loved every moment.',
      'A wonderful experience, highly recommend!'
    ],
    questions: [
      { question: 'What resorts can i visit?', answer: 'Gonio, Kvariati, Beshumi, Batumi, Kobuleti.' },
      { question: 'Is there botanical garden or park?', answer: 'Sure, as many as you wish!' }
    ]
  },
  {
    id: 8,
    imgSrc: img8,
    destTitle: 'Vardzia',
    location: 'Samtskhe-javakheti',
    grade: 'cultural heritage',
    fees: '$450',
    date: new Date(2024, 2, 2),
    description: 'Monastery complex, carved in a rock, XII-XIII Century Georgian picturesque monument. 1300 meters above sea level.',
    bestTimeToVisit: 'All the time',
    tourGuide: {
      name: 'Lasha Pistskhalaishvili',
      experience: '9 years'
    },
    reviews: [
      'Amazing tour! Loved every rock of the complex! so old!',
      'A wonderful history, so impressive!'
    ],
    questions: [
      { question: 'Is resaturant nearby?', answer: 'Yes, there are many.' },
      { question: 'What time it requires from Tbilisi?', answer: 'approximately, 4-5 hours.' }
    ]
  },
  {
    id: 9,
    imgSrc: img9,
    destTitle: 'Jvari Monastery',
    location: 'Mtskheta-Mtianeti',
    grade: 'cultural heritage',
    fees: '$200',
    date: new Date(2024, 11, 11),
    description: 'VI century church and monastery, located in the east of Mtskheta.first sample of the cross-shaped type churches.',
    bestTimeToVisit: 'All the time',
    tourGuide: {
      name: 'Neli Akhobadze',
      experience: '7 years'
    },
    reviews: [
      'So impressive! ',
      'Beautiful view, beautiful church!'
    ],
    questions: [
      
      { question: 'How many time does it take?', answer: '1-2 hours.' }
    ]
  },
];



const Guides = () => {
  const guidesData = [
    {
      id: 1,
      imgSrc: profile1,
      name: 'Nika Pachkhoria',
      experience: '5 years of experience',
      bio: 'Languages: Georgian/English/Russian. reviews -⭐⭐⭐⭐⭐ ',
      link: 'https://georgiantravelguide.com/en/nika-pachkoria'
    },
    {
      id: 2,
      imgSrc: profile2,
      name: 'Neli Akhobadze',
      experience: '7 years of experience',
      bio: 'Languages: Georgian/Chinese/English. reviews - ⭐⭐⭐⭐⭐',
      link:"https://georgiantravelguide.com/en/neli-akhobadze"

    },
    {
      id: 3,
      imgSrc: profile3,
      name: 'Lasha Pirtskhalaishvili',
      experience: '9 years of experience',
      bio: 'Languages:French/Russian/English. reviesw - ⭐⭐⭐⭐⭐',
      link:"https://georgiantravelguide.com/en/lasha-pirtskalaishvili"

    }
  ];




  return (
    <div className="guidesSection">
      <h3 className="guidesTitle">Meet Our Guides</h3>
      <div className="guidesContent">
        {guidesData.map(({ id, imgSrc, name, experience, bio, link }) => (
          <a key={id} href={link} target="_blank" rel="noopener noreferrer" className="guideLink">
            <div className="guideCard">
              <div className="guideImgDiv">
                <img src={imgSrc} alt={name} className="guideImg" />
              </div>
              <div className="guideInfo">
                <h4 className="guideName">{name}</h4>
                <p className="guideExperience">{experience}</p>
                <p className="guideBio">{bio}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};



const Main = () => {
  

  const [filteredData, setFilteredData] = useState([...Data]);
  const [sortOrder, setSortOrder] = useState('');
  const [showDescription, setShowDescription] = useState(true);
  const [showCountdown, setShowCountdown] = useState(true);
  const [selectedTour, setSelectedTour] = useState(null);
  const [selectedDates, setSelectedDates] = useState({}); 
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setFilteredData(prevData => {
        return prevData.map(tour => {
          const countdown = calculateTimeLeft(selectedDates[tour.id] || tour.date);
          return { ...tour, countdown };
        });
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [selectedDates]);

  const calculateTimeLeft = (date) => {
    if (!date) {
      return null; 
    }
  
    const tourDate = new Date(date);
    if (isNaN(tourDate.getTime())) {
      return null; 
    }
  
    const currentDate = new Date();
    let difference = tourDate.getTime() - currentDate.getTime();
    
    if (difference < 0) {
      difference = 0; 
    }
    
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);
    
    return { days, hours, minutes, seconds };
  };
  

  const handleFilterChange = (e) => {
    const value = e.target.value.toLowerCase();
    setFilteredData(Data.filter(item => item.destTitle.toLowerCase().includes(value) || item.location.toLowerCase().includes(value)));
  };

  const handleSortChange = (e) => {
    const order = e.target.value;
    setSortOrder(order);
    if (order === 'asc') {
      setFilteredData(prevData => [...prevData].sort((a, b) => a.destTitle.localeCompare(b.destTitle)));
    } else if (order === 'desc') {
      setFilteredData(prevData => [...prevData].sort((a, b) => b.destTitle.localeCompare(a.destTitle)));
    } else {
      setFilteredData([...Data]);
    }
  };

 
  const toggleDetails = (id) => {
    setSelectedTour(prevId => (prevId === id ? null : id));
  };
  
  const handleDateChange = (tourId, date) => {
    setSelectedDates(prevDates => ({
      ...prevDates,
      [tourId]: date
    }));
  };
  const toggleDescription = () => {
    setShowDescription(prev => !prev);
  };

  const toggleCountdown = () => {
    setShowCountdown(prev => !prev);
  };



  return (
    <section className={`main container section ${darkMode ? 'dark-mode' : ''}`}>
      <div className='secTitle'>
        <h3 data-aos='fade-right' className='title'>
          Most Visited
        </h3>
      </div>
  
      <div className='filterSortSection'>
        <input type="text" placeholder="Filter by location" onChange={handleFilterChange} className='filterInput' />
        <select onChange={handleSortChange} value={sortOrder} className='sortSelect'>
          <option value="">Sort by destination</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
  
      <div className='visibilitySettings'>
        <label>
          <input type="checkbox" checked={showDescription} onChange={toggleDescription} />
          Show Description
        </label>
        <label>
          <input type="checkbox" checked={showCountdown} onChange={toggleCountdown} />
          Show Countdown
        </label>
      </div>
  
      <div className='secContent'>
        {filteredData && filteredData.map((tour) => {
          const {
            id, imgSrc, destTitle, location, grade, fees, description, bestTimeToVisit,
            tourGuide, reviews, questions, countdown
          } = tour;
  
          return (
            <div key={id}  className={`singleDestination ${selectedTour === id ? 'expanded' : ''}`}>
              <div className='imgDiv'>
                <img src={imgSrc} alt={destTitle} />
              </div>
  
              <div className='cardInfo'>
                <h4 className='destTitle'>{destTitle}</h4>
                <span className='continent flex'>
                  <HiOutlineLocationMarker className='icon' />
                  <span className='name'>{location}</span>
                </span>
  
                <div className='fees flex'>
                  <div className='grade'>
                    <span>{grade}<small>5⭐</small></span>
                  </div>
                  <div className='price'>
                    <h5>{fees}</h5>
                  </div>
                </div>
                {showDescription && (
                  <p className='description'>{description}</p>
                )}
  
                {showCountdown && countdown && (
                  <div className="countdown">
                    <h5>Tour Date Countdown</h5>
                    <div>
                      {countdown.days} days, {countdown.hours} hours, {countdown.minutes} minutes, {countdown.seconds} seconds
                    </div>
                  </div>
                )}
  
                <button onClick={() => toggleDetails(id)} className='showDetailsButton'>
                  {selectedTour === id ? 'Hide Details' : 'Show Details'}
                </button>
  
                {selectedTour === id && (
                  <div className={`tourDetails ${darkMode ? 'dark-text' : ''}`}>
                    <p><strong>Best Time to Visit:</strong> {bestTimeToVisit}</p>
                    <p><strong>Tour Guide:</strong> {tourGuide.name} ({tourGuide.experience} of experience)</p>
                    <h5>Reviews:</h5>
                    <ul>
                      {reviews.map((review, index) => (
                        <li key={index}>{review}</li>
                      ))}
                    </ul>
                    <h5>Common Questions:</h5>
                    <ul>
                      {questions.map((q, index) => (
                        <li key={index}><strong>{q.question}</strong> {q.answer}</li>
                      ))}
                    </ul>
                    <label>
                      Change Tour Date:
                      <input type="date" onChange={(e) => handleDateChange(id, e.target.value)} />
                    </label>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
  
      <Guides />
    </section>
  );
};

export default Main;
