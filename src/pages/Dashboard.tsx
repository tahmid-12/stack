import { useEffect } from 'react';
import { RootState } from "../store";
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../features/data/dataSlice';
import { Sidebar } from '../components';

function Dashboard() {
    const dispatch = useDispatch();

    // Use useSelector to access the fetched data from the Redux store
    const { data, loading, error } = useSelector((state: RootState) => state.data);

    // const handleFetchData = () => {
    //     dispatch(fetchData());
    // }

    useEffect(() => {
        dispatch(fetchData());
    }, []);

    return (
        <div className='flex flex-row'>
            {/* <button onClick={handleFetchData}>Fetch Data</button> */}

            {/* Display fetched data here */}
            <div className='w-1/5'>
                {/* <h2 className='text-base text-heading font-[600]'>Dashboard</h2> */}
                <Sidebar />
            </div>
            <div className='w-4/5 ml-[40px]'>
                <h2 className='text-base text-heading font-[600]'>Users List</h2>
                {loading === 'pending' && <p>Loading data...</p>}
                {error && <p>Error: {error}</p>}
                {data && (
                    <div>
                        <table className='w-full mt-[43px]'>
                            <thead className='bg-[#fafbfc] rounded-[12px]'>
                                <tr>
                                    <th className="border-b-0 p-2">ID</th>
                                    <th className="border-b-0 p-2">Avatar</th>
                                    <th className="border-b-0 p-2">User</th>
                                    <th className="border-b-0 p-2">Email</th>
                                    <th className="border-b-0 p-2">Options</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.data.map((item, index) => (
                                    <tr key={index}>
                                        <td className="border-b-0 p-2 text-center">{index + 1}</td>
                                        <td className="border-b-0 p-2 text-center">
                                            <img src={item.avatar} alt="Avatar" className="h-10 w-10 object-cover rounded-full" />
                                        </td>
                                        <td className="border-b-0 p-2 text-center">{item.first_name} {item.last_name}</td>
                                        <td className="border-b-0 p-2 text-center">{item.email}</td>
                                        <td className="border-b-0 p-2 text-center">...</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Dashboard;
