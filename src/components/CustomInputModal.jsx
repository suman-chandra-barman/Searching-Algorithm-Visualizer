import {RxCrossCircled} from "react-icons/rx";
import {useState} from "react";

const CustomInputModal = ({setCustomInputs, setOpenCustomInputModal}) => {
    const [onChangeCustomInput, setOnChangeCustomInput] = useState();

    const handleSubmitCustomInput = () => {
        if(onChangeCustomInput?.length > 0){
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
    return (
        <div className={`bg-gray-800 rounded absolute w-[400px] top-[100px] left-1/2 transform -translate-x-1/2 shadow-lg`}>
            <div className="p-4 border-b flex items-center justify-between gcursor-pointer">
                <h3>Custom Input</h3>
                <div onClick={() => setOpenCustomInputModal(false)} className="cursor-pointer hover:text-gray-200">
                    <RxCrossCircled size={20}/>
                </div>
            </div>
            <div className="p-4">
                <div>
                    <label htmlFor="custom-input">Inputs</label>
                    <textarea
                        onChange={(e) => {
                            setOnChangeCustomInput(e.target.value)
                        }}
                        id="custom-input"
                        rows={6}
                        placeholder="5, 8, 3, 2"
                        className="p-2 w-full mt-2 border rounded bg-gray-200"
                        required={true}
                    />
                </div>
                <div>
                    <button onClick={handleSubmitCustomInput}
                            className="p-3 text-white rounded bg-blue-600 font-bold hover:bg-blue-700">Submit
                    </button>
                    <button onClick={() => setOpenCustomInputModal(false)}
                            className="ml-2 p-3  rounded hover:text-gray-200 font-bold">Cancel
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CustomInputModal