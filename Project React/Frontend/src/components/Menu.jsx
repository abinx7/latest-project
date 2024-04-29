import React, { useState, useEffect } from "react";
import {
    Box,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
    Button
} from "@mui/material";
import { Link } from "react-router-dom"; // Import Link
import axios from "axios";

const Val = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null); // To track error

    useEffect(() => {
        // Fetch data from the server endpoint
        axios.get("http://localhost:3007/view")
            .then(response => {
                setData(response.data); // Set fetched data to state
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setError('Failed to load menu items. Please try again later.'); // Set error message
            });
    }, []);

    return (
        <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
            {error && <Typography color="error">{error}</Typography>} {/* Display error message if any */}
            {data.map((val, i) => (
                <Card key={val._id} sx={{ maxWidth: 345, margin: 2 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={val.imageUrl}
                            alt={val.fname} // Add alt text for accessibility
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {val.fname}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Price: ${val.fprice}
                            </Typography>
                            <Link to="/Payment" style={{ textDecoration: 'none' }}>
                                <Button variant="contained" color="primary">
                                    Buy Now
                                </Button>
                            </Link>
                        </CardContent>
                    </CardActionArea>
                </Card>
            ))}
        </Box>
    );
};

export default Val;
