import ColorThief from "colorthief";

const colorThief = new ColorThief();
const imgCache = new Map();

export async function getDominantImageColour(
  url = "/assets/cards/rendezvous.png",
) {
  const img = await loadImage(url);
  const [r, g, b] = colorThief.getColor(img);
  return rgbToHex(r, g, b);
}

function loadImage(url) {
  if (imgCache.has(url)) return imgCache.get(url);
  const p = new Promise((res, rej) => {
    const img = new Image();
    img.onload = () => res(img);
    img.onerror = rej;
    img.src = url;
  });
  imgCache.set(url, p);
  return p;
}

function componentToHex(c) {
  const hex = c.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
