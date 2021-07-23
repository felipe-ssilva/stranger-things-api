module.exports = app => {
  const controller = app.controllers.strangers;

  app.route('/api/v1/strangers')
    .get(controller.listStrangers);

  app.route('/api/v1/strangers/:customerId')
    .get(controller.idStranger);
}