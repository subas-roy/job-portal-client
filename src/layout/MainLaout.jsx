import { Outlet } from 'react-router-dom';
import Navbar from '../pages/Home/shared/navbar';

const MainLaout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default MainLaout;