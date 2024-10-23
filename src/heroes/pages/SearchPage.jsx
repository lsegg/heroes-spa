import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { useForm } from "../../hooks";
import { HeroCard } from "../components";
import { getHeroesByName } from "../helpers";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);
  const heroes = getHeroesByName(q);

  const { searchText, handleInputChange } = useForm({
    searchText: q,
  });

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchText.trim().length <= 1) return;
    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <h1>Hero Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="search your hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={handleInputChange}
            />
            <button className="btn btn-outline-dark mt-3">Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {q === "" ? (
            <div className="alert alert-primary">Search a hero</div>
          ) : heroes.length ? (
            <div className="alert alert-primary">Results: {heroes.length}</div>
          ) : (
            <div className="alert alert-danger">
              No results with {q || "your search"}
            </div>
          )}
        </div>
      </div>
      <div className="row mt-3">
        {heroes.map((hero) => (
          <div className="col-6 animate__animated animate__fadeIn">
            <HeroCard key={hero.id} {...hero} />
          </div>
        ))}
      </div>
    </>
  );
};
