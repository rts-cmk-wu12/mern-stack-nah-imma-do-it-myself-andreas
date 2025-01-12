
import { Outlet } from "react-router-dom";
import PrimaryMenu from "../components/primary-menu";

export default function Layout() {
    return (
        <>
            <header>
        
                <PrimaryMenu />
            </header>
            <main>
               <Outlet />
            </main>
        </>
    )
}
