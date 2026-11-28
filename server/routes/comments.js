import { Router } from "express";

//This is for writing the methods for checking if the user has commented already or not and to view the comments only if that boolean is true
// instead of app.post or get you use router.get or post or whatever
//this way we dont have merge conflicts when 3 people try to write the methods in one server.js file