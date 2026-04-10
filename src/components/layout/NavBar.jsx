import { useState } from "react";
import MenuButton from "../ui/MenuButton.jsx";
import NavLinks from "./NavLinks.jsx";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-auto">
      <div className="flex justify-end md:hidden">
        <MenuButton open={open} setOpen={setOpen} />
      </div>

      <NavLinks open={open} />
    </div>
  );
}
