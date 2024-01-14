/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dpo504mye1eeccg")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fwpte1yx",
    "name": "date",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dpo504mye1eeccg")

  // remove
  collection.schema.removeField("fwpte1yx")

  return dao.saveCollection(collection)
})
