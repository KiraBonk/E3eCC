import Link from "next/link";

import { useState } from "react";

const NavItem = (props: any) => {
  const [open, setOpen] = useState(false);
  return (
    <li className="nav-item">
      <div className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </div>

      {open && props.children}
    </li>
  );
};

export default NavItem;
