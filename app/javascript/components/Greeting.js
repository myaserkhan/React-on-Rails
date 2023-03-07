import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchGreetingObj } from '../redux/greetings/greetings';

function Greeting() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGreetingObj());
  }, [dispatch]);

  const { greeting } = useSelector((state) => state.greetings);

  const generate = () => {
    dispatch(fetchGreetingObj());
  };

  return (
    <div className="greeting-content">
      <h1>{greeting}</h1>
      <button onClick={generate} type="button">Generate new greeting</button>
    </div>
  );
}

export default Greeting;
