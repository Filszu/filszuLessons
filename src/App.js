import {useState} from 'react'
import './App.css';
import {Header, MainSection,ContactSection} from './sections';

import {pageContent} from './constants/content'
import ReviewsSection from './sections/reviews/ReviewsSection';

function App() {
  const [pageTextContent, setPageTextContent] = useState(pageContent['en'])
  // console.log(pageTextContent)

  return (
   <>
    <div className="app">
    
      <Header content={pageTextContent['header']}/>
      <MainSection content={pageTextContent['main']}/>    
      <ReviewsSection content={pageTextContent['reviews']}/>    
      <ContactSection content={pageTextContent['contact']}/>    


    </div>
   </>
  );
}

export default App;
