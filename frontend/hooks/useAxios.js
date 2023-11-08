import axios from "axios";
import { useState } from "react";

export const useAxios = (type, baseURL, params) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const getData = () => {
    setLoading(true);
    axios[type](baseURL, params)
      .then((res) => setData(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  return [data, error, loading, getData];
};
