import { MainPageAbout } from 'modules/mainPageAbout';
import { MainPageHelpers } from 'modules/mainPageHelpers';
import { MainPageHero } from 'modules/mainPageHero';

const MainPage = () => {
  return (
    <>
      <MainPageHero />
      <MainPageAbout />
      <MainPageHelpers />
    </>
  );
};

export default MainPage;
