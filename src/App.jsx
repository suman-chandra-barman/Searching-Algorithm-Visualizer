import './App.css'
import LinearSearch from "./components/LinearSearch.jsx";
import { IoMdArrowDropdown } from "react-icons/io";
import {useEffect, useState} from "react";
import BinarySearch from "./components/BinarySearch.jsx";
import CustomInputModal from "./components/CustomInputModal.jsx";

function App() {
    const [openCustomInputModal, setOpenCustomInputModal] = useState(false);
    const [displayAlgorithm, setDisplayAlgorithm] = useState("Linear Search");
    const [customInputs, setCustomInputs] = useState([]);
    const [searchKey, setSearchKey] = useState("");
    const [searching, setSearching] = useState(false);
    const [animationData, setAnimationData] = useState([]);

    const defaultInputs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    useEffect(() => {
        setCustomInputs(defaultInputs);
    },[])

    const handleStart = () => {
        if(!searchKey) {
            alert("Please provide search value");
        } else if (isNaN(searchKey)){
            alert("Please enter valid value");
        } else {
            setSearching(false);
            setSearching(true);
        }
    }
    const handleStop = () => {
        setSearching(false);
    }
    const handleReset = () => {
        setSearching(false);
        setCustomInputs(defaultInputs);
        setAnimationData([]);
        setSearchKey("");
    }

    return (
        <div>
            <nav className="bg-gray-800">
                <div className="container mx-auto flex items-center gap-4 py-4 text-white">
                    <span className="text-xl font-bold cursor-pointer">Searching visualizer</span>
                    <div>
                        <select onChange={(e) => setDisplayAlgorithm(e.target.value)} className="bg-transparent p-2 focus-visible:border-0">
                            <option value="Liner Search" className="text-black">Linear Search</option>
                            <option value="Binary Search" className="text-black">Binary Search</option>
                        </select>
                    </div>
                    <div className={`${openCustomInputModal ? 'text-blue-200' : 'text-gray-200'}`}>
                        <div onClick={() => setOpenCustomInputModal(true)}
                             className="flex items-center gap-2 cursor-pointer ">
                            <span>Custom Input</span>
                            <IoMdArrowDropdown/>
                        </div>
                    </div>
                    <div className="flex">
                        <input
                            value={searchKey}
                            type="text"
                            onChange={(e) => setSearchKey(e.target.value)}
                            placeholder="Search here"
                            className="w-[150px] p-2 rounded-l text-black"
                        />
                        <button onClick={handleStart}
                                className="bg-blue-500 hover:bg-blue-600 text-white font-bold p-2">Start
                        </button>
                        <button onClick={handleStop}
                                className="bg-red-500 hover:bg-red-600 text-white font-bold p-2">Stop
                        </button>
                        <button onClick={handleReset}
                                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold p-2">Reset
                        </button>
                    </div>
                    <div className="flex flex-col">
                    <label htmlFor="speed">Speed in ms</label>
                        <input id="speed" type="range" className="width-[150px]"/>
                    </div>

                    {openCustomInputModal && (
                        <CustomInputModal
                            searchKey={searchKey}
                            setSearchKey={setSearchKey}
                            setOpenCustomInputModal={setOpenCustomInputModal}
                            setCustomInputs={setCustomInputs}

                        />
                    )}
                </div>
            </nav>
            <div className="container mx-auto">
                {displayAlgorithm === "Binary Search" ?
                    <BinarySearch
                        customInputs={customInputs}
                        searchKey={searchKey}
                    />
                    :
                    <LinearSearch
                        customInputs={customInputs}
                        searchKey={searchKey}
                        searching={searching}
                        animationData={animationData}
                        setAnimationData={setAnimationData}
                    />
                }

            </div>
        </div>
    )
}

export default App
