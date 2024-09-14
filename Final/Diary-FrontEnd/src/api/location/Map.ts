import { APIKEY_GOOGLE } from "@env";

export function getMapReview(lat: number, lng: number) {
  const mapPreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}
    &zoom=17
    &size=600x400&scale=2
    &maptype=roadmap
    &markers=color:blue%7Clabel:S%7C${lat},${lng}
    &key=${APIKEY_GOOGLE}`;

  return mapPreviewUrl;
}

export async function getReadableAddress(lat: number, lng: number) {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${APIKEY_GOOGLE}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch address. Please try again!");
  }
  const data = await response.json();

  if (data.results.length == 0) return "";
  const address_components = data.results[0].address_components;

  let address = "";

  address_components.forEach((component: any) => {
    if (component.types.includes("street_number")) {
      address += component.short_name;
      address += " ";
    }
    if (component.types.includes("route")) {
      address += component.short_name;
      address += ", ";
    }
    if (component.types.includes("administrative_area_level_1")) {
      address += component.long_name;
    }
  });

  return address;
}
