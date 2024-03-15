const Picture = ({
  mob1x,
  mob2x,
  tab1x,
  tab2x,
  desk1x,
  desk2x,
  defaultImg,
  height,
  className,
  alt,
  ...props
}) => {
  return (
    <picture>
      <source srcSet={`${mob1x} 1x, ${mob2x} 2x`} media="(min-width: 320px)" />
      <source srcSet={`${tab1x} 1x, ${tab2x} 2x`} media="(min-width: 768px)" />
      <source
        srcSet={`${desk1x} 1x, ${desk2x} 2x`}
        media="(min-width: 1440px)"
      />
      <img
        src={defaultImg}
        alt={alt}
        height={height}
        className={className}
        {...props}
      />
    </picture>
  );
};

export default Picture;
