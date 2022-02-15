import React from 'react';
import { FaStar } from 'react-icons/fa';

const Rating = ({ rating }) => {
  const totalRating = [];

  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      totalRating.push(
        <li className='star' key={i}>
          <FaStar></FaStar>
        </li>
      );
    } else {
      totalRating.push(
        <li className='star-o' key={i}>
          <FaStar></FaStar>
        </li>
      );
    }
  }
  return (
    <div className='rating'>
      <ul>{totalRating}</ul>
    </div>
  );
};

export default Rating;
