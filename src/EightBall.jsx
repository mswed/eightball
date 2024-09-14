import { useState } from 'react';
import PropTypes from 'prop-types';
import './EightBall.css';

const EightBall = ({ answers }) => {
  const pickAnswer = () => {
    const answerIdx = Math.floor(Math.random() * answers.length - 1);
    console.log(answerIdx);
    const { msg, color } = answers[answerIdx];

    setMessage(msg);
    setColor(color);
  };

  const [message, setMessage] = useState('Think of a Question');
  const [color, setColor] = useState('black');
  return (
    <>
      <div className={`ball ${color}`} onClick={pickAnswer}>
        <h1>{message}</h1>
      </div>
    </>
  );
};

EightBall.propTypes = {
  answers: PropTypes.array.isRequired,
};
export default EightBall;
