export function getLanding(req, res) {
  res.render('home/landing', {
    title: 'Malva Vehículos — Your next truck, the smart way',
    meta: {
      description: 'Browse verified truck listings with photos, specs, and fast contact.',
      ogImage: '/assets/hero.jpg'
    },
    hero: {
      eyebrow: 'Trusted truck dealer',
      title: 'Your next truck, the smart way',
      subtitle: 'Transparent listings, verified specs, and quick responses.',
      ctaHref: '/products',   // page to build next
      ctaText: 'Browse Trucks'
    },
    features: [
      {
        icon: '🔍',
        title: 'Verified Listings',
        text: 'Each truck is checked and photographed with care.'
      },
      {
        icon: '⚙️',
        title: 'Detailed Specs',
        text: 'Brand, model, mileage, service history and more.'
      },
      {
        icon: '📞',
        title: 'Fast Contact',
        text: 'Reach us directly via phone or form.'
      }
    ],
    contact: {
      phone: '+34 600 000 000',
      email: 'sales@malvavehiculos.com'
    }
  });
}
