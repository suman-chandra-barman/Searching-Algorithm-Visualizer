import { useEffect, useState } from "react";
import { FaLongArrowAltUp } from "react-icons/fa";

const LinearSearch = ({ customInputs, searchKey, searching, animationData, setAnimationData }) => {
    const [animation, setAnimation] = useState(0);

    const linearSearch = (arr, key) => {
        let newAnimation = [];
        for (let i = 0; i < arr.length; i++) {
            newAnimation.push({ index: i, value: arr[i] });
            if (arr[i] === key) {
                break;
            }
        }
        setAnimationData(newAnimation);
    };

    useEffect(() => {
        if(searching) {
            linearSearch(customInputs, searchKey);
        }

    }, [customInputs, searching]);

    useEffect(() => {
        if(!animationData.length) {
            setAnimation(0)
        }
    },[animationData])

    useEffect(() => {
        if (animationData.length > 0 && searching) {
            const interval = setInterval(() => {
                setAnimation((prev) => prev + 1);
            }, 1000);
            if (Math.floor(animation / 2) >= animationData.length) {
                clearInterval(interval);
            }
            return () => clearInterval(interval);
        }
    }, [animationData, animation, searching]);

    return (
        <div className="mt-4">
            <h2 className="text-xl">Linear Search</h2>
            <div className="relative mt-4 flex items-start gap-1">
                {customInputs.map((item, i) => (
                    <div key={i} className="w-[90px]">
                        {Math.floor(animation / 2) === i + 1 && animationData.length ? (
                            <div
                                className={`transition-all duration-500 ease-in-out ${
                                    animation % 2 ? "translate-x-[94px]" : ""
                                }`}
                            >
                                <div className="h-[70px] flex justify-center items-center text-center rounded border-2 border-blue-200">
                                    {item !== searchKey
                                        ? `${item} != ${searchKey}`
                                        : <span>${item} == ${searchKey}</span>
                                    }
                                </div>
                            </div>
                        ) : (
                            <div className="w-full h-[70px]"></div>
                        )}
                        <div className="flex justify-center w-full mt-2">{i}</div>
                        <div
                            className={`h-[70px] flex items-center justify-center rounded text-center transition-all duration-500 ease-in-out ${
                                Math.round(animation / 2) === i + 1 && animationData.length
                                    ? "bg-blue-200"
                                    : "bg-gray-200"
                            }`}
                        >
                            {item}
                        </div>
                        {Math.floor(animation / 2) === i + 1 && animationData.length? (
                            <div
                                className={`transition-all duration-500 ease-in-out ${
                                    animation % 2 ? "translate-x-[94px]" : ""
                                }`}
                            >
                                <div className="w-full h-[40px] flex flex-col items-center mt-2">
                                    <FaLongArrowAltUp />
                                    <span>i = {i + animation % 2}</span>
                                </div>
                            </div>
                        ) : (
                            <div className="w-full h-[48px]"></div>
                        )}
                        {item !== searchKey
                            ? <div className="absolute left-0 right-0">
                              Not  Matching
                            </div>
                            : <div className="absolute left-0 right-0">
                                Matching
                            </div>
                        }
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LinearSearch;
