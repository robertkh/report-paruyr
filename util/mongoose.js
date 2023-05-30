//
import mongoose from "mongoose";
const uri =
  "mongodb+srv://heroku:TO79O0qWkOxrrSJi@cluster0.jmjzr.mongodb.net/file-upload?retryWrites=true&w=majority";

//
mongoose
  .connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    // useFindAndModify: false,
  })
  .then(() => console.log("MongoDB has been connected!"))
  .catch((err) => {
    console.log(f_str(`Something went wrong\n ${err.message}`));
    process.exit(1);
  });

//💦
export default mongoose;
