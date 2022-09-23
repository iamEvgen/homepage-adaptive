import React from 'react';
import styles from './SendButton.module.scss';
import classNames from 'classnames';

function SendButton() {
  const airplane = require('../img/airplane.png');
  const [sendButtonClicked, setSendButtonClicked] = React.useState(false);

  return (
    <div
      onClick={() => {
        setSendButtonClicked(true);
      }}
      className={styles.SendButton}
    >
      <div
        className={classNames(styles.SendButton__bg, {
          [styles.SendButton__bg_clicked]: sendButtonClicked,
        })}
      ></div>
      <div
        className={classNames(styles.SendButton__text, {
          [styles.SendButton__text_clicked]: sendButtonClicked,
        })}
      >
        {sendButtonClicked ? 'Ваше сообщение отправлено!' : 'Отправить'}
      </div>
      <img
        className={classNames(styles.SendButton__airplane, {
          [styles.SendButton__airplane_clicked]: sendButtonClicked,
        })}
        src={airplane}
        alt="airplane icon"
      />
    </div>
  );
}

export default SendButton;
