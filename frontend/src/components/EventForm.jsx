import { useState } from 'react';

function EventForm() {
    const [formData, setFormData] = useState({
        name: '',
        date: '',
        location: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/events', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert('Event created successfully!');
                setFormData({ name: '', date: '', location: '' }); // Reset form
            } else {
                alert('Error creating event');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <h2>Register a New Event</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Event Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </label>
                <br />
                <label>
                    Date:
                    <input type="date" name="date" value={formData.date} onChange={handleChange} required />
                </label>
                <br />
                <label>
                    Location:
                    <input type="text" name="location" value={formData.location} onChange={handleChange} required />
                </label>
                <br />
                <button type="submit">Create Event</button>
            </form>
        </div>
    );
}

export default EventForm;
