interface SubmitButtonProps {
    name: String;
}

const SubmitButton = ({name}: SubmitButtonProps) => {
    return (
        <button
            type="submit"
            className="w-full p-[17px] bg-blue-500 rounded-[16px] text-white bg-blue"
        >
            {name}
        </button>
    )
}

export default SubmitButton