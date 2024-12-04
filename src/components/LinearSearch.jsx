import {useEffect, useState} from "react";
import { FaLongArrowAltUp} from "react-icons/fa";

const LinearSearch = () => {
    const [elements, setElements] = useState([5, 8, 2, 10, 3, 11, 17, 15, 9, 6]);
    const [animation, setAnimation] = useState([]);
    const [counter, setCounter] = useState(0)

    const linearSearch = (arr, key) => {
        let newAnimation = [];
        for (let i = 0; i < arr.length; i++) {
            newAnimation.push({index: i, value: arr[i]});
            if (arr[i] === key) {
                break;
            }
        }
        setAnimation(newAnimation);
    }

    useEffect(() => {
        linearSearch(elements, 6);
    },[elements]);

    useEffect(() => {
        if(animation.length > 0){
            const interval =  setInterval(() => {
                setCounter(prev => prev + 1);
            },1000);
            if (counter >= animation.length) {
                clearInterval(interval);
            }
            return () => clearInterval(interval);
        }
    },[animation, counter]);

    console.log(counter);

    return (
        <div className="mt-4">
            <h2 className="text-xl">Linear Search</h2>
            <div className="mt-4 flex items-start gap-2">
                {elements.map((item, i) => (
                    <div key={i} className="w-[100px]">
                        <div className="flex justify-center w-full">
                            {i}
                        </div>
                        <div
                            className={`py-4 px-8 rounded text-center transition-all duration-500 ease-in-out ${counter === i + 1 ? 'bg-blue-200' : 'bg-gray-200'}`}>
                            {item}
                        </div>
                        {counter === i + 1 && (
                            <div className="transition-all duration-500 ease-in-out">
                                <div className="flex flex-col items-center mt-2 w-full">
                                    <FaLongArrowAltUp />
                                    <span>i = {i}</span>
                                </div>
                                <div className="py-4 px-8 text-center rounded bg-blue-200 transition-all duration-500 ease-in-out">
                                    {30}
                                </div>
                            </div>
                        )}

                    </div>
                ))}
            </div>
        </div>
    )
}
export default LinearSearch;