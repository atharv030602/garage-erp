import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <div
      className="
      bg-white
      rounded-xl
      shadow-sm
      p-4
      flex
      justify-between
      items-center
      mb-6
      "
    >
      <input
        type="text"
        placeholder="Search..."
        className="
        border
        rounded-lg
        px-4
        py-2
        w-80
        "
      />

      <div
        className="
        flex
        items-center
        gap-4
        "
      >
        <ThemeToggle />

        <div className="text-right">
          <h3 className="font-semibold">
            Admin
          </h3>

          <p className="text-sm text-gray-500">
            Garage Owner
          </p>
        </div>

        <img
          src="https://ui-avatars.com/api/?name=Admin"
          alt="Admin"
          className="
          w-10
          h-10
          rounded-full
          "
        />
      </div>
    </div>
  );
};

export default Navbar;