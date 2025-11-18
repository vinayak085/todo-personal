import { useMoveBack } from "../hooks/useMoveBack";


function PageNotFound() {
  const moveBack = useMoveBack();

  return (
    <>
     The page you are looking for could not be found 😢
  
        <button onClick={moveBack}>
          &larr; Go back
        </button>
    </>
  );
}

export default PageNotFound;