import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

export default function Nav({ showLibrary, setShowLibrary }) {
  return (
    <nav>
      <h1>Musics</h1>
      <button onClick={() => setShowLibrary(!showLibrary)}>
        Library <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
}
