import { listTrucks } from '../models/truck.model.js';

export async function getProducts(req, res) {
  try {
    const { brand, minYear, maxPrice } = req.query;
    const filters = {
      brand: brand || undefined,
      minYear: minYear ? Number(minYear) : undefined,
      maxPrice: maxPrice ? Number(maxPrice) : undefined
    };
    const trucks = await listTrucks(filters);
    res.render('products/index', {
      title: 'Available Trucks — Malva Vehículos',
      meta: { description: 'Browse our available trucks with verified photos and specs.' },
      trucks,
      filters
    });
  } catch (e) {
    res.status(500).send(e.message);
  }
}
