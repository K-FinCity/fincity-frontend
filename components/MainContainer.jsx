import { Chakra_Petch } from "next/font/google";

const chakra = Chakra_Petch({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

const MainContainer = () => {
  return <main className={chakra.className}></main>;
};

export default MainContainer;
