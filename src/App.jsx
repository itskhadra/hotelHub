
import { useState, useEffect, useRef } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import Navbar from "./components/Navbar";
import RoomCard from "./components/RoomCard";
import Facilities from "./components/Facilities";
import About from "./components/About";
import Booking from "./components/Booking";
import Contact from "./components/Contact";
import BookingContext from "./components/BookingContext";
import { auth } from "./firebase";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  const [selectedRoom, setSelectedRoom] = useState("");
  const [showAccount, setShowAccount] = useState(false);
  const [user, setUser] = useState(null);

  const bookingSection = useRef(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  function selectRoom(room) {
    setSelectedRoom(room);
    bookingSection.current.scrollIntoView();
  }

  function logoutUser() {
    signOut(auth);
  }

  return (
    <BookingContext.Provider value={selectedRoom}>
      <div id="home" className="bg-[#252525] text-white">
        <Navbar onAccountClick={() => setShowAccount(true)} />

        {showAccount && (
          <div id="account" className="bg-white text-gray-800 p-5">
            <button
              onClick={() => setShowAccount(false)}
              className="mb-4"
            >
              Back to HotelHub
            </button>

            {user ? (
              <div className="text-center p-5">
                <h2 className="text-2xl">Welcome to HotelHub!</h2>
                <p className="mt-3">{user.email}</p>
                <button
                  onClick={logoutUser}
                  className="bg-[#B99A5B] text-white p-3 mt-4"
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <Login />
                <Register />
              </>
            )}
          </div>
        )}

        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1400"
          alt="Hotel"
          className="w-full h-80 object-cover"
        />

        <div className="bg-[#17243A] text-center p-8">
          <h2 className="text-3xl text-[#D6B978]">
            Welcome to HotelHub
          </h2>
          <p>Enjoy comfort and luxury.</p>
        </div>

        <h2 id="rooms" className="text-center text-2xl p-5 text-[#D6B978]">
          Our Rooms
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5">
          <RoomCard
            name="Single Room"
            description="Room for one guest."
            price="KSh 4,500"
            image="https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=700"
            onBook={() => selectRoom("Single Room")}
          />

          <RoomCard
            name="Double Room"
            description="Room for two guests."
            price="KSh 7,500"
            image="https://images.unsplash.com/photo-1590490360182-c33d57733427?w=700"
            onBook={() => selectRoom("Double Room")}
          />

          <RoomCard
            name="Deluxe Room"
            description="A comfortable luxury room."
            price="KSh 12,000"
            image="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=700"
            onBook={() => selectRoom("Deluxe Room")}
          />
        </div>

        <div id="facilities" className="p-5">
          <Facilities />
        </div>

        <div id="about" className="bg-[#17243A] text-white p-5">
          <About />
        </div>

        <div id="booking" ref={bookingSection} className="p-5">
          <Booking />
        </div>

        <div id="contact" className="bg-[#17243A] text-white p-5">
          <Contact />
        </div>
      </div>
    </BookingContext.Provider>
  );
}

export default App;
