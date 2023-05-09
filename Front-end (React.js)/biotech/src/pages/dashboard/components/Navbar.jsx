import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { useStateContext } from '../contexts/ContextProvider';
import './common.css'
import { useNavigate } from 'react-router-dom';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl bg-transparent rounded-full border-none p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const navigate = useNavigate()
  const { currentColor, activeMenu, setActiveMenu } = useStateContext();
  const handleActiveMenu = () => setActiveMenu(!activeMenu);
  return (
    <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative">
      <NavButton title="Menu" customFunc={handleActiveMenu} color={currentColor} icon={<AiOutlineMenu />} />
      <div className='flex items-center custom'>
        <h1 className='font-bold text-xl pr-7'>Admin Dashboard</h1>
        <button className='cust-button' style={{
            padding:'0.5rem 1.5rem',
          }}
          type='button' onClick={()=>navigate('/dashboard-register')}
        >Add User</button>
      </div>
    </div>
  )
}

export default Navbar