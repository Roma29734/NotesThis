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




export const insertRelationToNoteList = (title: string, subTitle: string, createData: string) => {
  const [resultItem, setResultItem] = useState();
  const [isLoading, setIsLoading] = useState(true);

    setIsLoading(true);

    let data = JSON.stringify({
      "title": title,
      "subTitle": subTitle,
      "createData": createData
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://parseapi.back4app.com/classes/noteList",
      headers: {
        "X-Parse-Application-Id": Application_Id,
        "X-Parse-REST-API-Key": REST_API_Key,
        "Content-Type": "application/json"
      },
      data: data
    };
    axios.request(config)
      .then(({ response }: any) => {
        console.log('вызов insertRelationToNoteList');
        console.log(JSON.stringify(response.data));
        setResultItem(response.objectId);
      })
      .catch((err: any) => {
        console.log(err);
      });

    return {isLoading, resultItem};
};


export const insertRelationToUser = (objectId: string, noteListId: string, sessionToken: string) => {
  const [resultItem, setResultItem] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const axios = require('axios');
    let data = JSON.stringify({
      "relation": {
        "__op": "AddRelation",
        "objects": [
          {
            "__type": "Relation",
            "className": "noteList",
            "objectId": noteListId
          }
        ]
      }
    });

    let config = {
      method: 'put',
      maxBodyLength: Infinity,
      url: `https://parseapi.back4app.com/classes/_User/${objectId}`,
      headers: {
        'X-Parse-Application-Id': Application_Id,
        'X-Parse-REST-API-Key': REST_API_Key,
        'Content-Type': 'application/json',
        'X-Parse-Session-Token': sessionToken
      },
      data : data
    };

    axios.request(config)
      .then((response: any) => {
        console.log(JSON.stringify(response.updatedAt));
      })
      .catch((error: any) => {
        console.log(error);
      });

  }, []);
}
