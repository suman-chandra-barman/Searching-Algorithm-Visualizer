import { useEffect, useState } from "react";
import { FaLongArrowAltUp } from "react-icons/fa";

const LinearSearch = ({ customInputs, searchKey, searching }) => {
    const [animation, setAnimation] = useState([]);
    const [counter, setCounter] = useState(0);

    const linearSearch = (arr, key) => {
        let newAnimation = [];
        for (let i = 0; i < arr.length; i++) {
            newAnimation.push({ index: i, value: arr[i] });
            if (arr[i] === key) {
                break;
            }
        }
        setAnimation(newAnimation);
    };

    useEffect(() => {
        linearSearch(customInputs, searchKey);
    }, [customInputs]);

    useEffect(() => {
        if (animation.length > 0 && searching) {
            const interval = setInterval(() => {
                setCounter((prev) => prev + 1);
            }, 1000);
            if (Math.floor(counter / 2) >= animation.length) {
                clearInterval(interval);
            }
            return () => clearInterval(interval);
        }
    }, [animation, counter, searching]);

    return (
        <div className="mt-4">
            <h2 className="text-xl">Linear Search</h2>
            <div className="mt-4 flex items-start gap-1">
                {customInputs.map((item, i) => (
                    <div key={i} className="w-[90px]">
                        {Math.floor(counter / 2) === i + 1 ? (
                            <div
                                className={`transition-all duration-500 ease-in-out ${
                                    counter % 2 ? "translate-x-[94px]" : ""
                                }`}
                            >
                                <div className="h-[70px] flex justify-center items-center text-center rounded border-2">
                                    {item !== searchKey
                                        ? `${item} != ${searchKey}`
                                        : `${item} == ${searchKey}`}
                                </div>
                            </div>
                        ) : (
                            <div className="w-full h-[70px]"></div>
                        )}
                        <div className="flex justify-center w-full mt-2">{i}</div>
                        <div
                            className={`h-[70px] flex items-center justify-center rounded text-center transition-all duration-500 ease-in-out ${
                                Math.round(counter / 2) === i + 1
                                    ? "bg-blue-200"
                                    : "bg-gray-200"
                            }`}
                        >
                            {item}
                        </div>
                        {Math.floor(counter / 2) === i + 1 ? (
                            <div
                                className={`transition-all duration-500 ease-in-out ${
                                    counter % 2 ? "translate-x-[94px]" : ""
                                }`}
                            >
                                <div className="w-full h-[40px] flex flex-col items-center mt-2">
                                    <FaLongArrowAltUp />
                                    <span>i = {i + counter % 2}</span>
                                </div>
                            </div>
                        ) : (
                            <div className="w-full h-[48px]"></div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LinearSearch;
