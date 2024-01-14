/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "4xdsm8krojy5ulv",
    "created": "2024-01-14 00:43:44.316Z",
    "updated": "2024-01-14 00:43:44.316Z",
    "name": "Cargiver",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "5jzdllbq",
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
        "id": "uyiea3f7",
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
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("4xdsm8krojy5ulv");

  return dao.deleteCollection(collection);
})
