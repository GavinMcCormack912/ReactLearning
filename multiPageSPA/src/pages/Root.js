import { Outlet } from "react-router-dom"   //lets Root page be an "outlet" for other pages
import MainNavigation from '../components/MainNavigation.js'

function RootLayout() {
    return <>
        <MainNavigation />
        <main>
            <Outlet />
        </main>
    </>
} export default RootLayout