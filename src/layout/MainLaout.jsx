import { Outlet } from 'react-router-dom';
import Navbar from '../pages/shared/Navbar';

const MainLaout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default MainLaout;