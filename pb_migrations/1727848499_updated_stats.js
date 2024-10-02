/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6xadrkr9u6720n7")

  collection.name = "matches"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6xadrkr9u6720n7")

  collection.name = "stats"

  return dao.saveCollection(collection)
})
