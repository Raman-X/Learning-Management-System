import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  name: String,
  age: String,
});

const Course = mongoose.model("Course", courseSchema);
export default Course;
