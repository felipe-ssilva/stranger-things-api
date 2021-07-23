
module.exports = () => {
  const strangersDB = require('../data/strangers.json');
  const controller = {};

  controller.listStrangers = (req, res) => res.status(200).json(strangersDB);

  controller.idStranger = (req, res) => {
    const {
      customerId,
    } = req.params;

    const foundCustomerIndex = strangersDB.data.findIndex(customer => customer.id === customerId);

    if (foundCustomerIndex === -1) {
      res.status(404).json({
        message: 'This stranger not exist!',
        success: false
      });
    } else {
      res.status(200).json({
        message: 'Stranger successfully found!',
        success: true,
        body: strangersDB.data[customerId]
      });
    }
  };

  return controller;
}