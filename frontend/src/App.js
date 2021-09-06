import { useState } from 'react';
import { Link, BrowserRouter, Route, Switch } from 'react-router-dom'

const Show = () => {
  const [dni, setDni] = useState('')
  const [data, setData] = useState({})
  const fetchApi = () => {
    fetch('/api/'+dni)
      .then(res=>res.json())
      .catch(console.error)
      .then(setData)
  }
  console.log(data)
  return (
    <div>
      <input type="text" onChange={e=>setDni(e.target.value)} value={dni} />
      <button onClick={fetchApi}>Enviar</button>
      <strong>{JSON.stringify(data)}</strong>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <div>
              <h1>Home!</h1>
              <Show />
            </div>
          </Route>
          <Route path="/contact"><h1>Contact!</h1></Route>
          <Route><h1>Idk... wtvr!</h1></Route>
        </Switch>
      </main>
      FOoter
    </BrowserRouter>
  );
}

export default App;
