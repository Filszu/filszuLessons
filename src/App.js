import {useState} from 'react'
import './App.css';
import {Header} from './sections';

import {pageContent} from './constants/content'

function App() {
  const [pageTextContent, setPageTextContent] = useState(pageContent['en'])
  // console.log(pageTextContent)

  return (
   <>
    <div className="app">
      <Header content={pageTextContent['header']}/>
      
    </div>
   </>
  );
}

export default App;
