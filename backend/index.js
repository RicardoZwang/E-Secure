require("dotenv").config();

const app = require("./server");

// Define the port
const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log(`http://localhost:${port}/moneyLostyearMonth`);
  console.log(`http://localhost:${port}/scamByAge`);
  console.log(`http://localhost:${port}/top10ScamByYear`);
  console.log(`http://localhost:${port}/top10ScamMoneyLostByYear`);
  console.log(`http://localhost:${port}/reportsNumGenderByYear`);
  console.log(`http://localhost:${port}/tips`);
  console.log(`http://localhost:${port}/cards`);
  console.log(`http://localhost:${port}/`);
});
