
function Facilities() {
  return (
    <div className="text-center p-6 bg-[#F3E9D8]">
      <h2 className="text-3xl text-[#5C4033] mb-6">
        Our Facilities
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div className="bg-white p-3 rounded-lg">
          <img
            src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=1000"
            alt="Swimming Pool"
            className="w-full h-80 object-cover rounded-lg"
          />
          <h3 className="text-xl text-[#5C4033] mt-3">
            Swimming Pool
          </h3>
        </div>

        <div className="bg-white p-3 rounded-lg">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1000"
            alt="Restaurant"
            className="w-full h-80 object-cover rounded-lg"
          />
          <h3 className="text-xl text-[#5C4033] mt-3">
            Restaurant
          </h3>
        </div>

        <div className="bg-white p-3 rounded-lg">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1000"
            alt="Gym"
            className="w-full h-80 object-cover rounded-lg"
          />
          <h3 className="text-xl text-[#5C4033] mt-3">
            Gym
          </h3>
        </div>

        <div className="bg-white p-3 rounded-lg">
          <img
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1000"
            alt="Spa"
            className="w-full h-80 object-cover rounded-lg"
          />
          <h3 className="text-xl text-[#5C4033] mt-3">
            Spa
          </h3>
        </div>

      </div>
    </div>
  );
}

export default Facilities;
