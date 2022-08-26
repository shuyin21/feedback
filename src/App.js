import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import { v4 as uuidv4 } from 'uuid';
import AboutPage from './components/AboutPage'
import { FeedbackProvider } from './context/FeedbackContext';

import AboutIconLink from './components/AboutIconLink';


function App() {

  const [feedback, setFeedback] = useState(FeedbackData)

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }


  }
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])

  }
  return (
    <FeedbackProvider>
      <>
        <Header />
        <Router>
          <div className="container">
            <Routes>
              <Route path='/' element={

                <>
                  <FeedbackForm handleAdd={addFeedback} />
                  <FeedbackStats feedback={feedback} />
                  <FeedbackList feedback={feedback} handleDelete={
                    deleteFeedback
                  } />
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
