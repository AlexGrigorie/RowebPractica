import { Link } from "react-router-dom";

const Message = () => {
  return (
    <>
      <h1 className="text-danger fs-2 text-center mt-3">
        In order to acces this page you have to log in!
      </h1>
      <Link to="/" className="text-center d-block">
        Go to login page
      </Link>
    </>
  );
};

export default Message;
