import React from "react"
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/home/home';
import Movie from './pages/movieDetail/movieDetail';
import MovieList from "./components/movieList/movieList";
import Animelist from "./components/Animelist/animelist";

      // func       //files

function App() {
  return (
    <div className="App">
      <Router>
          <Header/>
          <Routes> 
              <Route index element = {<Home/>}></Route>
              <Route path="movie/:id" element = {<Movie/>}></Route>             
              <Route path="movies/:type" element = {<MovieList/>}></Route>
              <Route path="anime" element = {<Animelist/>}></Route>
              <Route path="/*" element = {<h1> Error</h1>}></Route>
          </Routes>
          <Footer/>
      </Router>
    </div>
  );
}

// router is the parent component store all the components
// routes is needed for keeping all routes together and render one at a time otherwise many routes could get rendered.
// route renders the html or components. 
// https://www.javatpoint.com/react-router

// https://www.w3schools.com/js/js_arrow_function.asp  

// HOOKS : https://www.youtube.com/watch?v=gv9ugDJ1ynU



export default App; 