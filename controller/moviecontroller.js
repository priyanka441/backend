const express=require("express")
const movie=require("../models/movie")
const review=require("../models/review")


//create movie
exports.createMovie=async(req,res)=>{
    try{
        const Movie=await movie.create(req.body)
        res.status(200).send({Movie})

    }
    catch(err){
        res.status(500).send({message:"error"})

    }
}


//get movie
exports.getMovie=async(req,res)=>{
    const{page=1,limit=10}=req.query
    const  skip=(page-1)*limit;
    try{
        
        const Movie=await movie.find().skip(skip).limit(limit)
        res.status(200).send(Movie)

    }
    catch(err){
        res.status(500).send({message:"error"})

    }

}

//get by id

exports.getMovieBy=async(req,res)=>{
   
    try{
        
        const Movie=await movie.findById(req.params.id)
        res.status(200).send(Movie)

    }
    catch(err){
        res.status(500).send({message:"error"})

    }

}

//update movie by id
exports.updatemovie=async(req,res)=>{
    const {title,description}=req.body
    let Movie
    try{
        const id=req.params.id;
         Movie=await movie.findByIdAndUpdate(id,{
            title,description
        })
      Movie=await Movie.save().then(()=>res.json({message:"updated successfully"}))

    }
    catch(err){
        res.status(500).send({message:"error"})

    }
}

//delete movie by id

exports.deletemovie=async(req,res)=>{
    const id=req.params.id;
    try{
        await movie.findByIdAndDelete(id).then(()=>res.send({message:"deletd successfully"}))

    }
    catch(err){
        
        res.status(500).send({message:"error"})

    }
}

//create review
exports.createreview=async(req,res)=>{
    let Review
    try{
        const Movie = await movie.findById(req.params.movieid)
        if (!Movie) {
            return res.status(404).json({ message: 'Post not found' });
          }
          Review=await review.create(req.body)
          res.json(Review)
          

}
catch(err){
    res.status(500).json({ error: error.message });
}
}

//get review
exports.getReview= async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    const skip = (page - 1) * limit;
    let Review
    try {
        const movieId = req.params.movieid;
        const Movie = await movie.findById(movieId).populate({
            path: 'reviews',
            options: { skip: skip, limit: parseInt(limit) }
        });
      if (!Movie) {
        return res.status(404).json({ message: 'Post not found' });
      }
  
      Review=await review.findById(req.params.reviewid)
      res.json(Review)
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }


//update review for a movie of particular id
exports.updateReview=async(req,res)=>{
  try{
      const Movie = await movie.findById(req.params.movieid)
      if (!Movie) {
          return res.status(404).json({ message: 'Post not found' });
        }
        const Review = await review.findByIdAndUpdate(req.params.reviewid, req.body, { new: true });
    res.json(Review);

  }
  catch (error) {
      res.status(500).json({ error: error.message });
    }
}



  //delete by id
 exports.deleteReview=async(req,res)=>{
    try{
        const Movie = await movie.findById(req.params.movieid)
        if (!Movie) {
            return res.status(404).json({ message: 'Post not found' });
          }
          await review.findByIdAndDelete(req.params.reviewid).then(()=>res.json({message:"deleted successfully"}))

    }
    catch (error) {
        res.status(500).json({ error: error.message });
      }
  }
