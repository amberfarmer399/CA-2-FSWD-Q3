import EventItem from './EventItem';
import { useEffect, useState } from 'react';

function EventList() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        try {
            const response = await fetch('http://localhost:5000/events');
            const data = await response.json();
            setEvents(data);
        } catch (error) {
            console.error('Error fetching events:', error);
        }
    };

    return (
        <div>
            <h2>All Events</h2>
            {events.length === 0 ? (
                <p>No events available.</p>
            ) : (
                events.map((event) => <EventItem key={event._id} event={event} />)
            )}
        </div>
    );
}

export default EventList;
