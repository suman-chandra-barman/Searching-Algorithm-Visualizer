import './App.css'
import LinearSearch from "./components/LinearSearch.jsx";
import { IoMdArrowDropdown } from "react-icons/io";
import {useState} from "react";
import BinarySearch from "./components/BinarySearch.jsx";
import { RxCrossCircled } from "react-icons/rx";

function App() {
    const [openAlgorithmListModal, setOpenAlgorithmListModal] = useState(false);
    const [openCustomInputModal, setOpenCustomInputModal] = useState(false);
    const [displayAlgorithm, setDisplayAlgorithm] = useState("linear");

    console.log(openCustomInputModal);

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
                                <li onClick={() => setDisplayAlgorithm("linear")}
                                    className="p-2 border-b hover:bg-blue-300">Linear Search
                                </li>
                                <li onClick={() => setDisplayAlgorithm("binary")}
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
                        <div className="p-4 bg-blue-200 text-black rounded absolute w-[400px] top-[55px] shadow-lg">
                            <div className="flex items-center justify-between gcursor-pointer">
                                <h3>Custom Input</h3>
                                <div onClick={() => setOpenCustomInputModal(false)}>
                                    <RxCrossCircled/>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <button className="p-3 rounded bg-blue-600 font-bold hover:bg-blue-700">Start</button>
                <button className="p-3 rounded bg-red-600 font-bold hover:bg-red-700">End</button>
            </div>
        </nav>
        <div className="container mx-auto">
            {displayAlgorithm === "binary" ? (
                    <BinarySearch/>
                )
                : <LinearSearch/>
            }

        </div>
    </div>
  )
}

export default App
