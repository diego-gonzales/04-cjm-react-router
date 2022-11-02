import { Routes, Route, Link } from "react-router-dom";

const BasicConcepts = () => {
  return (
    <div>
      <h2>BasicConcepts</h2>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

const Home = () => {
  return (
    <>
      <main>
        <h2>This is the homepage!</h2>
      </main>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </>
  );
};

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

export default BasicConcepts;
