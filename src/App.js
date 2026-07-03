import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import store from './utils/Store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import SearchResultsPage from './components/SearchResultsPage';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Body />}>
              <Route index element={<MainContainer />} />
              <Route path="watch" element={<WatchPage />} />
              <Route path="results" element={<SearchResultsPage />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
