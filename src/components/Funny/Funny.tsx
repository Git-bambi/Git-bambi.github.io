import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const linkAddress = "https://www.youtube.com/watch?v=guuFLs2J7NY&t=11s";

const Funny = () => {
  const history = useHistory();

  useEffect(() => {
    window.open(linkAddress, "_blank", "noreferrer");
    history.push('/');
  }, []);

  return (
    <div>
      <h1>
        Śmieszne
      </h1>
    </div>
  )
}

export default Funny;