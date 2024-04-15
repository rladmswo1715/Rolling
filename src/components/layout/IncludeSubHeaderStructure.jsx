import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import SubHeader from './subHeader/SubHeader';

export default function IncludeLayoutStructure() {
    return(
        <>
            <Header />
            <SubHeader />
            <Outlet />
        </>
    )
}