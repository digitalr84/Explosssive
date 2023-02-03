import { useEffect, FC,useCallback  } from 'react'
import './App.css'
import { Button } from './components/Button';

const App: FC =()=> {
  /*useEffect(() => {
    const fetchServerData = async () => {
      const url = `http://localhost:${__SERVER_PORT__}`
      const response = await fetch(url)
      const data = await response.json()
      console.log(data)
    }

    fetchServerData()
  }, []);*/

 const handleButtonClick = useCallback(() => {
    console.log('Clicked event');
  }, []);
  return (
    <div className="App">
      <h1>Вот тут будет жить ваше приложение :)</h1>
      <Button onClick={handleButtonClick} className="button_raspisnay" type="submit"></Button>
      
    </div>
    )
}

export default App

//<Button onClick={handleButtonClick} regular type="submit" disabled={loading}>