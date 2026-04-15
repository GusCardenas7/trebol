import MenuIcon from "../../assets/icons/menu.svg";
import CloseMenuIcon from "../../assets/icons/closeMenu.svg";

export default function MenuButton({ open, setOpen }) {
  return (
    <button
      onClick={() => setOpen(!open)}
      className="flex items-center md:hidden"
    >
      {open ? (
        <img
          src={CloseMenuIcon.src}
          alt=""
          aria-hidden="true"
          className="linear h-8 w-8 rotate-90 transition-all duration-500"
        />
      ) : (
        <img
          src={MenuIcon.src}
          alt=""
          aria-hidden="true"
          className="linear h-8 w-8 rotate-0 transition-all duration-500"
        />
      )}
    </button>
  );
}
