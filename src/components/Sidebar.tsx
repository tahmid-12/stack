import { NavLink } from 'react-router-dom';
import { TbLayoutDashboard } from 'react-icons/Tb';
import { AiOutlineUser } from 'react-icons/Ai';
import { RiNewspaperLine } from 'react-icons/ri';

const Sidebar = () => {
    return (
        // <div>Sidebar</div>
        <div className="h-screen w-full p-4 border border-solid border-gray-300">
            <ul>
                <li className="p-[25px]">
                    <p className="font-[500] text-[#b0b7c3] text-[12px]">PAGES</p>
                </li>
                <li className=" p-[25px]">
                    <NavLink to="/users" className="text-[#a7afbc] font-[500] text-[14px] flex items-center justify-around"><TbLayoutDashboard /> Dashboard</NavLink>
                </li>
                <li className="p-[25px]">
                    <NavLink to="/dashboard" className="text-[#a7afbc] font-[500] text-[14px] flex items-center justify-around" activeClassName="active"
                        style={{
                            // width: '216px',
                            height: '50px',
                            borderRadius: '12px',
                            backgroundColor: '#f0f5fa',
                        }}><AiOutlineUser /> Users</NavLink>
                </li>
                <li className="p-[25px]">
                    <NavLink to="/sales" className="text-[#a7afbc] font-[500] text-[14px] flex items-center justify-around"><RiNewspaperLine /> Sales</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar