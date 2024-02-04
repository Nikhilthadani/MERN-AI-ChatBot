import { config } from "dotenv";
config();
const app = express();
//GET - 
//PUT - 
//POST -
//DELETE - 
//middlewares
app.use(express.JSON());
//connections and listeners
app.listen(5500, () => console.log("Server Open"));
//# sourceMappingURL=index.js.map