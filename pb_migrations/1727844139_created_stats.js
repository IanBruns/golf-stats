/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "6xadrkr9u6720n7",
    "created": "2024-10-02 04:42:19.680Z",
    "updated": "2024-10-02 04:42:19.680Z",
    "name": "stats",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "wsylr3th",
        "name": "matchName",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
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
  const collection = dao.findCollectionByNameOrId("6xadrkr9u6720n7");

  return dao.deleteCollection(collection);
})
