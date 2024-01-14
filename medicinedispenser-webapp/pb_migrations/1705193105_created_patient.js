/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "nte12mx1z5bcdjb",
    "created": "2024-01-14 00:45:05.606Z",
    "updated": "2024-01-14 00:45:05.606Z",
    "name": "patient",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "q9zhut05",
        "name": "name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "4b2pwfjg",
        "name": "email",
        "type": "email",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("nte12mx1z5bcdjb");

  return dao.deleteCollection(collection);
})
