import classes from './EventsNavigation.module.css';
import { NavLink } from 'react-router-dom';
function EventsNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink src="/events" className={({ isActive }) => isActive ? classes.active : undefined}>All Events</NavLink>
          </li>
          <li>
            <NavLink src="/events/new" className={({ isActive }) => isActive? classes.active : undefined}>New Event</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default EventsNavigation;
