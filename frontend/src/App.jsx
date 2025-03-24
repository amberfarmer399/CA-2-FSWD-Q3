import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import Navigation from './components/Navigation';
import EventForm from './components/EventForm';
import EventList from './components/EventList';

const App = () => {
  const [events, setEvents] = useState([]);

  const addEvent = (newEvent) => {
    setEvents((prevEvents) => [...prevEvents, newEvent]);
  };

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<EventList events={events} />} />
        <Route path="/register" element={<EventForm onAddEvent={addEvent} />} />
      </Routes>
    </Router>
  );
};

export default App;
