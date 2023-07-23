
import Card from "./Card/Card";
import useCounter from "./hooks/useCounter";


const BackwardCounter = () => {
    const counter = useCounter(false);

    return <Card>{counter}</Card>;
};

export default BackwardCounter;
