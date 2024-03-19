const Picture = ({
  mob1x,
  mob2x,
  tab1x,
  tab2x,
  desk1x,
  desk2x,
  defaultImg,
  width,
  className,
  alt,
  ...props
}) => {
  return (
    <picture>
      <source srcSet={`${mob1x} 1x, ${mob2x} 2x`} media="(max-width: 767px)" />
      <source
        srcSet={`${tab1x} 1x, ${tab2x} 2x`}
        media="(min-width: 768px) and (max-width: 1439px)"
      />
      <source
        srcSet={`${desk1x} 1x, ${desk2x} 2x`}
        media="(min-width: 1440px)"
      />
      <img
        src={defaultImg}
        alt={alt}
        width={width}
        className={className}
        {...props}
      />
    </picture>
  );
};

export default Picture;
