import React, { useState } from "react";
import "./App.css";

const initialReservations = [
  {
    date: "Tue, Jan 6",
    time: "1:00 PM - 4:30 PM",
    class: "C 12",
    club: "ECJE",
    timestamp: "Tue, Jan 2 10:20 AM",
  },
  {
    date: "Tue, Jan 6",
    time: "1:00 PM - 4:30 PM",
    class: "C 12",
    club: "ECJE",
    timestamp: "Tue, Jan 2 10:20 AM",
  },
  {
    date: "Tue, Jan 6",
    time: "1:00 PM - 4:30 PM",
    class: "C 12",
    club: "ECJE",
    timestamp: "Tue, Jan 2 10:20 AM",
  },
];

const ReservationCard = ({ reservation, onConfirmDeny }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [showDenyPopup, setShowDenyPopup] = useState(false);

  const handleConfirmClick = () => {
    setShowPopup(true);
  };

  const handleConfirm = () => {
    if (confirmationCode === "1234") {
      setIsConfirmed(true);
      setShowPopup(false);
    } else {
      alert("Incorrect code! Please try again.");
    }
  };

  const handleDenyClick = () => {
    setShowDenyPopup(true);
  };

  const confirmDeny = () => {
    onConfirmDeny();
    setShowDenyPopup(false);
  };

  return (
    <div className="card">
      <h3>Confirm Reservation?</h3>
      <p><strong>Date:</strong> {reservation.date}</p>
      <p><strong>Time:</strong> {reservation.time}</p>
      <p><strong>Class:</strong> {reservation.class}</p>
      <p><strong>Club:</strong> {reservation.club}</p>

      {!isConfirmed ? (
        <>
          <button className="confirm-btn" onClick={handleConfirmClick}>Confirm</button>
          <button className="deny-btn" onClick={handleDenyClick}>Deny</button>
        </>
      ) : (
        <p className="success-message">✅ Successfully confirmed!</p>
      )}

      {showPopup && (
        <div className="confirmation-popup">
          <p>Are you sure you want to confirm?</p>
          <input
            type="text"
            placeholder="Enter code (1234)"
            value={confirmationCode}
            onChange={(e) => setConfirmationCode(e.target.value)}
          />
          <button className="confirm" onClick={handleConfirm}>Confirm</button>
          <button className="cancel" onClick={() => setShowPopup(false)}>Cancel</button>
        </div>
      )}

      {showDenyPopup && (
        <div className="confirmation-popup">
          <p>Are you sure you want to deny this reservation?</p>
          <button className="confirm" onClick={confirmDeny}>Yes</button>
          <button className="cancel" onClick={() => setShowDenyPopup(false)}>No</button>
        </div>
      )}

      <p className="timestamp">{reservation.timestamp}</p>
    </div>
  );
};

function App() {
  const [reservations, setReservations] = useState(initialReservations);

  const handleDeny = (index) => {
    const updatedReservations = reservations.filter((_, i) => i !== index);
    setReservations(updatedReservations);
  };

  return (
    <div>
      <header>
        <h1>ENET'MAP</h1>
        <nav>
          <a href="#">Home</a>
          <a href="#">Schedule</a>
          <a href="#">Requests</a>
          <a href="#">About</a>
          <a href="#">Messages</a>
        </nav>
      </header>

      <div className="container">
        {reservations.map((res, index) => (
          <ReservationCard
            key={index}
            reservation={res}
            onConfirmDeny={() => handleDeny(index)}
          />
        ))}
      </div>

      <footer>
        <p>&copy; 2025 ENET'MAP. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;





