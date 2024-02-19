const BASE_URL = 'https://api.datamuse.com/'

const fetchSynonyms = (word: string, setSynonyms: Function, setIsLoading: Function) => {
  setIsLoading(true)
  fetch(`${BASE_URL}words?rel_syn=${word}`)
    .then((response) => response.json())
    .then((data) => {
      setSynonyms(data);
      setIsLoading(false)
    })
}

export default fetchSynonyms;