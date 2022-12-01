import {useState} from 'react'
import './App.css';
import {Header, MainSection,} from './sections';

import {pageContent} from './constants/content'

function App() {
  const [pageTextContent, setPageTextContent] = useState(pageContent['en'])
  // console.log(pageTextContent)

  return (
   <>
    <div className="app">
      <Header content={pageTextContent['header']}/>
      <MainSection content={pageTextContent['main']}/>    

    </div>
   </>
  );
}

export default App;
