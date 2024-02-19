import { useState } from 'react'
import './App.css'
import fetchSynonyms from './api/fetchSynonyms'

type Synonym = {
  word: string,
  score: number,
}

function App() {
 const [word, setWord] = useState<string>('')
 const [synonyms, setSynonyms] = useState<Synonym[]>([])
 const [isSubtmitted, setIsSubmitted] = useState<boolean>(false)
 const [isLoading, setIsLoading] = useState<boolean>(false)

 const handleFetchSynonynms = (e: React.FormEvent) => {
  e.preventDefault()
  fetchSynonyms(word, setSynonyms, setIsLoading)
  setIsSubmitted(true)
 }

 const handleSynonymClicked = (newWord: string) => {
  setWord(newWord)
  fetchSynonyms(newWord, setSynonyms, setIsLoading)
 }

  return (
   <div className='App'>
    <form onSubmit={handleFetchSynonynms}>
      <label htmlFor='word-input'>Your word</label>
      <input value={word} onChange={(e) => setWord(e.target.value)} id='word-input' ></input>
     <button>Submit</button>
    </form>

    {isLoading && (
      <div className="spinner">
        <div className="rect1"></div>
        <div className="rect2"></div>
        <div className="rect3"></div>
        <div className="rect4"></div>
        <div className="rect5"></div>
      </div>
    )}

    <ul>
    {synonyms.length > 0 && (
      synonyms.map((synonim) => {
        return (
          <li onClick={() => handleSynonymClicked(synonim.word)} key={synonim.word}>{synonim.word}</li>
        )
      })
     )}
      {isSubtmitted && !isLoading && synonyms.length <= 0 && (
      <div>Sorry, no synonyms were found for this word.</div>
     )}
    </ul>
   </div>
  )
}

export default App
