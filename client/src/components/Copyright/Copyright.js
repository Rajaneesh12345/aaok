import "../../App.v1.css";
import "./Copyright.css";

const Copyright = () => {
  let jsDate = new Date();
  let dd = String(jsDate.getDate()).padStart(2, "0");
  let mm = String(jsDate.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = jsDate.getFullYear();

  let today = mm + "/" + dd + "/" + yyyy;
  return (
    <div>
      <b>© Copyright Maya Stiller</b>, last update {today}.
    </div>
  );
};

export { Copyright };
