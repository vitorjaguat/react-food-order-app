import React from 'react';
import mealsImage from '../../assets/meals.jpeg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

export default function Header(props) {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>MichuíMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="Hummmm..." />
      </div>
    </React.Fragment>
  );
}
