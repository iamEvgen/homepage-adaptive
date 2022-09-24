import React from 'react';
import styles from './Body.module.scss';
import SendButton from './SendButton';
import classNames from 'classnames';

function Body() {
  return (
    <main className={styles.Body}>
      <div className={styles.Container}>
        <div className={styles.Breadcrumbs}>
          Главная -{' '}
          <span className={styles.Breadcrumbs__currentPage}>Контакты</span>
        </div>
        <h1 className={styles.Title}>Мы рядом</h1>
        <p className={styles.preFormText}>
          Заполните форму ниже и мы свяжемся с вами. Не любите формы? Напишите
          нам на почту <span className={styles.blueText}>info@site.com</span>
        </p>
        <form className={styles.Form}>
          <div className={styles.Form__inputs}>
            <div className={styles.Form__2first}>
              <div
                className={classNames(
                  styles.InputBlock,
                  styles.Form__inputblock1
                )}
              >
                <input id="name" type="text" />
                <label className={styles.InputBlock__label1} htmlFor="name">
                  Ваше имя
                </label>
              </div>
              <div
                className={classNames(
                  styles.InputBlock,
                  styles.Form__inputblock2
                )}
              >
                <input id="email" type="email" />
                <label className={styles.InputBlock__label2} htmlFor="email">
                  Ваш E-Mail
                </label>
              </div>
            </div>
            <div
              className={classNames(
                styles.InputBlock,
                styles.Form__inputblock3
              )}
            >
              <label className={styles.InputBlock__label3} htmlFor="comment">
                Комментарий
              </label>
              <input id="comment" type="text" />
            </div>
            <div className={styles.Form__privacy}>
              <div className={styles.Form__acceptPrivacy}></div>
              <div className={styles.Form__textPrivacy}>
                Согласен с{' '}
                <span className={styles.blueText}>
                  Политикой конфиденциальности
                </span>
              </div>
            </div>
          </div>
          <div className={styles.SendButton}>
            <SendButton />
          </div>
        </form>
        <div className={styles.Dots}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </main>
  );
}

export default Body;
