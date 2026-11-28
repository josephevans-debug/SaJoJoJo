import { Router } from "express";

//This is for writing the methods for authentication ie login , signup and logout
// instead of app.post or get you use router.get or post or whatever
//this way we dont have merge conflicts when 3 people try to write the methods in one server.js file