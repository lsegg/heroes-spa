import { useLocation, useNavigate } from "react-router-dom";

export const ErrorPage = () => {
  const { pathname, search } = useLocation();
  const lastPath = pathname + search;
  localStorage.setItem("lastPath", lastPath);
  const navigate = useNavigate();
  const handleNavigateBack = () => {
    navigate(-1);
  };

  return (
    <div className="container mt-5">
      <div className="alert alert-danger d-flex justify-content-between">
        <p>Oops! It seems the page you're looking for doesn't exist</p>
        <button className="btn btn-danger" onClick={handleNavigateBack}>
          Go back
        </button>
      </div>
    </div>
  );
};
