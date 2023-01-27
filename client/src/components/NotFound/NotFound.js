import "./NotFound.css";
import "../../App.v1.css";
import "../Home/Home.css";

const NotFound = () => {
  return (
    <div className="centered-row w-100 h-100">
      <div className="centered-column h-100 w-100">
        <div className="info centered-text round-bg p-3 bg-color top-margin">
          <h1>
            <span style={{ color: "orange" }}>Page Not Found</span> or{" "}
            <span style={{ color: "orange" }}>Under Construction!</span>
          </h1>
          <hr />
          <p>
            The page you were looking for does not exist or is currently under
            construction. The Autographic Atlas of Korea is undergoing
            development - some content may not exist yet! Please check back
            soon or navigate to an existing page.
          </p>
        </div>
      </div>
    </div>
  );
};

export { NotFound };
