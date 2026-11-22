
function Navbar({ onAccountClick }) {
  return (
    <nav className="bg-black text-white p-5 text-center">
      <h1 className="text-2xl">HotelHub</h1>

      <div className="mt-4 flex flex-wrap justify-center gap-6">
        <a href="#home">Home</a>
        <a href="#rooms">Rooms</a>
        <a href="#facilities">Facilities</a>
        <a href="#about">About</a>
        <a href="#booking">Booking</a>
        <a href="#contact">Contact</a>

        <button onClick={onAccountClick} className="text-[#D6B978]">
          Sign In / Join
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
