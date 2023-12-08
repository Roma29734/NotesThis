import axios from "axios";
import { useEffect, useState } from "react";
import { Application_Id, REST_API_Key } from "../../../Keys";
import { ToDoItemRemote } from "../model/ToDoItemRemote";

export const getRelationUser = (objectId: string) => {
  const [resultItem, setResultItem] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://parseapi.back4app.com/classes/noteList?where={"$relatedTo":{"object":{"__type":"Pointer","className":"_User","objectId":"${objectId}"},"key":"relation"}}`,
        {
        headers: {
          "X-Parse-Application-Id": Application_Id,
          "X-Parse-REST-API-Key": REST_API_Key,
          "Content-Type": "application/json"
        }
      })
      .then(({ data }) => {
        setResultItem(data.results);
      }).catch(err => {
      console.log(err);
    }).finally(() => {
        setIsLoading(false);
      }
    );
  }, []);

  return { items: resultItem, isLoading };

};

