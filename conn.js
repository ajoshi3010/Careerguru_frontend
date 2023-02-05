// const { hasFormSubmit } = require("@testing-library/user-event/dist/utils");
const { hasFormSubmit } = require("@testing-library/user-event/dist/utils");
const mongoose=require("mongoose");
mongoose.connect('mongodb+srv://toprecommendations:harshithalle123@cluster0.182dkb4.mongodb.net/CareerGuruJobs?retryWrites=true&w=majority',{useNewUrlParser:true},function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("Successfully executed");
    }
});

const jobSchema=new mongoose.Schema({
    cname: String,
    experience:String,
    location:String,
    role:String
});
const Job=mongoose.model("top recommendations",jobSchema);
Job.find(function(err,hemanth){
    if(err){
        console.log("Error bro");
    }
    else{
        console.log(hemanth);
    }
})

// hasFormSubmit.updateOne()
// job.save();
