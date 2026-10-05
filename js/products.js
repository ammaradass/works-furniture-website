/* ==========================================================
   EDIT THIS FILE to change your business details and products.
   Anything left as null / empty shows "on request" on the site.
   ========================================================== */

const SITE = {
  name: "Works Manufacturing Office Furniture",
  short: "Works Furniture",
  city: "Umm Al Quwain, UAE",
  phone: "+971 52 977 7309",
  whatsapp: "971529777309",            // digits only, no + or spaces
  email: "info@YOUR-DOMAIN.com",       // TODO: put your real email here
  address: "Umm Al Quwain, United Arab Emirates", // TODO: add street / showroom address
  hours: "Sat – Thu: 9:00 – 18:00",    // TODO: confirm opening hours
};

/* Categories. To add one, copy a line and change it. */
const CATEGORIES = [
  { id: "sofas",    name: "Sofas",    blurb: "Comfort and craftsmanship for living rooms, lobbies and lounges." },
  { id: "tables",   name: "Tables",   blurb: "Dining, coffee, meeting and office tables built to last." },
  { id: "cabinets", name: "Cabinets", blurb: "Elegant storage for homes, offices and hotels." },
];

/* Products.
   - images: list of files, e.g. ["images/sofa-1-a.jpg", "images/sofa-1-b.jpg"]
   - dims: "W x D x H cm" text, or null
   - price: a number in AED (e.g. 2500) or null = "Price on request"
   - featured: true to show on the Home page
   The items below are SAMPLES with placeholder text – replace with your real products. */
const PRODUCTS = [
  {
    id: "sofa-01", category: "sofas", featured: true,
    name: "Sample Sofa 1",
    short: "A welcoming sofa with deep seats and clean lines. [Replace with your description]",
    dims: null, materials: null,
    colors: [], price: null, images: [],
  },
  {
    id: "sofa-02", category: "sofas", featured: true,
    name: "Sample Sofa 2",
    short: "Modern comfort for living rooms and lobbies. [Replace with your description]",
    dims: null, materials: null,
    colors: [], price: null, images: [],
  },
  {
    id: "table-01", category: "tables", featured: true,
    name: "Sample Table 1",
    short: "A statement table that anchors the room. [Replace with your description]",
    dims: null, materials: null,
    colors: [], price: null, images: [],
  },
  {
    id: "table-02", category: "tables", featured: false,
    name: "Sample Table 2",
    short: "Practical and refined for meetings and dining. [Replace with your description]",
    dims: null, materials: null,
    colors: [], price: null, images: [],
  },
  {
    id: "cabinet-01", category: "cabinets", featured: true,
    name: "Sample Cabinet 1",
    short: "Smart storage with a quietly luxurious finish. [Replace with your description]",
    dims: null, materials: null,
    colors: [], price: null, images: [],
  },
  {
    id: "cabinet-02", category: "cabinets", featured: false,
    name: "Sample Cabinet 2",
    short: "Organised, elegant and made to last. [Replace with your description]",
    dims: null, materials: null,
    colors: [], price: null, images: [],
  },
];
