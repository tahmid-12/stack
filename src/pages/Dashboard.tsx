import { RootState } from "../store";
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../features/data/dataSlice';

function Dashboard() {
    const dispatch = useDispatch();

    // Use useSelector to access the fetched data from the Redux store
    const { data, loading, error } = useSelector((state: RootState) => state.data);

    const handleFetchData = () => {
        dispatch(fetchData());
    }

    return (
        <div>
            <button onClick={handleFetchData}>Fetch Data</button>

            {/* Display fetched data here */}
            {loading === 'pending' && <p>Loading data...</p>}
            {error && <p>Error: {error}</p>}
            {data && (
                <div>
                    <h2>Fetched Data:</h2>
                    <table>
                        <thead>
                            <tr>
                                <th className="border p-2">ID</th>
                                <th className="border p-2">Avatar</th>
                                <th className="border p-2">User</th>
                                <th className="border p-2">Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.data.map((item, index) => (
                                <tr key={index}>
                                    <td className="border p-2">{index + 1}</td>
                                    <td className="border p-2">
                                        <img src={item.avatar} alt="Avatar" className="h-10 w-10 object-cover rounded-full" />
                                    </td>
                                    <td className="border p-2">{item.first_name} {item.last_name}</td>
                                    <td className="border p-2">{item.email}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default Dashboard;
