
import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";
//connections and listeners
const PORT = process.env.PORT || 5500;


connectToDatabase()
  .then(() => {
    app.listen(PORT, () => 
      console.log("Server Open")
      );
  })
  .catch((Error) => console.log(Error));
  

