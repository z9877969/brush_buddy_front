import { useEffect, useState } from 'react';
import { Color } from '../Color/Color';
import { Flavor } from '../Flavor/Flavor';
import { Volume } from '../Volume/Volume';
import { Marker } from '../Marker/Marker';

const ProductOptions = ({ variants, curVariant, setCurVariant }) => {
  const [marker, setMarker] = useState(curVariant.marker);
  const [volume, setVolume] = useState(curVariant.volume);

  useEffect(() => {
    (marker || volume) && setCurVariant({ marker, volume });
  }, [marker, volume, setCurVariant]);

  if (!curVariant) return null;

  return (
    <>
      {curVariant.flavor && <Flavor value={curVariant.flavor} />}
      {curVariant.color && <Color value={curVariant.color} />}
      {curVariant.marker && (
        <Marker
          curVariant={curVariant}
          setMarker={setMarker}
          variants={variants}
        />
      )}
      {curVariant.volume && (
        <Volume
          curVariant={curVariant}
          variants={variants}
          setVolume={setVolume}
        />
      )}
    </>
  );
};

export default ProductOptions;
