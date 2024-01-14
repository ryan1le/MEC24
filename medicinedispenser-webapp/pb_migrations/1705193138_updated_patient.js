/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nte12mx1z5bcdjb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fiqu7hte",
    "name": "cargiver",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "4xdsm8krojy5ulv",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nte12mx1z5bcdjb")

  // remove
  collection.schema.removeField("fiqu7hte")

  return dao.saveCollection(collection)
})
