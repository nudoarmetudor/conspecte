// ─────────────────────────────────────────────────────────────────────────────
//  DATELE SITE-ULUI — singurul loc în care trebuie editate.
//  `npm run verifica` refuză publicarea cât timp rămân valori „[…]".
// ─────────────────────────────────────────────────────────────────────────────

export const siteInfo = {
  /** Numele afișat în subsol și în mențiunea de licență. */
  autor: "nudoarmetudor",
  /** Anul primei publicări (pentru mențiunea de copyright). */
  an: 2026,

  /** Linkul MIA asociat codului QR (verificat: coincide cu conținutul imaginii QR). */
  plataUrl: "https://mia-qr.bnm.md/1/m/BNM/AGR313581894ec84c95b61b0b47349ea7e3",
  /** Suma afișată pe buton. */
  plataSuma: "20 MDL",
  /** Imaginea QR, în quartz/static/. */
  plataQr: "static/sustine-qr.jpg",

  /** Manualul pe care se bazează notițele — apare în subsol. */
  sursaScurta:
    "L. Calmuțchi, D. Afanas, M. Cioban, «Geometrie analitică în plan», UST, Chișinău, 2014",

  licenta: {
    nume: "CC BY-NC-SA 4.0",
    url: "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.ro",
  },

  /** Numele fișierului (fără .md) paginii cu licența și sursele. */
  paginaDespre: "Despre, surse și licență",
}
