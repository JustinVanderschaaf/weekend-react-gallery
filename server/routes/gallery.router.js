const express = require("express");
const router = express.Router();
const galleryItems = require("../modules/gallery.data");
const pool = require("../modules/pool.js");

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route

router.put("/like/:id", (req, res) => {
  console.log("req.parms", req.params);
  console.log("req.body is", req.body);
  let newlikes = req.body.likes + 1;
  console.log("newlikes", newlikes);

  const sqlText = `
    UPDATE "gallery"
    SET "likes" = ${newlikes}
    WHERE "id" = $1
    `;
  let queryParams = [req.params.id];
  pool
    .query(sqlText, queryParams)
    .then(() => {
      res.sendStatus(204);
    })
    .catch((err) => {
      console.error("PUT failed", err);
      res.sendStatus(500);
    });
});

// router.put('/like/:id', (req, res) => {
//     console.log('req.parms',req.params);
//     console.log("req.body is", req.body);
//     const galleryId = req.params.id;
//     for(const galleryItem of galleryItems) {
//         if(galleryItem.id == galleryId) {
//             galleryItem.likes += 1;
//         }
//     }
//     res.sendStatus(200);
// }); // END PUT Route

// GET Route

router.get("/", (req, res) => {
  // Get all of the treats from the database
  const sqlText = `SELECT * FROM "gallery"  ORDER BY "id"`;
  pool
    .query(sqlText)
    .then((result) => {
      res.send(result.rows);
      console.log("result.rows is", result.rows);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
    });
});

// router.get('/', (req, res) => {
//     res.send(galleryItems);
// }); // END GET Route


router.post('/', (req, res) => {
    const description = req.body.description;
    const path = req.body.path
    const queryText = `
        INSERT INTO "gallery" ("description", "path", "likes")
        VALUES ($1, $2, $3);
    `;
    pool.query(queryText, [description,path,0]).then((results) => {
        res.sendStatus(201);
    }).catch((error) => {
        // We know this works
        console.log(error);
        res.sendStatus(500);
    });
});
module.exports = router;
