import { CgProfile } from "react-icons/cg";
import { FaCaretDown } from "react-icons/fa";
import "./index.css";

const Navbar = () => (
  <div className="nav-bar">
    <button className="nav-option bid">Bid</button>
    <button className="nav-option">POD</button>
    <button className="nav-option">Vendor</button>
    <button className="nav-option">User</button>
    <button className="nav-option">
      <CgProfile /> Freight EG <FaCaretDown />
    </button>
  </div>
);

export default Navbar;
