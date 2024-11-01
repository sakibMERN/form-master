import { useContext } from "react";
import Brother from "../Brother/Brother";
import MySelf from "../MySelf/MySelf";
import Sister from "../Sister/Sister";
import { MoneyContext } from "../Grandpa/Grandpa";


const Dad = ({asset}) => {
    const [money] = useContext(MoneyContext);
    return (
        <div>
            <h2>Dad</h2>
            <p>Net Money: {money}</p>
            <section className="flex">
                <MySelf asset={asset}></MySelf>
                <Brother></Brother>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Dad;