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

export default Home;