import React from 'react';
import styles from './Body.module.scss';
import SendButton from './SendButton';

function Body() {
  return (
    <main className={styles.Container}>
      <div className={styles.Breadcrumbs}>
        Главная -{' '}
        <span className={styles.Breadcrumbs__currentPage}>Контакты</span>
      </div>
      <h1 className={styles.Title}>Мы рядом</h1>
      <p className={styles.preFormText}>
        Заполните форму ниже и мы свяжемся в вами. Не любите формы? Напишите нам
        на почту <span className={styles.blueText}>info@site.com</span>
      </p>
      <form className={styles.Form}>
        <div className={styles.Form__inputs}>
          <div className={styles.Form__2first}>
            <label className="Form__lable" htmlFor="name">
              Ваше имя
            </label>
            <input id="name" type="text" />
            <label htmlFor="email">Ваш E-Mail</label>
            <input id="email" type="email" />
          </div>
          <label htmlFor="comment">Комментарий</label>
          <input id="comment" type="text" />
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
        <SendButton />
      </form>
    </main>
  );
}

export default Body;
