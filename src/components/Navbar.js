import React ,{useState,useEffect}from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
// import {useHistory} from "react-router-dom"
import '../index.css';
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Chip,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  UserCircleIcon,
  CubeTransparentIcon,
  Bars3Icon,
  XMarkIcon,
  FlagIcon,
  ChatBubbleOvalLeftIcon,
  UsersIcon,
  FolderIcon,
  Square3Stack3DIcon,
  RocketLaunchIcon,
  FaceSmileIcon,
  PuzzlePieceIcon,
  GiftIcon,
} from "@heroicons/react/24/outline";
import LaborerLogout  from "./labour/L_logout";
import ClientLogout from "./client/Client_logout";


const colors = {
  blue: "bg-blue-50 text-blue-500",
  orange: "bg-orange-50 text-orange-500",
  green: "bg-green-50 text-green-500",
  "blue-gray": "bg-blue-gray-50 text-blue-gray-500",
  purple: "bg-purple-50 text-purple-500",
  teal: "bg-teal-50 text-teal-500",
  cyan: "bg-cyan-50 text-cyan-500",
  pink: "bg-pink-50 text-pink-500",
};

const navListMenuItems = [
  {
    color: "blue",
    icon: FlagIcon,
    title: "Carpenters",
    description: "Learn about our story and our mission statement.",
  },
  {
    color: "orange",
    icon: ChatBubbleOvalLeftIcon,
    title: "Electricians",
    description: "News and writings, press releases, and resources",
  },
  {
    color: "green",
    icon: UsersIcon,
    title: (
      <div className="flex items-center gap-1">
        Careers{" "}
        <Chip
          size="sm"
          color="green"
          variant="ghost"
          value="We're hiring!"
          className="capitalize"
        />
      </div>
    ),
    description: "We are always looking for talented people. Join us!",
  },
  {
    color: "blue-gray",
    icon: FolderIcon,
    title: "Plumbers",
    description: "All the stuff that we dan from Labour made us add.",
  },
  {
    color: "purple",
    icon: RocketLaunchIcon,
    title: "Mason",
    description: "Checkout our products that helps a startup running.",
  },
  {
    color: "teal",
    icon: FaceSmileIcon,
    title: "Plasterers",
    description: "Set of beautiful icons that you can use in your project.",
  },
  {
    color: "cyan",
    icon: PuzzlePieceIcon,
    title: "All MarketPlace",
    description: "High quality UI Kits helps you to 2x faster.",
  },
  {
    color: "pink",
    icon: GiftIcon,
    title: "Painter",
    description: "List of all our open-source projects, it's all free.",
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const renderItems = navListMenuItems.map(
    ({ icon, title, description, color }, key) => (
      <a href="/" key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <div className={`rounded-lg p-5 ${colors[color]}`}>
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 w-6",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm"
            >
              {title}
            </Typography>
            <Typography variant="small" color="gray" className="font-normal">
              {description}
            </Typography>
          </div>
        </MenuItem>
      </a>
    )
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-normal">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              <Square3Stack3DIcon className="h-[18px] w-[18px]" />
              Labour Service Providers
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-2xl rounded-xl lg:block">
          <ul className="grid grid-cols-4 gap-y-2">{renderItems}</ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

// NavList component
function NavList({ isAuthenticated, userName, handleLogout }) {
  const isClient = Cookies.get("clientName") !== undefined;
  const isLaborer = Cookies.get("laborerName") !== undefined;
  const [showRegisterDropdown, setShowRegisterDropdown] = React.useState(false);
  const [showLoginDropdown, setShowLoginDropdown] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState(null);

  const handleRegister = (option) => {
    setSelectedOption(option);
    setShowRegisterDropdown(false);
    // You can perform any other actions here based on the selected option
  };

  const handleLogin = (option) => {
    setSelectedOption(option);
    setShowLoginDropdown(false);
  };

  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        as="a"
        href="/market"
        variant="small"
        color="blue-gray"
        className="font-normal"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Labour Marketplace
        </ListItem>
      </Typography>
      <NavListMenu />
      {(isAuthenticated && (isClient || isLaborer)) && (
        <Typography
          as="a"
          href={isClient ? "/client/dash" : "/ls/cli"}
          variant="small"
          color="blue-gray"
          className="font-normal"
        >
          <ListItem className="flex items-center gap-2 py-2 pr-4">
            <UserCircleIcon className="h-[18px] w-[18px]" />
            Account
          </ListItem>
        </Typography>
      )}
      {isAuthenticated && (
        <div className="hidden gap-2 lg:flex">
          <Typography variant="small" color="blue-gray" className="font-normal">
            <ListItem className="flex items-center gap-2 py-2 pr-4">
              Welcome, {userName}!
            </ListItem>
          </Typography>
          <Button variant="text" size="sm" color="blue-gray" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      )}
      {!isAuthenticated && (
        <div className="hidden gap-2 lg:flex">
          <div className="relative">
            <Button variant="text" size="sm" color="blue-gray" onClick={() => setShowLoginDropdown(!showLoginDropdown)}>
              Log In
            </Button>
            {showLoginDropdown && (
              <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <a href="/cl/login">
                    <button onClick={() => handleLogin("Client")} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                      Customer
                    </button>
                  </a>
                  <a href="/ls/login">
                    <button onClick={() => handleLogin("Labour")} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                      Labourer
                    </button>
                  </a>
                </div>
              </div>
            )}
          </div>
          <div className="relative">
            <Button variant="gradient" size="sm" fullWidth onClick={() => setShowRegisterDropdown(!showRegisterDropdown)}>
              Register
            </Button>
            {showRegisterDropdown && (
              <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <a href="/cl/register">
                    <button onClick={() => handleRegister("Client")} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                      Customer
                    </button>
                  </a>
                  <a href="/ls/register">
                    <button onClick={() => handleRegister("Labour")} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                      Labourer
                    </button>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </List>
  );
}




// NavbarWeb component

function NavbarWeb() {
  const [openNav, setOpenNav] = useState(false);
  const [userName, setUserName] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const loggedIn = Cookies.get("loggedIn");
    const clientName = Cookies.get("clientName");
    const laborerName = Cookies.get("laborerName")
    console.log(clientName);
    console.log(laborerName);

    if (loggedIn === "true" ) {
      const name =clientName || laborerName
      // if(clientName){
      //   setUserName(clientName)
      // } else if(laborerName){
      //   setUserName(laborerName)
      // }
      setUserName(name)
      setIsAuthenticated(true);
     }
  }, []);

  const handleLogout = async () => {
    Cookies.remove('loggedIn');
    Cookies.remove('accessToken');
    Cookies.remove('clientId');
    Cookies.remove('categoryName');
    Cookies.remove('labourId');
    const clientName = Cookies.get("clientName");
    if (clientName) {
      ClientLogout(); // Use the imported ClientLogout function
      Cookies.remove('clientName');
    } else {
      LaborerLogout(); // Use the imported LaborerLogout function
      Cookies.remove('laborerName');
    }
    setIsAuthenticated(false);
    setUserName("");
     window.location.href = '/'
  }



  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="mx-auto max-w-screen-3xl px-4 py-2 bottom-nav">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="/"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 lg:ml-2"
        >
          <div className="flex items-center">
            <img src="/images/logo.png" alt="logo" className="h-10 w-auto" />
            <span className="text-xl font-bold ml-2">LABOURCENTRE</span>
          </div>
        </Typography>
        <div className="hidden lg:block">
          <NavList isAuthenticated={isAuthenticated} userName={userName} handleLogout={handleLogout} />
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList isAuthenticated={isAuthenticated} userName={userName} handleLogout={handleLogout} />
      </Collapse>
    </Navbar>
  );
}


export default NavbarWeb;
