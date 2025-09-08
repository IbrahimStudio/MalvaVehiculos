import express from 'express';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import expressLayouts from 'express-ejs-layouts';   // ⬅️ add this

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(helmet());
app.use(compression());
app.use(morgan(process.env.NODE_ENV === 'development' ? 'dev' : 'combined'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// ✅ enable layouts
app.use(expressLayouts);
app.set('layout', 'layouts/main'); // default layout at views/layouts/main.ejs

app.get('/', (req, res) => {
  res.render('home/landing', {
    title: 'Malva Vehículos — Your next truck, the smart way',
    meta: { description: 'Browse verified truck listings with photos, specs, and fast contact.' },
    hero: {
      eyebrow: 'Trusted truck dealer',
      title: 'Your next truck, the smart way',
      subtitle: 'Transparent listings, verified specs, and quick responses.',
      ctaHref: '/products',
      ctaText: 'Browse Trucks'
    },
    contact: { phone: '+34 600 000 000', email: 'sales@malvavehiculos.com' },
    features: [
      { icon: '🔍', title: 'Verified Listings', text: 'Each truck is checked and photographed with care.' },
      { icon: '⚙️', title: 'Detailed Specs', text: 'Brand, model, mileage, service history and more.' },
      { icon: '📞', title: 'Fast Contact', text: 'Reach us directly via phone or form.' }
    ]
  });
});

app.use((req, res) => res.status(404).send('Not found'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ http://localhost:${PORT}`));
