//
import mongoose from "mongoose";
const uri =
  "";

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
