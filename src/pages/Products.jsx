import { useLocation, useNavigate } from "react-router-dom";

const Products = () => {
  let { search } = useLocation();
  let queryParams = new URLSearchParams(search);

  let limit = 20;
  let start = parseInt(queryParams.get("start")) || 1;
  let end = parseInt(queryParams.get("end")) || limit;

  let navigate = useNavigate();

  const handlePrevious = (e) => {
    navigate(`?start=${start - limit}&end=${end - limit}`);
  };

  const handleNext = (e) => {
    navigate(`?start=${start + limit}&end=${end + limit}`);
  };

  return (
    <div>
      <h3>Products</h3>
      <p>
        Showing products from <b>{start}</b> to <b>{end}</b>
      </p>
      <div>
        {start > limit && <button onClick={handlePrevious}>Previous</button>}
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default Products;
