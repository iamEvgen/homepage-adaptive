import React from 'react';
import styles from './Head.module.scss';
import classNames from 'classnames';

function Head() {
  const arrow = require('../img/arrow.png');

  return (
    <header className={styles.Head}>
      <div className={styles.Head__logo}>LOGO</div>
      <nav>
        <ul className={styles.Head__nav}>
          <li className={styles.Head__navItem}>Проекты</li>
          <li className={styles.Head__navItem}>О компании</li>
          <li
            className={classNames(
              styles.Head__navItem,
              styles.Head__navItem_active
            )}
          >
            Контакты
          </li>
        </ul>
      </nav>
      <div className={styles.Head__langStart}>
        <div className={styles.Head__lang}>
          <div
            className={classNames(
              styles.Head__langItem,
              styles.Head__langItem_active
            )}
          >
            Ru
          </div>
          <div className={classNames(styles.Head__langItem)}>En</div>
        </div>
        <div className={styles.Head__startProject}>
          <div>Начать проект</div>
          <img className={styles.Head__arrow} src={arrow} alt="arrow icon" />
          <div className={styles.Head__circle}></div>
        </div>
      </div>
    </header>
  );
}

export default Head;
