import Image from 'next/image';
import { Chakra_Petch } from 'next/font/google';

const chakra = Chakra_Petch({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
});

export default function Home() {
  return (
    <>
      <header>
        <nav></nav>
      </header>
      <main className={chakra.className}>
        <section>{/* Victor */}</section>
        <section>{/* Ángel  */}</section>
        <section>{/* Moi  */}</section>
      </main>
      <footer></footer>
    </>
  );
}
