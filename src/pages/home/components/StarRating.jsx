import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'; // Example with React Icons

export default function StarRating({ rating }) {
    const maxStars = 5;
    const starRating = rating * maxStars;
    const stars = [];

    for (let i = 1; i <= maxStars; i++) {
        if (i <= starRating) {
            // Display a full star if the current index is less than or equal to the rating
            stars.push(<FaStar key={i} color="#ffc107" />);
        } else if (i === Math.ceil(starRating) && starRating % 1 !== 0) {
            // Display a half star if it's a fractional rating
            stars.push(<FaStarHalfAlt key={i} color="#ffc107" />);
        } else {
            // Display an empty star
            stars.push(<FaRegStar key={i} color="#e4e5e9" />);
        }
    }

    return <div className="flex flex-row">{stars}</div>;
};