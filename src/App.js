import {useState} from 'react'
import './App.css';
import {Header, MainSection,ContactSection, AboutMeSection} from './sections';

import {pageContent} from './constants/content'
import ReviewsSection from './sections/reviews/ReviewsSection';

function App() {
  const browserLang = navigator.language || navigator.userLanguage;
  console.log(browserLang);

  const userLang=browserLang=="pl"?"pl":"en";
  const [pageTextContent, setPageTextContent] = useState(pageContent['en'])
  // console.log(pageTextContent)

  return (
   <>
    <div className="app">
    
      <AboutMeSection content={pageTextContent['aboutMe']}/>
      <Header content={pageTextContent['header']}/>
      <MainSection content={pageTextContent['main']}/>    
      <AboutMeSection content={pageTextContent['aboutMe']}/>
      <ReviewsSection content={pageTextContent['reviews']}/>    
      <ContactSection content={pageTextContent['contact']}/>    


    </div>
   </>
  );
}

export default App;
