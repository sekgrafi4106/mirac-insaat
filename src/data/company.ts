export interface CompanyInfo {
  name: string;
  legalName: string;
  owner: string;
  foundedYear: number;
  regions: string[];
  phone: string;
  phoneHref: string;
  whatsapp: string;
  whatsappHref: string;
  instagramHandle: string;
  instagramHref: string;
  address: string | null;
  email: string | null;
}

export const company: CompanyInfo = {
  name: "Miraç İnşaat",
  legalName: "MİRAÇ İNŞAAT",
  owner: "Mehmet Gönül",
  foundedYear: 2015,
  regions: ["İstanbul", "Kocaeli"],
  phone: "+90 532 178 52 74",
  phoneHref: "tel:+905321785274",
  whatsapp: "+90 532 178 52 74",
  whatsappHref: "https://wa.me/905321785274",
  instagramHandle: "@miracinsaat4141",
  instagramHref: "https://instagram.com/miracinsaat4141",
  address: null,
  email: null,
};
