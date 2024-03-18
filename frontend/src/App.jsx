import MovieForm from './components/MovieForm/MovieForm';
import MovieList from './components/MovieList/MovieList';
import Filter from './components/Filter/Filter';
import './App.css';

function App() {
    return (
        <div className="app">
            <header className="app-header">
                <h1>Movie Library App</h1>
            </header>
            <main className="app-main">
                <div className="app-left-column">
                    <MovieForm />
                </div>
                <div className="app-right-column">
                    <Filter />
                    <MovieList />
                </div>
            </main>
        </div>
    );
}

export default App;
