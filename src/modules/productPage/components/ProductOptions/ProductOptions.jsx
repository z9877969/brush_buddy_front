import { useEffect, useMemo, useState } from 'react';
// import { Color } from '../Color/Color';
import { Flavor } from '../Flavor/Flavor';
// import { Volume } from '../Volume/Volume';
import { Marker } from '../Marker/Marker';
import { toastify } from 'helpers/tostify';

const optionKeys = ['marker', 'volume'];

const ProductOptions = ({ variants, curVar, setCurVar }) => {
  const [marker, setMarker] = useState(variants[0].marker);
  const [volume, setVolume] = useState(variants[0].volume);

  const prodOptions = useMemo(() => {
    return variants.reduce((acc, prodVar) => {
      for (const optKey of optionKeys) {
        if (prodVar[optKey]) {
          if (!acc[optKey]) {
            acc[optKey] = [];
          }
          acc[optKey].push(prodVar[optKey]);
        }
      }
      return acc;
    }, {});
  }, [variants]);

  const optionsKeys = useMemo(() => {
    return Object.keys(prodOptions).reduce((acc, el) => {
      acc[el] = true;
      return acc;
    }, {});
  }, [prodOptions]);

  const handleChangeCurVar = ({ marker, volume }) => {
    marker && setMarker(marker);
    volume && setVolume(volume);
    const curVar = variants.find(
      (el) => el.marker === marker && el.volume === volume
    );
    setCurVar((p) =>
      curVar
        ? curVar
        : p
          ? p
          : variants.find((v) =>
              v.marker && optionsKeys.volume ? v.volume : true
            )
    );
    curVar && toastify.error('Даний товар відсутній');
  };

  useEffect(() => {
    const curVar = variants.find(
      (el) => el.marker === marker && el.volume === volume
    );
    setCurVar((p) =>
      curVar
        ? curVar
        : p
          ? p
          : variants.find((v) =>
              v.marker && optionsKeys.volume ? v.volume : true
            )
    );
  }, [variants, marker, volume, optionsKeys, setCurVar]);

  // console.log('curVar :>> ', curVar);
  if (!Object.keys(prodOptions).length || !curVar) return null;

  return (
    <>
      {curVar.flavor && <Flavor value={curVar.flavor} />}
      {/* { prodOptions.colors[0].color !== '' && color ? (
        <Color
          productColors={product.colors}
          value={color}
          setColor={setColor}
          setQuantity={setQuantity}
        />
      ) : null} */}
      <Marker
        value={curVar.marker}
        handleChangeCurVar={handleChangeCurVar}
        markers={prodOptions.marker}
      />
      {/* {product.volume?.length > 0 && mls ? (
        <Volume
          productVolume={product.volume}
          value={mls}
          setMls={setMl}
          setQuantity={setQuantity}
        />
      ) : null} */}
    </>
  );
};

export default ProductOptions;
