
function RoomCard(props) {
  return (
    <div className="bg-white text-black p-4 shadow">
      <img
        src={props.image}
        alt={props.name}
        className="w-full h-48 object-cover"
      />

      <h3 className="text-xl text-[#17243A] mt-3">
        {props.name}
      </h3>

      <p>{props.description}</p>

      <p className="text-xl font-bold text-[#9A762E] mt-3">
        {props.price} per night
      </p>

      <button
        onClick={props.onBook}
        className="bg-[#17243A] text-white p-2 mt-3"
      >
        Choose Room
      </button>
    </div>
  );
}

export default RoomCard;
