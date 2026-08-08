export interface Service {
  slug: string;
  title: string;
  description: string | null;
}

export const services: Service[] = [
  {
    slug: "konut-projeleri",
    title: "Konut Projeleri",
    description: "Konut kullanımına yönelik yapı projelerinin uygulama süreçleri.",
  },
  {
    slug: "kat-karsiligi-insaat",
    title: "Kat Karşılığı İnşaat",
    description: "Arsa sahipleriyle geliştirilen kat karşılığı yapı projeleri.",
  },
  {
    slug: "kentsel-donusum",
    title: "Kentsel Dönüşüm",
    description: "Mevcut yapıların yenilenmesine yönelik proje ve uygulama çalışmaları.",
  },
  {
    slug: "anahtar-teslim",
    title: "Anahtar Teslim",
    description: "Yapı sürecinin farklı aşamalarını tek proje kapsamında ele alan uygulamalar.",
  },
  {
    slug: "villa-projeleri",
    title: "Villa Projeleri",
    description: "Müstakil yaşam alanlarına yönelik yapı uygulamaları.",
  },
  {
    slug: "ticari-yapilar",
    title: "Ticari Yapılar",
    description: "Ticari kullanıma yönelik yapı ve uygulama çalışmaları.",
  },
  {
    slug: "tadilat-ve-yenileme",
    title: "Tadilat ve Yenileme",
    description: "Mevcut yapıların ihtiyaç doğrultusunda yenilenmesine yönelik çalışmalar.",
  },
];
