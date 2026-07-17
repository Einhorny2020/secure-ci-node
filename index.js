const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    application: "secure-ci-node",
    message: "Pipeline CI/CD opérationnel",
    version: "1.0.1"
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy",
    timestamp: new Date().toISOString()
  });
});

app.get("/hello",(req,res)=>{
  res.send("Hello");
 });



app.listen(port, () => {
  console.log(`Application disponible sur http://localhost:${port}`);
});