import express, {json} from "express";
import { charactersRoutes } from "./routes/characters.routes";
import { akumanomiRoutes } from "./routes/akumanomi.routes";

const app = express();
const port = 3100;

app.use(express.json());

app.listen(port, () => console.log(`Server is running on port: ${port}`));

app.use("/characters", charactersRoutes);
app.use("/akumanomi", akumanomiRoutes);

app.get('/', (req, res) =>{
    res.send("Welcome to One Piece API!")
})


