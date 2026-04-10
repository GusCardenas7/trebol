import MenuIcon from "../../assets/icons/MaterialSymbolsMenu.svg";
import CloseMenuIcon from "../../assets/icons/GridiconsCross.svg";

export default function MenuButton({ open, setOpen }) {
  return (
    <button
      onClick={() => setOpen(!open)}
      className="flex items-center md:hidden"
    >
      {open ? (
        <img
          src={CloseMenuIcon.src}
          alt="Close menu icon"
          className="linear h-8 w-8 rotate-90 transition-all duration-300"
        />
      ) : (
        <img
          src={MenuIcon.src}
          alt="Menu icon"
          className="linear h-8 w-8 rotate-0 transition-all duration-300"
        />
      )}
    </button>
  );
}
