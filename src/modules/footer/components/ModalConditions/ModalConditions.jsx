import s from './ModalConditions.module.scss';
import { sprite } from 'shared/icons';
const ModalConditions = ({ isOpen, onClose }) => {
  const handleBackgroundClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className={s.modalOverlay} onClick={handleBackgroundClick}>
      <div className={s.modalContent}>
        <div className={s.topOfModal}>
          <h3 className={s.conditionsTitle}>
            Умови обробки персональних даних
          </h3>
          <span onClick={onClose}>
            <svg width="24" height="24">
              <use href={`${sprite}#icon-close-cross`}></use>
            </svg>
          </span>
        </div>
        <ol className={s.conditionsList}>
          <li>
            Під персональними даними, зазначеними в цьому вікні, мається на
            увазі Ваш номер телефону.
          </li>
          <li>
            Під обробкою персональних даних розуміється збір, систематизацію,
            накопичення, зміна, використання, безстрокове зберігання та будь-які
            інші дії (операції) з персональними даними.
          </li>
          <li>
            Обробка зазначених Суб&rsquo;єктом персональних даних здійснюється з
            метою реєстрації персональних даних Суб&rsquo;єкта у базі даних
            Сайту з метою надсилання Суб&rsquo;єкту персональних даних Промокоду
            для отримання одноразової знижки та додаванням вказаного номеру
            телефону в розсилку цікавих пропозицій від Сайту.
          </li>
          <li>
            Обробка персональних даних Суб&rsquo;єкта може здійснюватись за
            допомогою засобів автоматизації та/або без використання засобів
            автоматизації.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default ModalConditions;
