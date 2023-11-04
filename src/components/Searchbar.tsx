import { useNavigate } from 'react-router-dom';

const Searchbar = () => {

    const navigate = useNavigate();

    const handleLogOut = () => {
        console.log("Log Out");
        localStorage.removeItem("authToken");
        navigate("/");
    }
  return (
    <div className="mb-[25px] mt-[20px] flex items-center justify-between">
        <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 border border-gray-300 rounded-md w-[539px]"
        />
        {/* <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg
            className="h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8.293 4.293a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414l-5-5a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M3 10a7 7 0 1114 0 7 7 0 01-14 0z"
              clipRule="evenodd"
            />
          </svg>
        </span> */}
      </div>
      <button className="bg-red-500 text-white px-4 py-2 rounded-md" onClick={handleLogOut}>
        Logout
      </button>
    </div>
  )
}

export default Searchbar