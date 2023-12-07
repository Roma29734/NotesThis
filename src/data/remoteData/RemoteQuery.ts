import axios from "axios";
import { useEffect, useState } from "react";

const useRequest = () => {
  const [resultItem, setResultItem] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true)
    axios
      .get('/users', {
        headers: {
          'X-Parse-Application-Id': '1',
          'X-Parse-REST-API-Key': '2',
          'Content-Type': 'application/json'
        }
      })
      .then(({data}) => {
        setResultItem(data);
      }).catch(err => {
      console.log(err);
    }).finally(() => {
        setIsLoading(false);
      }
    )
  }, []);

  return {items: resultItem, isLoading,};

}

export default useRequest;
