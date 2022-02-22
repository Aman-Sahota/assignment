const data = require("./abc.json");

class Controller {
  getResources(req, res, next) {
    try {
      data.rows.sort((a, b) => {
        if (a.doc["last-modified"].time < b.doc["last-modified"].time) {
          return 1;
        }
        if (a.doc["last-modified"].time > b.doc["last-modified"].time) {
          return -1;
        }
        return 0;
      });

      res.status(200).json({
        success: true,
        message: "Success",
        data,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new Controller();
