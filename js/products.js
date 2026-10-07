/* ==========================================================
   EDIT THIS FILE to change your business details and products.
   Anything left as null / empty shows "on request" on the site.
   ========================================================== */

const SITE = {
  name: "Works Manufacturing Office Furniture",
  short: "Works Furniture",
  city: "Umm Al Quwain, UAE",
  phone: "+971 6 767 8388",            // landline
  /* WhatsApp contacts. The FIRST one is used for the floating button. */
  whatsapp: [
    { name: "Karam Kilan", number: "971509746547", display: "+971 50 974 6547" },
    { name: "Ammar Adas",  number: "971505186336", display: "+971 50 518 6336" },
  ],
  email: "t.khan@worksfurniture.com",
  /* We are a factory, not a showroom. */
  address: "Umm Al Thuoob, Umm Al Quwain, United Arab Emirates",
  hours: "Monday – Saturday: 8:30 AM – 5:00 PM",
  /* "Get directions" button: your Google Maps link for the factory. */
  mapLink: "https://maps.app.goo.gl/q7M5oP9CopusNy9C8",
  /* Exact factory pin for the map on the Contact page (coordinates from Google Maps). */
  mapSearch: "25.561376,55.6627056",
};

/* Categories. To add one, copy a line and change it. */
const CATEGORIES = [
  { id: "sofas",     name: "Sofas & Seating",  blurb: "Sofas and lounge chairs that bring comfort to lobbies, lounges and living rooms." },
  { id: "reception", name: "Reception Desks",  blurb: "Make a first impression with a custom reception desk." },
  { id: "desks",     name: "Office Desks",     blurb: "Executive desks and workstations designed for focus and style." },
  { id: "cabinets",  name: "Cabinets",         blurb: "Elegant storage and wall units for homes, offices and hotels." },
];

/* Products.
   - images: list of files, e.g. ["images/sofa-1-a.jpg", "images/sofa-1-b.jpg"]
   - dims: "W x D x H" in cm, or null (shows "Available on request")
   - materials / colors: fill in when you have them, or leave empty
   - price: a number in AED (e.g. 2500) or null = "Price on request"
   - featured: true to show on the Home page
   Sizes and materials are discussed with each customer, so they are left empty for now. */
const PRODUCTS = [
  {
    id: "modular-lounge-sofa", category: "sofas", featured: true,
    name: "Modular Lounge Sofa",
    short: "A modular corner sofa in soft neutral tones – perfect for meeting lounges and executive suites. Arrange it to fit your space.",
    dims: null, materials: null, colors: [], price: null,
    images: ["images/modular-lounge-sofa.jpg"],
  },
  {
    id: "lounge-chair-walnut", category: "sofas", featured: true,
    name: "Walnut Lounge Chair",
    short: "A sculpted lounge chair with a plush cream seat on a solid wood base. Warm, modern and very comfortable.",
    dims: null, materials: null, colors: [], price: null,
    images: ["images/lounge-chair-walnut.jpg"],
  },
  {
    id: "round-lounge-chair", category: "sofas", featured: false,
    name: "Round Lounge Chair",
    short: "A soft, rounded armchair with a curved back. Ideal for hotel lobbies, lounges and reading corners.",
    dims: null, materials: null, colors: [], price: null,
    images: ["images/round-lounge-chair.jpg"],
  },
  {
    id: "mesh-reception-desk", category: "reception", featured: true,
    name: "Mesh Reception Desk",
    short: "A bold reception desk with a black metal mesh front and a marble-look top. Add your own signage.",
    dims: null, materials: null, colors: [], price: null,
    images: ["images/mesh-reception-desk-1.jpg", "images/mesh-reception-desk-2.jpg"],
  },
  {
    id: "illuminated-reception-desk", category: "reception", featured: false,
    name: "Illuminated Reception Desk",
    short: "A sleek white reception desk with a glass front and soft LED lighting that carries your company logo.",
    dims: null, materials: null, colors: [], price: null,
    images: ["images/illuminated-reception-desk.jpg"],
  },
  {
    id: "curved-reception-desk", category: "reception", featured: true,
    name: "Curved Reception Desk",
    short: "A flowing, curved reception desk in clean white with accent details. Made to welcome guests in large lobbies.",
    dims: null, materials: null, colors: [], price: null,
    images: ["images/curved-reception-desk.jpg"],
  },
  {
    id: "workstation-planter", category: "desks", featured: false,
    name: "Workstation with Planter",
    short: "A shared workstation with privacy screens, drawers and a built-in planter that brings greenery to the office.",
    dims: null, materials: null, colors: [], price: null,
    images: ["images/workstation-planter.jpg"],
  },
  {
    id: "executive-desk-walnut", category: "desks", featured: true,
    name: "Executive Desk – Walnut",
    short: "A confident executive desk with a rich wood top and soft grey panels, with a side return for extra space.",
    dims: null, materials: null, colors: [], price: null,
    images: ["images/executive-desk-walnut.jpg"],
  },
  {
    id: "executive-desk-cream", category: "desks", featured: false,
    name: "Executive Desk – Cream",
    short: "A modern L-shaped desk in cream and tan with a cable port and a distinctive leather-style detail.",
    dims: null, materials: null, colors: [], price: null,
    images: ["images/executive-desk-cream.jpg"],
  },
  {
    id: "tv-wall-unit", category: "cabinets", featured: true,
    name: "TV Wall Unit with LED Shelves",
    short: "A made-to-measure wall unit with a tall display tower, a long low cabinet and warm LED lighting.",
    dims: null, materials: null, colors: [], price: null,
    images: ["images/tv-wall-unit.jpg"],
  },
];
