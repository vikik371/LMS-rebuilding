import app from "./server.js";

import dotenv from 'dotenv';

dotenv.config();


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port  http://localhost:${PORT}`);
});


