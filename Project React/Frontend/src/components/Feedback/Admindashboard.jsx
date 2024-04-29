import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Button, Container, Typography, List, ListItem, ListItemText } from '@mui/material';

function Admin() {
  const [menuItems, setMenuItems] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);
  const [menuItem, setMenuItem] = useState({ name: '', description: '', price: '' });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [menuResponse, feedbackResponse] = await Promise.all([
          axios.get('/api/menu'),
          axios.get('/api/feedback')
        ]);

        setMenuItems(menuResponse.data);
        setFeedbacks(feedbackResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleAddMenuItem = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/menu/add', menuItem);
      alert(response.data.message);
      setMenuItems((prevItems) => [...prevItems, menuItem]);
      setMenuItem({ name: '', description: '', price: '' });
    } catch (error) {
      console.error('Error adding menu item:', error);
      alert('Failed to add menu item.');
    }
  };

  return (
    <Container>
      <Typography variant="h4">Admin Dashboard</Typography>

      <Typography variant="h5">Add Menu Item</Typography>
      <form onSubmit={handleAddMenuItem}>
        <div>
          <TextField
            label="Name"
            value={menuItem.name}
            onChange={(e) => setMenuItem({ ...menuItem, name: e.target.value })}
            required
            margin="normal"
          />
        </div>
        <div>
          <TextField
            label="Description"
            value={menuItem.description}
            onChange={(e) => setMenuItem({ ...menuItem, description: e.target.value })}
            required
            margin="normal"
          />
        </div>
        <div>
          <TextField
            label="Price"
            type="number"
            value={menuItem.price}
            onChange={(e) => setMenuItem({ ...menuItem, price: e.target.value })}
            required
            margin="normal"
          />
        </div>
        <Button type="submit" variant="contained" color="primary">
          Add Menu Item
        </Button>
      </form>

      <Typography variant="h5">Menu Items</Typography>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item._id}>
            <ListItemText primary={`${item.name} - ${item.description} - $${item.price}`} />
          </ListItem>
        ))}
      </List>

      <Typography variant="h5">Feedbacks</Typography>
      <List>
        {feedbacks.map((feedback) => (
          <ListItem key={feedback._id}>
            <ListItemText primary={`${feedback.user}: ${feedback.comment}`} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default Admin;