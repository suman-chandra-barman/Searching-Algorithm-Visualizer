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
    const [searchKey, setSearchKey] = useState(9);
    const [searching, setSearching] = useState(false);

    const defaultInputs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    useEffect(() => {
        setCustomInputs(defaultInputs);
    },[])

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
                    <input placeholder="Search here" className="p-2 rounded text-black"/>
                    <button onClick={() => setSearching(true)} className="p-2 rounded bg-blue-600 font-bold hover:bg-blue-700">Start</button>
                    <button onClick={() => setCustomInputs(defaultInputs)}
                            className="p-2 rounded bg-red-600 font-bold hover:bg-red-700">Stop
                    </button>
                    <button onClick={() => setCustomInputs(defaultInputs)}
                            className="p-2 rounded bg-red-600 font-bold hover:bg-red-700">Reset
                    </button>
                    <div className="flex flex-col">
                        <label htmlFor="speed">Speed in ms</label>
                        <input id="speed" type="range"/>
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
                {displayAlgorithm === "Binary Search" ? (
                        <BinarySearch
                            customInputs={customInputs}
                            searchKey={searchKey}
                        />
                    )
                    : <LinearSearch
                        customInputs={customInputs}
                        searchKey={searchKey}
                        searching={searching}
                    />
                }

            </div>
        </div>
    )
}

export default App
