import { useState } from "react";

const useOnlineOfflineStatus = () => {
  const [status, setStatus] = useState(true);

  window.addEventListener("offline", (event) => {
    setStatus(false);
  });

  window.addEventListener("online", (event) => {
    setStatus(true);
  });

  return status;
};

export default useOnlineOfflineStatus;
