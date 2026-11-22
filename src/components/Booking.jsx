
import { useState, useContext, useEffect } from "react";
import BookingContext from "./BookingContext";
import { auth, db } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  doc,
  updateDoc,
  deleteDoc
} from "firebase/firestore";

function Booking() {
  const selectedRoom = useContext(BookingContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkInTime, setCheckInTime] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [checkOutTime, setCheckOutTime] = useState("");
  const [message, setMessage] = useState("");
  const [bookings, setBookings] = useState([]);
  const [editId, setEditId] = useState("");

  async function getBookings() {
    const user = auth.currentUser;

    if (!user) {
      setBookings([]);
      return;
    }

    const bookingQuery = query(
      collection(db, "bookings"),
      where("userId", "==", user.uid)
    );

    const result = await getDocs(bookingQuery);

    const bookingList = result.docs.map((item) => ({
      id: item.id,
      ...item.data()
    }));

    setBookings(bookingList);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, () => {
      getBookings();
    });

    return () => unsubscribe();
  }, []);

  async function handleBooking(e) {
    e.preventDefault();

    const user = auth.currentUser;

    if (!user) {
      setMessage("Please login before booking.");
      return;
    }

    if (!selectedRoom) {
      setMessage("Please select a room first.");
      return;
    }

    const bookingData = {
      name: name,
      email: email,
      room: selectedRoom,
      checkIn: checkIn,
      checkInTime: checkInTime,
      checkOut: checkOut,
      checkOutTime: checkOutTime,
      userId: user.uid
    };

    try {
      if (editId) {
        await updateDoc(doc(db, "bookings", editId), bookingData);
        setMessage("Booking updated successfully!");
        setEditId("");
      } else {
        await addDoc(collection(db, "bookings"), bookingData);
        setMessage("Your booking has been saved!");
      }

      setName("");
      setEmail("");
      setCheckIn("");
      setCheckInTime("");
      setCheckOut("");
      setCheckOutTime("");

      getBookings();
    } catch (error) {
      setMessage("Error: " + error.message);
    }
  }

  function editBooking(booking) {
    setEditId(booking.id);
    setName(booking.name);
    setEmail(booking.email);
    setCheckIn(booking.checkIn);
    setCheckInTime(booking.checkInTime);
    setCheckOut(booking.checkOut);
    setCheckOutTime(booking.checkOutTime);
  }

  async function deleteBooking(id) {
    try {
      await deleteDoc(doc(db, "bookings", id));
      setMessage("Booking deleted successfully!");
      getBookings();
    } catch (error) {
      setMessage("Error: " + error.message);
    }
  }

  return (
    <div className="bg-[#F3E9D8] text-[#1C1917] p-8 rounded-lg max-w-lg mx-auto">

      <h2 className="text-3xl text-center text-[#5C4033] mb-5">
        Book Your Room
      </h2>

      <p className="mb-4">
        Selected Room: {selectedRoom || "No room selected"}
      </p>

      <form onSubmit={handleBooking} className="flex flex-col gap-3">

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-3 border rounded bg-white text-black"
          required
        />

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-3 border rounded bg-white text-black"
          required
        />

        <label>Check-in Date</label>
        <input
          type="date"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          className="p-3 border rounded bg-white text-black"
          required
        />

        <label>Check-in Time</label>
        <input
          type="time"
          value={checkInTime}
          onChange={(e) => setCheckInTime(e.target.value)}
          className="p-3 border rounded bg-white text-black"
          required
        />

        <label>Check-out Date</label>
        <input
          type="date"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          className="p-3 border rounded bg-white text-black"
          required
        />

        <label>Check-out Time</label>
        <input
          type="time"
          value={checkOutTime}
          onChange={(e) => setCheckOutTime(e.target.value)}
          className="p-3 border rounded bg-white text-black"
          required
        />

        <button
          type="submit"
          className="bg-[#5C4033] text-white p-3 rounded"
        >
          {editId ? "Update Booking" : "Confirm Booking"}
        </button>

      </form>

      <p className="text-center mt-4 text-[#1C1917]">
        {message}
      </p>

      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4">My Bookings</h3>

        {bookings.map((booking) => (
          <div key={booking.id} className="bg-white p-4 rounded mb-3">
            <p>Name: {booking.name}</p>
            <p>Room: {booking.room}</p>
            <p>Check-in: {booking.checkIn}</p>
            <p>Check-out: {booking.checkOut}</p>

            <button
              type="button"
              onClick={() => editBooking(booking)}
              className="bg-[#5C4033] text-white p-2 rounded mt-2 mr-2"
            >
              Edit
            </button>

            <button
              type="button"
              onClick={() => deleteBooking(booking.id)}
              className="bg-red-700 text-white p-2 rounded mt-2"
            >
              Delete
            </button>
          </div>
        ))}

        {bookings.length === 0 && <p>No bookings yet.</p>}
      </div>

    </div>
  );
}

export default Booking;
