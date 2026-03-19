// src/data/slugMap.js
export const slugMap = {
  // Pour chaque langue, on donne la correspondance des slugs
  fr: {
    industrie: 'industria',    // page "industrie" en français → slug espagnol
    software: 'software',       // identique
    contact: 'contacto',        // français → espagnol
  },
  es: {
    industria: 'industrie',     // espagnol → français
    software: 'software',
    contact: 'contact',
  },
  en: {
    industry: 'industrie',      // anglais → français (si tu as industry.astro)
    software: 'software',
    contact: 'contact',
  }
};