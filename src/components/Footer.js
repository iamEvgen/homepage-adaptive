import React from 'react';
import styles from './Footer.module.scss';
// import classNames from 'classnames';

function Footer() {
  const telegramIcon = require('../img/telegram.png');
  const whatsappIcon = require('../img/whatsapp.png');
  const arrow2 = require('../img/arrow2.png');

  return (
    <footer className={styles.Footer}>
      <div className={styles.Container}>
        <div className={styles.LogoAndInfo}>
          <div className={styles.Logo}>LOGO</div>
          <div className={styles.InfoBlock}>
            <div className={styles.InfoBlock__title}>Услуги</div>
            <div className={styles.InfoBlock__links}>
              <ul>
                <li>Support and development</li>
                <li>UI/UX and produxt design</li>
                <li>Progressive Web Application (PWA)</li>
              </ul>
            </div>
          </div>

          <div className={styles.InfoBlock}>
            <div className={styles.InfoBlock__title}>Компания</div>
            <div className={styles.InfoBlock__links}>
              <ul>
                <li>О компании</li>
                <li>Проекты</li>
                <li>Контакты</li>
              </ul>
            </div>
          </div>

          <div className={styles.InfoBlock}>
            <div className={styles.InfoBlock__title}>Контакты</div>
            <div className={styles.InfoBlock__contacts}>
              <div className={styles.InfoBlock__links}>
                <ul>
                  <li className={styles.InfoBlock__download}>
                    Скачать презентацию
                    <img
                      className={styles.InfoBlock__arrow}
                      src={arrow2}
                      alt="arrow icon"
                    />
                  </li>
                  <li className={styles.InfoBlock__phone}>
                    +7 (499) 999-99-99
                  </li>
                  <li>info@site.com</li>
                </ul>
              </div>
              <div className={styles.InfoBlock__icons}>
                <img
                  className={styles.InfoBlock__icon}
                  src={telegramIcon}
                  alt="telegram icon"
                />
                <img
                  className={styles.InfoBlock__icon}
                  src={whatsappIcon}
                  alt="telegram icon"
                />
              </div>
            </div>
          </div>
          <div className={(styles.Privacy, styles.Privacy__copyright)}>
            © Company 2022. All rights reserved.
          </div>
          <div className={(styles.Privacy, styles.Privacy__policy)}>
            Политика конфиденциальноcти
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
