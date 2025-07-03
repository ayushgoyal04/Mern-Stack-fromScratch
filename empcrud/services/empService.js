const Employee = require('../models/empModel');

// Fetch all employees
exports.fetchAll = async () => {
  return await Employee.find();
};

// Create a new employee
exports.create = async (payload) => {
  if (!payload.name || !payload.email || !payload.position) {
    throw new Error('All fields are required');
  }

  const emp = new Employee(payload);
  return await emp.save();
};

// Update an existing employee by ID
exports.update = async (id, payload) => {
  const updatedEmp = await Employee.findByIdAndUpdate(id, payload, {
    new: true,             // Return the updated document
    runValidators: true    // Enforce schema validation
  });

  if (!updatedEmp) {
    throw new Error('Employee not found');
  }

  return updatedEmp;
};

// Delete an employee by ID
exports.remove = async (id) => {
  const deletedEmp = await Employee.findByIdAndDelete(id);

  if (!deletedEmp) {
    throw new Error('Employee not found');
  }

  return { message: 'Employee deleted successfully' };
};
