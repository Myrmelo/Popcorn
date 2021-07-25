
import './App.css';
import Logo from '../components/Logo'
import Search from '../components/Search'
import Add_movie_button from '../components/Add_movie_button'
import Delete_movie_button from '../components/Delete_movie_button'
import Movie_card from '../components/Movie_card'

function App() {
  return (
    <div className="App">
      <div className="Header">
        <Logo />
      </div>
      <div className="Menu">
        <Search />
        <Add_movie_button />
        <Delete_movie_button />
      </div>
      <div className="Movies">
<Movie_card />
      </div>
      
    </div>
  );
}

export default App;
