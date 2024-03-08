import { Footer } from 'modules/footer';
import { Header } from 'modules/header';
import { useEffect, useState } from 'react';

// const b = 65;
// const a = 65;

// console.log('object');

function App() {
  const [a] = useState(0);
  useEffect(() => {
    // const b = a;
  }, [a]);
  return (
    <>
      <Header />
      <Footer />
    </>
  );
}

export default App;
