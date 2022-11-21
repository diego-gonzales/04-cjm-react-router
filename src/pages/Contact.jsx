import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <main>
        <h2>This is the contact page!</h2>
      </main>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
};

export default Contact;