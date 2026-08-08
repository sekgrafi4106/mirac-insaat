export interface Service {
  slug: string;
  title: string;
  description: string | null;
}

export const services: Service[] = [
  { slug: "konut-projeleri", title: "Konut Projeleri", description: null },
  { slug: "kat-karsiligi-insaat", title: "Kat Karşılığı İnşaat", description: null },
  { slug: "kentsel-donusum", title: "Kentsel Dönüşüm", description: null },
  { slug: "anahtar-teslim", title: "Anahtar Teslim", description: null },
  { slug: "villa-projeleri", title: "Villa Projeleri", description: null },
  { slug: "ticari-yapilar", title: "Ticari Yapılar", description: null },
  { slug: "tadilat-ve-yenileme", title: "Tadilat ve Yenileme", description: null },
];
