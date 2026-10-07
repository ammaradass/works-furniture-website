/* Shared code: header, footer, product cards, and page logic.
   You normally do NOT need to edit this file. */

const $ = (s) => document.querySelector(s);
const param = (k) => new URLSearchParams(location.search).get(k);
const waLink = (text, c = SITE.whatsapp[0]) => `https://wa.me/${c.number}?text=${encodeURIComponent(text)}`;
const waButtons = (text, cls = "btn wa") => SITE.whatsapp.map((c) => `<a class="${cls}" target="_blank" rel="noopener" href="${waLink(text, c)}">WhatsApp ${esc(c.name)}</a>`).join("");
const catName = (id) => (CATEGORIES.find((c) => c.id === id) || {}).name || "";
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const priceText = (p) => (p.price ? `AED ${Number(p.price).toLocaleString()}` : "Price on request");

function picture(p, eager) {
  if (p.images && p.images.length)
    return `<img src="${esc(p.images[0])}" alt="${esc(p.name)} – ${esc(catName(p.category))} by ${esc(SITE.short)}, ${esc(SITE.city)}" width="800" height="1000" ${eager ? "" : 'loading="lazy"'}>`;
  return `<div class="ph">Photo coming soon<br>${esc(p.name)}</div>`;
}

function card(p) {
  return `<a class="card" href="product.html?id=${encodeURIComponent(p.id)}">
    <div class="pic">${picture(p)}</div>
    <div class="tag" style="margin-top:12px">${esc(catName(p.category))}</div>
    <h3>${esc(p.name)}</h3>
    <div class="price">${priceText(p)}</div></a>`;
}

function layout(active) {
  const links = [["index.html", "Home", "home"], ["category.html", "Collections", "category"], ["about.html", "About", "about"], ["contact.html", "Contact", "contact"]];
  $("#site-header").innerHTML = `<div class="wrap nav">
    <a class="logo" href="index.html">${esc(SITE.short)}<small>Office &amp; Home Furniture</small></a>
    <button class="burger" aria-label="Menu" aria-expanded="false">☰</button>
    <nav><ul>${links.map((l) => `<li><a href="${l[0]}" class="${l[2] === active ? "active" : ""}">${l[1]}</a></li>`).join("")}</ul></nav></div>`;
  $(".burger").onclick = (e) => {
    const open = $("nav").classList.toggle("open");
    e.currentTarget.setAttribute("aria-expanded", open);
  };
  $("#site-footer").innerHTML = `<div class="wrap"><div class="fgrid">
    <div><h4>${esc(SITE.name)}</h4><p>Quality furniture, made in the UAE for homes, offices and hotels.</p></div>
    <div><h4>Collections</h4><ul>${CATEGORIES.map((c) => `<li><a href="category.html?cat=${c.id}">${c.name}</a></li>`).join("")}</ul></div>
    <div><h4>Contact</h4><ul>
      <li><a href="tel:${SITE.phone.replace(/\s/g, "")}">Tel: ${SITE.phone}</a></li>
      ${SITE.whatsapp.map((c) => `<li><a href="${waLink("Hello, I would like to enquire about your furniture.", c)}" target="_blank" rel="noopener">${esc(c.name)}: ${c.display}</a></li>`).join("")}
      <li><a href="mailto:${SITE.email}">${esc(SITE.email)}</a></li><li>${esc(SITE.city)}</li></ul></div>
    <div><h4>Visit the factory</h4><ul><li>${esc(SITE.hours)}</li>
      <li><a href="${SITE.mapLink}" target="_blank" rel="noopener">Get directions</a></li></ul></div></div>
    <div class="copy">© ${new Date().getFullYear()} ${esc(SITE.name)}. All rights reserved.</div></div>
    <a class="fab" href="${waLink("Hello, I would like to enquire about your furniture.")}" target="_blank" rel="noopener">WhatsApp</a>`;
}

/* ---- Pages ---- */
function home() {
  $("#categories").innerHTML = CATEGORIES.map((c) => {
    const first = PRODUCTS.find((p) => p.category === c.id && p.images.length);
    return `<a class="card cat-card" href="category.html?cat=${c.id}">
      <div class="pic">${first ? picture(first) : `<div class="ph">${c.name}</div>`}</div>
      <h3>${c.name}</h3><p>${c.blurb}</p></a>`;
  }).join("");
  $("#featured").innerHTML = PRODUCTS.filter((p) => p.featured).slice(0, 6).map(card).join("");
}

function category() {
  const cat = param("cat");
  const c = CATEGORIES.find((x) => x.id === cat);
  $("#filters").innerHTML = [`<a href="category.html" class="${c ? "" : "active"}">All</a>`]
    .concat(CATEGORIES.map((x) => `<a href="category.html?cat=${x.id}" class="${x === c ? "active" : ""}">${x.name}</a>`)).join("");
  $("#cat-title").textContent = c ? c.name : "Our Collections";
  $("#cat-blurb").textContent = c ? c.blurb : "Browse sofas, reception desks, office desks and cabinets.";
  document.title = `${c ? c.name : "Collections"} | ${SITE.name}, ${SITE.city}`;
  const list = PRODUCTS.filter((p) => !c || p.category === c.id);
  $("#list").innerHTML = list.length ? list.map(card).join("") : "<p>New pieces arriving soon.</p>";
}

function product() {
  const p = PRODUCTS.find((x) => x.id === param("id"));
  if (!p) { $("#product").innerHTML = '<p>Product not found. <a href="category.html"><u>Browse collections</u></a></p>'; return; }
  document.title = `${p.name} | ${catName(p.category)} | ${SITE.short}, ${SITE.city}`;
  document.querySelector('meta[name="description"]').content = p.short;
  const row = (k, v) => `<div><dt>${k}</dt><dd>${v ? esc(v) : '<span class="todo">Available on request</span>'}</dd></div>`;
  const msg = `Hello, I'm interested in "${p.name}" (${catName(p.category)}). Please send me details.`;
  const imgs = p.images || [];
  $("#product").innerHTML = `
    <div class="gallery"><div class="main" id="main">${picture(p, true)}</div>
      ${imgs.length > 1 ? `<div class="thumbs">${imgs.map((s, i) => `<img src="${esc(s)}" alt="${esc(p.name)} view ${i + 1}" class="${i ? "" : "on"}" loading="lazy">`).join("")}</div>` : ""}</div>
    <div class="info">
      <div class="crumbs"><a href="index.html">Home</a> / <a href="category.html?cat=${p.category}">${catName(p.category)}</a></div>
      <h1 style="font-size:clamp(2rem,5vw,3rem)">${esc(p.name)}</h1>
      <div class="price">${priceText(p)}</div>
      <p>${esc(p.short)}</p>
      <dl class="specs">
        ${row("Dimensions", p.dims ? p.dims + " (W x D x H cm)" : "")}
        ${row("Materials", p.materials)}
        ${row("Colours / fabrics", (p.colors || []).join(", "))}
      </dl>
      <div class="btn-row">
        ${waButtons(msg)}
        <a class="btn ghost" href="contact.html?product=${encodeURIComponent(p.name)}">Send an enquiry</a></div></div>`;
  document.querySelectorAll(".thumbs img").forEach((t) => (t.onclick = () => {
    $("#main").innerHTML = `<img src="${t.src}" alt="${t.alt}">`;
    document.querySelectorAll(".thumbs img").forEach((o) => o.classList.toggle("on", o === t));
  }));
}

function contact() {
  const sel = $("#interest");
  sel.innerHTML = '<option value="General enquiry">General enquiry</option>' +
    PRODUCTS.map((p) => `<option>${esc(p.name)}</option>`).join("");
  if (param("product")) sel.value = param("product");
  $("#send-to").innerHTML = SITE.whatsapp.map((c, i) => `<option value="${i}">${esc(c.name)} (${c.display})</option>`).join("");
  $("#c-phone").textContent = "Tel: " + SITE.phone;
  $("#c-phone").href = "tel:" + SITE.phone.replace(/\s/g, "");
  $("#c-email").textContent = SITE.email;
  $("#c-email").href = "mailto:" + SITE.email;
  $("#c-addr").textContent = SITE.address;
  $("#c-hours").textContent = SITE.hours;
  $("#c-wa").innerHTML = waButtons("Hello, I would like to enquire about your furniture.");
  $("#c-directions").href = SITE.mapLink;
  $("#map").src = "https://www.google.com/maps?q=" + encodeURIComponent(SITE.mapSearch) + "&output=embed";
  /* The form opens WhatsApp with the message filled in – no server needed. */
  $("#enquiry").onsubmit = (e) => {
    e.preventDefault();
    const f = new FormData(e.target);
    const text = `New enquiry\nName: ${f.get("name")}\nPhone: ${f.get("phone")}\nEmail: ${f.get("email") || "-"}\nInterested in: ${f.get("interest")}\nMessage: ${f.get("message")}`;
    window.open(waLink(text, SITE.whatsapp[+$("#send-to").value]), "_blank");
  };
}

const slug = (s) => String(s).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

/* Products come from data/products.json (edited in the admin page). */
async function loadProducts() {
  try {
    const data = await fetch("data/products.json", { cache: "no-cache" }).then((r) => r.json());
    PRODUCTS = (data.products || []).map((p) => ({
      ...p,
      id: p.id || slug(p.name),
      dims: p.dims || null,
      materials: p.materials || null,
      colors: p.colors || [],
      price: p.price || null,
      images: (p.images || []).map((i) => String(i).replace(/^\//, "")),
    }));
  } catch (e) { PRODUCTS = []; }
}

document.addEventListener("DOMContentLoaded", async () => {
  const page = document.body.dataset.page;
  layout(page);
  await loadProducts();
  ({ home, category, product, contact })[page]?.();
});
