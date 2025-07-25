import { Outlet } from 'react-router-dom';

const MainLaout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Outlet />
        </div>
    );
};

export default MainLaout;