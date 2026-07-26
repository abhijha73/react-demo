import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div>
      <div>Oops something went wrong!!</div>;<div>status: {err.status}</div>
      <div>statusText: {err.statusText}</div>
    </div>
  );
};

export default Error;
