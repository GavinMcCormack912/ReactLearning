import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
function EventDetailPage() {
    const params = useParams();
    return <>
        <h1>EventDetailPage</h1>
        <p>Event Id: {params.eventId}</p>
        <Link to=".." relative='path'>Back</Link>
    </>
} export default EventDetailPage;