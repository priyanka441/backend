const express=require("express")
const router=express.Router();
const movieController=require("../controller/moviecontroller")
router.post("/createmovie",movieController.createMovie)
router.get("/getmovie",movieController.getMovie)
router.get("/getmoviebyid/:id",movieController.getMovieBy)
router.put("/updatemovie/:id",movieController.updatemovie)
router.delete("/deletemovie/:id",movieController.deletemovie)
router.create("movie/:movieid/createreview",movieController.createreview)
router.delete("movie/:movieid/getreview/:reviewid",movieController.getReview)
router.delete("movie/:movieid/updatereview/:reviewid",movieController.updateReview)
router.delete("movie/:movieid/deletereview/:reviewid",movieController.deleteReview)
module.exports=router