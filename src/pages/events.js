import { useState } from "react";
import { useRouter } from "next/router";

function EventList({ eventList }) {
  const [events, setEvents] = useState(eventList);
  const router = useRouter();

  const fetchSportsEvents = async () => {
    const response = await fetch(
      "http://localhost:4000/events?category=sports"
    );
    const data = await response.json();

    setEvents(data);
    router.push("/events?category=sports", undefined, { shallow: true });
  };

  return (
    <div>
      <h1>List of events</h1>

      <button onClick={fetchSportsEvents}>Filter sports events</button>

      {events.map((event) => {
        return (
          <div key={event.id}>
            <h2>
              {event.id} {event.title} {event.date} | {event.category}
            </h2>
            <p>{event.description}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default EventList;

export async function getServerSideProps(context) {
  const { query } = context;
  const { category } = query;
  const queryString = category ? `category=sports` : "";
  const response = await fetch(`http://localhost:4000/events/?${queryString}`);
  console.log(response);
  const data = await response.json();
  console.log(data);

  return {
    props: {
      eventList: data,
    },
  };
}
