import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <main>
        <h2>This is the about page!</h2>
      </main>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </>
  );
};

export default About;