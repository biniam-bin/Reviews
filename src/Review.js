import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0)
  const {id, name, job, image, text} = people[index]

  const checkPerson = (number) => {
    if (number > people.length - 1){
      return 0
    }
    if (number < 0){
      return people.length - 1
    }
    return number
  }
  
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length)
    if (randomNumber === index){
      randomNumber += 1
    }
    setIndex(checkPerson(randomNumber))
  }
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1
      return checkPerson(newIndex)
    })
  }
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1
      return checkPerson(newIndex)
    })
  }
  return (
    <article>
      <div className="img-container">
        <img src={image} className="person-img" alt="" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="btn-center">

        <div className="button-continer">
          <button onClick={prevPerson} className="prev-btn">
            <FaChevronLeft/>
          </button>
          <button onClick={nextPerson} className="next-btn">
            <FaChevronRight/>
          </button>
        </div>

        <button className="random-btn" onClick={randomPerson}>Surprize me</button>
      </div>
    </article>
  );
};

export default Review;
