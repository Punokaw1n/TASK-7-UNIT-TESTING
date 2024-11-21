import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-pink-300 absolute top-0 left-0 w-full flex items-center z-10">
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            <Link to="/" className="font-bold text-lg block py-6 text-primary">
              <img src="/assets/hippo2.svg" alt="Logo" className="w-[90px]" />
            </Link>
          </div>
          <div className="flex items-center px-4">
            <nav className=" lg:bg-transparent lg:max-w-full lg:rounded-none lg:shadow-none">
              <ul className="block lg:flex">
                <li className="group">
                  <Link
                    to="/"
                    className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                  >
                    Home
                  </Link>
                </li>
                <li className="group">
                  <Link
                    to="/about"
                    className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                  >
                    About
                  </Link>
                </li>

                <li className="group">
                  <Link
                    to="experience"
                    className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                  >
                    Experience
                  </Link>
                </li>
                <li className="group">
                  <Link
                    to="todolist"
                    className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                  >
                    TodoList
                  </Link>
                </li>

                <li className="group">
                  <Link
                    to="/contact"
                    className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
