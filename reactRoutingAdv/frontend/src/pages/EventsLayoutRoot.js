import { Outlet } from "react-router-dom";
import EventsNavigation from "../components/EventsNavigation";
function EventsLayoutRoot() {
    return <>
        <EventsNavigation/>
        <main>
            <Outlet />
        </main>
    </>
} export default EventsLayoutRoot;