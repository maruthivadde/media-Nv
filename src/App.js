import { CiSearch } from "react-icons/ci";
import { FaPlusSquare } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { FaFilter } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { FaArrowDownLong } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendar } from "react-icons/fa";
import { FaBus } from "react-icons/fa";
import { BsBoxFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { FaCaretUp } from "react-icons/fa";

import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";

import "./App.css";

const App = () => (
  <div className="app-container">
    <SideBar />
    <div className="container">
      <Navbar />
      <div className="h1-container">
        <div className="a1-containwr">
          <p className="live">Live</p>
          <p>Results</p>
          <p>History</p>
          <div className="input-container">
            <CiSearch />
            <input type="text" placeholder="Searcg" className="input" />
          </div>
        </div>
        <button type="button" className="button">
          {" "}
          Create <FaPlusSquare />
        </button>
      </div>
      <div className="h2-container">
        <div className="a2-container">
          <p className="live-30">Live (30)</p>
          <p className="resp-30">Responde (30)</p>
          <p className="unew-30">Unresonde (30)</p>
        </div>
        <div className="h3-container">
          <p className="big">Bid Created</p>
          <p className="today">Today</p>
          <p className="yesterday">Yesterday</p>
          <button type="button" className="burron-2">
            Calender <FaCaretDown />
          </button>
          <FaFilter className="filtter" />
        </div>
      </div>
      <div className="h4-container">
        <p className="mani">S No.</p>
        <p className="mani">Bid Number Created By</p>
        <p className="mani">Stat Date & Time</p>
        <p className="mani">Bid Time Remaining</p>
        <p className="mani">From City To City</p>
        <p className="mani">Vehice Type,Size Body,No.of Vehicle</p>
        <p className="mani">Material Weight (in Kg)</p>
        <p className="mani">Response</p>
        <p className="mani">Assigned Staff</p>
        <p className="mani">Details</p>
      </div>
      <div className="h5-container">
        <p>
          <GoDotFill className="dot" /> 1
        </p>
        <div className="co-co">
          <p className="mar">#122345678123</p>
          <p className="sur">Sunder Yadav</p>
        </div>
        <div className="co-co">
          <p className="mar">14/02/2024</p>
          <p className="sur">05:40pm</p>
        </div>
        <p className="mar">7hr 20 min</p>
        <div className="co-co">
          <p className="mar">Gurgaon</p>
          <FaArrowDownLong />
          <p className="mar">Mumbai</p>
        </div>
        <div className="co-co">
          <p className="mar">Truck,20 ft</p>
          <p className="mar">Close body , 1</p>
        </div>
        <p className="mar">4000 Kg</p>
        <div className="co-co">
          <p className="mar">4</p>
          <p className="view-0">View result</p>
        </div>
        <div className="co-co">
          <p className="mar">Mohit</p>
          <p className="sur">5215001161264</p>
        </div>
        <p className="view-0">View Details</p>
      </div>
      <div className="color-container">
        <div className="first-container">
          <p className="pappa">
            Bid No:16515120650125{" "}
            <span className="Haryana">(Sunder Yadav)</span>
          </p>
          <div className="iner-container">
            <div className="in-if-co">
              <GoDotFill className="col" />
              <FaArrowDownLong className="lin" />
              <FaLocationDot className="red" />
            </div>
            <div className="se-if-co">
              <p className="gurugram">
                Manesar,Gurugram, <span className="Haryana">Haryana</span>
              </p>
              <p className="pont">
                Loading Point:{" "}
                <span className="oli">
                  Ramchandra Ramniwas oil mill, Alwar,Rajasthan
                </span>
              </p>
              <p className="gurugram">
                Kotputil,<span className="Haryana">Rajasthan</span>
              </p>
              <p className="red">
                Unloading Point:{" "}
                <span className="oli">
                  Ramchandra Ramniwas oil mill, Alwar,Rajasthan
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="second-container">
          <p className="pappa">
            {" "}
            <FaCalendar className="ll" />
            Vehice loading data: 17/20/2024
          </p>
          <p className="pappa">
            {" "}
            <FaBus className="ll" /> Vahicle Type:{" "}
            <span className="sky">20 ft Truck (Close Body)</span>{" "}
            <button className="sky-button" type="button">
              CNG
            </button>
          </p>
          <p className="pappa">
            {" "}
            <BsBoxFill className="ll" />
            Material: <span className="sky">Agricultural Products</span>
            <span className="pappa">Weight:</span>
            <span className="sky"> 14 Tonnes</span>
          </p>
          <p className="pappa">
            <FaBus className="ll" /> Request Date:
            <span className="sky">15/02/2024</span>
            <span className="pappa">
              <FaBus className="ll" />
              Expiry Date:
            </span>{" "}
            <span className="sky">15/02/2024</span>
          </p>
          <p className="pappa">
            Remarks:<span className="sky">Urgent Delivery</span>
          </p>
        </div>
        <div className="therd-container">
          <p className="pappa">
            {" "}
            <FaUser className="ll" />
            Assigned Staff: <span className="skyy">Rahul Panday</span>
          </p>
          <p className="pappa">
            <IoMdCall className="ll" />
            Phone number:<span className="skyy">+91 332423442442</span>
          </p>
          <p className="pappa">
            Target Price:<span className="skyy">Rs 5000</span>
          </p>
          <p className="pappa">
            Number of Bider for this Bid:
            <span className="skyy">54 view Details</span>
          </p>
          <p className="up">
            Viwe less <FaCaretUp />
          </p>
        </div>
      </div>
      <div className="h5-container">
        <p>
          <GoDotFill className="dot" /> 1
        </p>
        <div className="co-co">
          <p className="mar">#122345678123</p>
          <p className="sur">Sunder Yadav</p>
        </div>
        <div className="co-co">
          <p className="mar">14/02/2024</p>
          <p className="sur">05:40pm</p>
        </div>
        <p className="mar">7hr 20 min</p>
        <div className="co-co">
          <p className="mar">Gurgaon</p>
          <FaArrowDownLong />
          <p className="mar">Mumbai</p>
        </div>
        <div className="co-co">
          <p className="mar">Truck,20 ft</p>
          <p className="mar">Close body , 1</p>
        </div>
        <p className="mar">4000 Kg</p>
        <div className="co-co">
          <p className="mar">4</p>
          <p className="view-0">View result</p>
        </div>
        <div className="co-co">
          <p className="mar">Mohit</p>
          <p className="sur">5215001161264</p>
        </div>
        <p className="view-0">View Details</p>
      </div>
      <hr className="hr" />
      <div className="h5-container">
        <p>
          <GoDotFill className="dot" /> 1
        </p>
        <div className="co-co">
          <p className="mar">#122345678123</p>
          <p className="sur">Sunder Yadav</p>
        </div>
        <div className="co-co">
          <p className="mar">14/02/2024</p>
          <p className="sur">05:40pm</p>
        </div>
        <p className="mar">7hr 20 min</p>
        <div className="co-co">
          <p className="mar">Gurgaon</p>
          <FaArrowDownLong />
          <p className="mar">Mumbai</p>
        </div>
        <div className="co-co">
          <p className="mar">Truck,20 ft</p>
          <p className="mar">Close body , 1</p>
        </div>
        <p className="mar">4000 Kg</p>
        <div className="co-co">
          <p className="mar">4</p>
          <p className="view-0">View result</p>
        </div>
        <div className="co-co">
          <p className="mar">Mohit</p>
          <p className="sur">5215001161264</p>
        </div>
        <p className="view-0">View Details</p>
      </div>
      <hr className="hr" />
      <div className="h5-container">
        <p>
          <GoDotFill className="dot" /> 1
        </p>
        <div className="co-co">
          <p className="mar">#122345678123</p>
          <p className="sur">Sunder Yadav</p>
        </div>
        <div className="co-co">
          <p className="mar">14/02/2024</p>
          <p className="sur">05:40pm</p>
        </div>
        <p className="mar">7hr 20 min</p>
        <div className="co-co">
          <p className="mar">Gurgaon</p>
          <FaArrowDownLong />
          <p className="mar">Mumbai</p>
        </div>
        <div className="co-co">
          <p className="mar">Truck,20 ft</p>
          <p className="mar">Close body , 1</p>
        </div>
        <p className="mar">4000 Kg</p>
        <div className="co-co">
          <p className="mar">4</p>
          <p className="view-0">View result</p>
        </div>
        <div className="co-co">
          <p className="mar">Mohit</p>
          <p className="sur">5215001161264</p>
        </div>
        <p className="view-0">View Details</p>
      </div>
      <hr className="hr" />
      <div className="h5-container">
        <p>
          <GoDotFill className="dot" /> 1
        </p>
        <div className="co-co">
          <p className="mar">#122345678123</p>
          <p className="sur">Sunder Yadav</p>
        </div>
        <div className="co-co">
          <p className="mar">14/02/2024</p>
          <p className="sur">05:40pm</p>
        </div>
        <p className="mar">7hr 20 min</p>
        <div className="co-co">
          <p className="mar">Gurgaon</p>
          <FaArrowDownLong />
          <p className="mar">Mumbai</p>
        </div>
        <div className="co-co">
          <p className="mar">Truck,20 ft</p>
          <p className="mar">Close body , 1</p>
        </div>
        <p className="mar">4000 Kg</p>
        <div className="co-co">
          <p className="mar">4</p>
          <p className="view-0">View result</p>
        </div>
        <div className="co-co">
          <p className="mar">Mohit</p>
          <p className="sur">5215001161264</p>
        </div>
        <p className="view-0">View Details</p>
      </div>
    </div>
  </div>
);

export default App;
