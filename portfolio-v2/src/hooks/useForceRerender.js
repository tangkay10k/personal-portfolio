import { useCallback, useState } from "react";

const useForceRerender = () => {
  const [key, setKey] = useState(0);

  const forceRerender = useCallback(() => {
    setKey((prevKey) => prevKey + 1);
  }, []);

  return [key, forceRerender];
};

export default useForceRerender;