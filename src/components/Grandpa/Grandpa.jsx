import { createContext, useState } from "react";
import Aunt from "../Aunt/Aunt";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import "./Grandpa.css";

export const AssetContext = createContext("gold");
export const MoneyContext = createContext(0);
// console.log(AssetContext);
console.log(MoneyContext);
const Grandpa = () => {
  const asset = "diamond";
  const [money, setMoney] = useState(1000);
  return (
    <div className="grandpa">
      <h1>Grandpa</h1>
      <p>Net money: {money}</p>
      <MoneyContext.Provider value={[money, setMoney]}>
        <AssetContext.Provider value="gold">
          <section className=" flex">
            <Dad asset={asset}></Dad>
            <Uncle asset={asset}></Uncle>
            <Aunt></Aunt>
          </section>
        </AssetContext.Provider>
      </MoneyContext.Provider>
    </div>
  );
};

export default Grandpa;

/**
 * If you want to use context api. you have to follow some steps.
 * 1. Create a context and export it.
 * 2. Add provider for the context with a value.Value could be anything.
 * 3. useContext to access value in the context API.
 */
