import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import FeedbackList from './components/FeedbackList';

import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';

import AboutPage from './components/AboutPage'
import { FeedbackProvider } from './context/FeedbackContext';

import AboutIconLink from './components/AboutIconLink';


function App() {


  return (
    <FeedbackProvider>
      <>
        <Header />
        <Router>
          <div className="container">
            <Routes>
              <Route path='/' element={

                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                  <AboutIconLink />
                </>
              }

              >


              </Route>
              <Route path='/about/*' element={<AboutPage />} />
            </Routes>

          </div>

        </Router>

      </>
    </FeedbackProvider>
  );
}

export default App;
