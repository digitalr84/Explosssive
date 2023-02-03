import { FC, useCallback } from 'react'
import './App.css'
import { Button } from './components/Button'
import { Input } from './components/Input'

import { BrowserRouter } from 'react-router-dom'

import { Route, Link, RouteComponentProps } from 'react-router-dom'

const App: FC = () => {
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
    console.log('Clicked event')
  }, [])
  const handleInput = useCallback((value: string) => {
    console.log(value)
  }, [])
  return (
    <div className="App">
      <h1>Вот тут будет жить ваше приложение :)</h1>
      <Button
        onClick={handleButtonClick}
        className="button_raspisnay"
        type="submit"></Button>
      <Input onChange={handleInput} name="email" value="wwwwww" />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
    </div>
  )
}

export default App
