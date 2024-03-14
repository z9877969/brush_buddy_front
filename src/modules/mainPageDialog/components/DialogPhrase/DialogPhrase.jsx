import css from './DialogPhrase.module.scss';

const DialogPhrase = ({
  imgSourceMobX1,
  imgSourceMobX2,
  imgSourceDeskX1,
  imgSourceDeskX2,
  direction,
  number,
  phraseClass,
  children,
}) => {
  return (
    <div className={`${css.dialogItem} ${phraseClass}`} id="axis">
      {direction == 'right' && (
        <div
          className={`${css['dialogBalloonRight' + number]} ${css.dialogBalloon}`}
        >
          <p className={css.balloonText}>{children}</p>
        </div>
      )}
      <picture className={css.avatar}>
        <source
          srcSet={`${imgSourceMobX1} 1x, ${imgSourceMobX2} 2x`}
          media="(min-width: 320px)"
        ></source>
        <source
          srcSet={`${imgSourceDeskX1} 1x, ${imgSourceDeskX2} 2x`}
          media="(min-width: 768px)"
        ></source>
        <img src="" alt="Avatar"></img>
      </picture>
      {direction == 'left' && (
        <div
          className={`${css['dialogBalloonLeft' + number]} ${css.dialogBalloon}`}
        >
          <p className={css.balloonText}>{children}</p>
        </div>
      )}
    </div>
  );
};

export default DialogPhrase;
