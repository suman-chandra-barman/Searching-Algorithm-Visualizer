import './App.css'
import LinearSearch from "./components/LinearSearch.jsx";
import { IoMdArrowDropdown } from "react-icons/io";
import {useEffect, useState} from "react";
import BinarySearch from "./components/BinarySearch.jsx";
import { RxCrossCircled } from "react-icons/rx";

function App() {
    const [openAlgorithmListModal, setOpenAlgorithmListModal] = useState(false);
    const [openCustomInputModal, setOpenCustomInputModal] = useState(false);
    const [displayAlgorithm, setDisplayAlgorithm] = useState("Linear Search");
    const [customInputs, setCustomInputs] = useState([]);
    const [onChangeCustomInput, setOnChangeCustomInput] = useState();

    const defaultInputs = [5, 8, 2, 10, 3, 11, 17, 15, 9, 6];

    useEffect(() => {
        setCustomInputs(defaultInputs);
    },[])

    const handleSubmitCustomInput = () => {
        if(onChangeCustomInput.length > 0){
            const strInputsArr = onChangeCustomInput.split(",");
            const numInputArr = strInputsArr.map(Number);
            if( !numInputArr.includes(NaN)){
                setCustomInputs(numInputArr);
                setOnChangeCustomInput([]);
                setOpenCustomInputModal(false);
            }
            else {
                alert("Invalid Input");
            }
        }
    }
console.log("customInputs", customInputs);
  return (
    <div>
        <nav className="bg-gray-800">
            <div className="container mx-auto flex items-center gap-4 py-4 text-white">
                <span className="text-xl font-bold cursor-pointer">Searching visualizer</span>
                <div onClick={() => setOpenAlgorithmListModal(!openAlgorithmListModal)}
                     className={`flex items-center gap-2 cursor-pointer relative ${openAlgorithmListModal ? 'text-blue-200' : 'text-gray-200'}`}>
                    <span>Algorithm</span>
                    <IoMdArrowDropdown/>
                    {openAlgorithmListModal && (
                        <div className="bg-blue-200 text-black rounded absolute w-[200px] top-[55px] shadow-lg">
                            <ul className="flex flex-col">
                                <li onClick={() => setDisplayAlgorithm("Linear Search")}
                                    className="p-2 border-b hover:bg-blue-300">Linear Search
                                </li>
                                <li onClick={() => setDisplayAlgorithm("Binary Search")}
                                    className="p-2 border-b hover:bg-blue-300">Binary Search
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
                <div className={`relative ${openCustomInputModal ? 'text-blue-200' : 'text-gray-200'}`}>
                    <div onClick={() => setOpenCustomInputModal(true)} className="flex items-center gap-2 cursor-pointer ">
                        <span>Custom Input</span>
                        <IoMdArrowDropdown/>
                    </div>
                    {openCustomInputModal && (
                        <div className="bg-blue-200 text-black rounded absolute w-[400px] top-[100px] shadow-lg">
                            <div className="p-4 border-b flex items-center justify-between gcursor-pointer">
                                <h3>Custom Input</h3>
                                <div onClick={() => setOpenCustomInputModal(false)}>
                                    <RxCrossCircled size={20} className="cursor-pointer" />
                                </div>
                            </div>
                            <div className="p-4">
                                <div>
                                    <label htmlFor="custom-input">Range: 5, 100</label>
                                    <textarea
                                        onChange={(e) => {
                                            setOnChangeCustomInput(e.target.value)
                                        }}
                                        id="custom-input"
                                        rows={6}
                                        placeholder="5, 8, 3, 2"
                                        className="p-2 w-full mt-2 border bg-gray-200"
                                    />
                                </div>
                                <div>
                                    <button onClick={handleSubmitCustomInput}
                                            className="p-3 text-white rounded bg-blue-600 font-bold hover:bg-blue-700">Submit
                                    </button>
                                    <button onClick={() => setOpenCustomInputModal(false)}
                                            className="ml-2 p-3  rounded hover:bg-white font-bold">Cancel
                                    </button>
                                </div>

                            </div>
                        </div>
                    )}
                </div>
                <button className="p-3 rounded bg-blue-600 font-bold hover:bg-blue-700">Visualize {displayAlgorithm}</button>
                <button onClick={() => setCustomInputs(defaultInputs)} className="p-3 rounded bg-red-600 font-bold hover:bg-red-700">Reset</button>
            </div>
        </nav>
        <div className="container mx-auto">
        {displayAlgorithm === "Binary Search" ? (
                    <BinarySearch customInputs={customInputs}/>
                )
                : <LinearSearch customInputs={customInputs}/>
            }

        </div>
    </div>
  )
}

export default App
