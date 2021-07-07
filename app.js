const express = require("express");
const mongoose = require("mongoose");


mongoose.connect("mongodb://127.0.0.1:27017/Places", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log("Mongo is ON");
}).catch((e) => console.log("error while connecting to mongo:", e.message));
   
const app = express();
const {addPlace,getPlace,showPlaces,showPlacesByCity,showPlacesByName} = require("./controllers/placesController")
app.use(express.json());

app.get('/', async (req,res) => {
    let queryName = req.query.name;
    let queryCity = req.query.city;
    if(queryName){
        let response = await showPlacesByName(queryName);
        res.status(200).json({data: response.data})
        return;
    }else if(queryCity){
        let response = await showPlacesByCity(queryCity);
        res.status(200).json({data: response.data});
        return;
    }

    try {
        let response = await showPlaces();
        res.status(200).json({data: response})
    }catch(e){
        res.status(400).json({data: e.message})
    }
                                         
    
})

app.post("/",async (req, res) => {
    
    try{
        console.log("req",req.body)
        let response = await addPlace(req.body);
        if(response.status){
            res.status(201).json({result: "data added"})
            return;
        }else{
            res.status(400).json({error: response.data})
        }
        
    }catch(e){
        res.status(400).json({data: e.message})
    } 
})

app.get("/:place", async (req,res) => {
    console.log(req.params["place"]);
    let response = await getPlace(req.params["place"]);
    if(response.status){
        res.status(201).json({result: response.data})
        return;
    }else{
        res.status(400).json({error: response.data})
    }
    
})


//Server listening

const PORT = 3500

app.listen(PORT, () => {
    console.log("server is listening at http://localhost: "+PORT)
})

