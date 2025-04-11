import React, { useState } from "react";
import Countdown from "react-countdown";
import { Button, Card, CardBody, CardTitle, CardText, Row, Col, CardImg } from "reactstrap";
import { Link } from "react-router-dom";
import Banner2025 from "../assets/images/VbTournament_Andivilai(2025).png"

// Sample upcoming event
const upcomingEvent = {
  name: "State Level Volleyball Tournament 2025",
  date: "2025-04-14T18:00:00", // Event date
  location: "SS Volleyball Club, Andivilai,South Thamaraikulam Post,Kanyakumari",
  description: "Join us for the annual Volleyball Championship! A day full of competitive matches and fun.",
  bannerImage: Banner2025, // Add the path to the banner image
  registrationLink: "/register", // Link to registration page
};

// Sample past events
const pastEvents = [
  {
    name: "State Volleyball Tournament 2024",
    date: "2024-04-20",
    highlight: "The team from varies towns reached the tournament with a stunning performance in the finals!",
    bannerImage: "/assets/images/winter-tournament-banner.jpg", // Banner image for past event
    link: "/past-event/winter-tournament",
  },
  {
    name: "Summer Training Camp 2024",
    date: "2024-05-01",
    highlight: "Our Summer Camp was a hit with over 50 participants learning new techniques and strategies.",
    bannerImage: "/assets/images/spring-camp-banner.jpg", // Banner image for past event
    link: "/past-event/spring-camp",
  },
];

const Events = () => {
  // State to toggle between upcoming and past events
  const [showPastEvents, setShowPastEvents] = useState(false);

  // Countdown component to show countdown timer
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span>The event has started!</span>;
    } else {
      return (
        <div>
          <p><strong>Time remaining:</strong></p>
          <div>
            {days}d {hours}h {minutes}m {seconds}s
          </div>
        </div>
      );
    }
  };

  return (
    <div className="events-page container my-5">
      <h2 className="text-center">Upcoming & Past Events</h2>

      {/* Upcoming Event Section */}
      <div className="upcoming-event my-4">
        <h3 className="text-center">Upcoming Event</h3>
        <Card>
          {/* Banner Image */}
          <CardImg top width="100%" src={upcomingEvent.bannerImage} alt="Event Banner" />
          <CardBody className="p-4">
            <CardTitle tag="h2">{upcomingEvent.name}</CardTitle>
            <CardText>{upcomingEvent.description}</CardText>
            <CardText><strong>Location:</strong> {upcomingEvent.location}</CardText>
            <CardText><strong>Date:</strong> {new Date(upcomingEvent.date).toLocaleString()}</CardText>
            <Countdown date={upcomingEvent.date} renderer={renderer} />
            <Button color="primary" className="my-3 w-75">
              {/* <Link to={upcomingEvent.registrationLink} style={{ color: "white", textDecoration: "none" }}> */}
                OnField Registration only!
              {/* </Link> */}
            </Button>
          </CardBody>
        </Card>
      </div>

      {/* Past Events Section */}
      <div className="past-events my-4">
        <Button
          color="info"
          onClick={() => setShowPastEvents(!showPastEvents)}
          className="mb-3"
        >
          {showPastEvents ? "Hide Past Events" : "Show Past Events"}
        </Button>

        {showPastEvents && (
          <Row>
            {pastEvents.map((event, index) => (
              <Col sm="6" md="4" key={index}>
                <Card className="mb-4">
                  {/* Banner Image */}
                  <CardImg top width="100%" src={event.bannerImage} alt="Event Banner" />
                  <CardBody>
                    <CardTitle tag="h5">{event.name}</CardTitle>
                    <CardText><strong>Date:</strong> {event.date}</CardText>
                    <CardText>{event.highlight}</CardText>
                    <Button color="secondary">
                      <Link to={event.link} style={{ color: "black", textDecoration: "none" }}>
                        View Highlights
                      </Link>
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </div>
    </div>
  );
};

export default Events;
