import { Link } from "react-router-dom";

function NavBar() {
  return (
    <section className="nav-bar">
    <Link to={"/" }> Home Page</Link>
    <Link to={"/topics"}>Topics</Link>
    </section>
  )
}

export default NavBar;
