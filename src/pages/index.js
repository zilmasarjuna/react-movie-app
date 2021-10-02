import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from 'components/pages/Header/Header'

import MovieList from './MovieList'
import MovieDetail from './MovieDetail'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <React.Suspense fallback="Loading">
          <Switch>
            <Route exact path="/" component={MovieList} />
            <Route exact path="/movie/:id" component={MovieDetail} />

          </Switch>
         </React.Suspense>
      </Router>
    </div>
  );
}

export default App;
