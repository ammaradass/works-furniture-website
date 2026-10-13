/* ==========================================================
   EDIT THIS FILE to change your business details and products.
   Anything left as null / empty shows "on request" on the site.
   ========================================================== */

const SITE = {
  name: "Works Manufacturing Office Furniture L.L.C",
  short: "Works Manufacturing Office Furniture L.L.C",
  /* Official company name (shown in the footer). */
  legalName: "Works Manufacturing Office Furniture L.L.C",
  city: "Umm Al Quwain, UAE",
  phone: "+971 6 767 8388",            // landline
  /* WhatsApp contacts. The FIRST one is used for the floating button. */
  whatsapp: [
    { name: "Karam Kilan", number: "971509746547", display: "+971 50 974 6547" },
    { name: "Ammar Adas",  number: "971505186336", display: "+971 50 518 6336" },
    { name: "Secretary",   number: "971529777309", display: "+971 52 977 7309" },
  ],
  email: "t.khan@worksfurniture.com",
  /* We are a factory, not a showroom. */
  address: "Umm Al Thuoob, Umm Al Quwain, United Arab Emirates",
  hours: "Monday – Saturday: 8:30 AM – 5:00 PM",
  /* "Get directions" button: your Google Maps link for the factory. */
  mapLink: "https://maps.app.goo.gl/q7M5oP9CopusNy9C8",
  /* Google Maps plus code for the factory (shown under the map). */
  plusCode: "HM67+H34 Umm Al Quwain",
  /* Exact factory pin for the map on the Contact page (coordinates from Google Maps). */
  /* Google Analytics Measurement ID (starts with G-). Leave empty to turn tracking off. */
  analyticsId: "",
  mapSearch: "25.561376,55.6627056",
};

/* Categories. To add one, copy a line and change it. */
const CATEGORIES = [
  { id: "sofas",     name: "Sofas & Seating",  blurb: "Sofas and lounge chairs that bring comfort to lobbies, lounges and living rooms." },
  { id: "reception", name: "Reception Desks",  blurb: "Make a first impression with a custom reception desk." },
  { id: "desks",     name: "Office Desks",     blurb: "Executive desks and workstations designed for focus and style." },
  { id: "meeting",   name: "Meeting Tables",   blurb: "Meeting and boardroom tables made to fit your room and your team." },
  { id: "tables",     name: "Tables",           blurb: "Coffee tables and side tables for lounges, lobbies and living rooms." },
  { id: "cabinets",  name: "Cabinets",         blurb: "Elegant storage and wall units for homes, offices and hotels." },
  { id: "beds",      name: "Beds",             blurb: "Upholstered beds and bedroom furniture for homes and hotels." },
  { id: "panels",    name: "Wall Panels",      blurb: "Padded and decorative wall panels for schools, offices and waiting areas." },
];

/* Products now live in data/products.json and are edited from the admin page
   (see .pages.yml). app.js loads them into this list when a page opens. */
let PRODUCTS = [];
