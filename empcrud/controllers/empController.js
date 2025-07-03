const empService = require('../services/empService');

// Controller: GET all
exports.getAllEmployees = async (req, res) => {
  try {
    const data = await empService.fetchAll();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Controller: POST create
exports.createEmployee = async (req, res) => {
  try {
    const created = await empService.create(req.body);
    res.status(201).json(created);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Controller: PUT update
exports.updateEmployee = async (req, res) => {
  try {
    const updated = await empService.update(req.params.id, req.body);
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Controller: DELETE
exports.deleteEmployee = async (req, res) => {
  try {
    const result = await empService.remove(req.params.id);
    res.json(result);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};
