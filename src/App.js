import {useState} from 'react'
import './App.css';
import {Header, Main} from './sections';

import {pageContent} from './constants/content'

function App() {
  const [pageTextContent, setPageTextContent] = useState(pageContent['en'])
  // console.log(pageTextContent)

  return (
   <>
    <div className="app">
      <Header content={pageTextContent['header']}/>
      <Main/>
      <Main/>
    </div>
   </>
  );
}

export default App;
