import css from './DialogPhrase.module.scss';

const DialogPhrase = ({ imgSource, direction, phraseClass, children }) => {
  return (
    <div className={`${css.dialogItem} ${phraseClass}`} id="axis">
      {direction == 'right' && (
        <div className={`${css.dialogBalloonRight} ${css.dialogBalloon}`}>
          <p className={css.balloonText}>{children}</p>
        </div>
      )}
      <img src={imgSource} alt="Avatar" className={css.avatar} />
      {direction == 'left' && (
              <div className={`${css.dialogBalloonLeft} ${css.dialogBalloon}`}>
          <p className={css.balloonText}>{children}</p>
        </div>
      )}
    </div>
  );
};

export default DialogPhrase;
