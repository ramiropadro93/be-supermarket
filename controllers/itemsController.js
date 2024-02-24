const createItem = async (req, res) => {
  const { name, unitPrice, stock } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO items (name, unit_price, stock) VALUES ($1, $2, $3) RETURNING *',
      [name, unitPrice, stock]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getItems = async (req, res) => {
  try {
    console.log('hola mundo entre a getItems')
    // const result = await pool.query('SELECT * FROM items');
    res.status(200).json({hola: 'mundo'});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getItemById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM items WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateItem = async (req, res) => {
  const { id } = req.params;
  const { name, unitPrice, stock } = req.body;
  console.log(req.body)
  try {
    const result = await pool.query(
      'UPDATE items SET name = $1, unit_price = $2, stock = $3 WHERE id = $4 RETURNING *',
      [name, unitPrice, stock, id]
    );
    console.log(result.rows[0]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteItem = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM items WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.status(200).json({ message: 'Item deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createItem,
  getItems,
  getItemById,
  updateItem,
  deleteItem,
};
