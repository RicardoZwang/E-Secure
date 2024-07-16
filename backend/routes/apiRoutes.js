module.exports = function (app, connection) {
  const { spawn } = require("child_process");

  // API endpoint for retrieving data on money lost by year and month
  app.get("/moneyLostyearMonth", (req, res) => {
    connection.query("SELECT * FROM moneyLost_year_month", (error, results) => {
      if (error) {
        console.error(error);
        return res.status(500).send("Error retrieving data");
      }
      res.send(results);
    });
  });

  // API endpoint for retrieving data on scams by age group
  app.get("/scamByAge", (req, res) => {
    connection.query("SELECT * FROM scam_by_age_year", (error, results) => {
      if (error) {
        console.error(error);
        return res.status(500).send("Error retrieving data");
      }
      res.send(results);
    });
  });

  // API endpoint for retrieving the top 10 scams by year
  app.get("/top10ScamByYear", (req, res) => {
    connection.query("SELECT * FROM top10_scam_by_year", (error, results) => {
      if (error) {
        console.error(error);
        return res.status(500).send("Error retrieving data");
      }
      res.send(results);
    });
  });

  // API endpoint for retrieving the top 10 scams by money lost by year
  app.get("/top10ScamMoneyLostByYear", (req, res) => {
    connection.query(
      "SELECT * FROM top10_scam__moneyLost_by_year",
      (error, results) => {
        if (error) {
          console.error(error);
          return res.status(500).send("Error retrieving data");
        }
        res.send(results);
      }
    );
  });

  // API endpoint for retrieving data on the number of scam reports by gender and year
  app.get("/reportsNumGenderByYear", (req, res) => {
    connection.query(
      "SELECT * FROM reportsNum_gender_byYear",
      (error, results) => {
        if (error) {
          console.error(error);
          return res.status(500).send("Error retrieving data");
        }
        res.send(results);
      }
    );
  });

  // API endpoint for retrieving data on the tips
  // API endpoint for retrieving data on the tips with an optional category filter
  app.get("/tips", (req, res) => {
    let query = "SELECT * FROM tips";
    let params = [];

    if (req.query.category) {
      query += " WHERE category = ?";
      params = [req.query.category];
    }

    connection.query(query, params, (error, results) => {
      if (error) {
        console.error("Error on querying tips:", error);
        return res.status(500).send("Error retrieving data");
      }
      res.json(results);
    });
  });

  app.get("/cards", (req, res) => {
    connection.query("SELECT * FROM cards", (error, results) => {
      if (error) {
        console.error("Failed to fetch cards:", error);
        res.status(500).send("Error retrieving cards data");
        return;
      }
      res.json(results);
    });
  });
};


