import { connect } from "mongoose";

connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.8dxybug.mongodb.net/?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)
  .then(() => {
    console.log("successfully connected to database");
  })
  .catch(() => {
    console.error("error in connecting with database");
  })
  .finally(() => {
    console.info("database connection code executed successfully");
  });
