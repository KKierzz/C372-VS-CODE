const mockServices = require('../data/mockServices');

function preparePayment(req, res) {
  const requestBody = req.body || {};
  const hasClientAmount = Object.prototype.hasOwnProperty.call(req.query, 'amount')
    || Object.prototype.hasOwnProperty.call(requestBody, 'amount');

  if (hasClientAmount) {
    return res.status(400).json({ error: 'Client-supplied amount is not accepted' });
  }

  const service = mockServices.find(item => String(item.id) === req.params.serviceId);

  if (!service) {
    return res.status(404).json({ error: 'Service not found' });
  }

  return res.status(200).json({
    serviceId: service.id,
    serviceName: service.name,
    amount: service.price,
    currency: 'sgd',
    status: 'READY_FOR_PAYMENT'
  });
}

module.exports = { preparePayment };
