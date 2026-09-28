import type { UIStrings } from "../types";

export default {
  nav: {
    home: "Ana Sayfa",
    posts: "Yazılar",
    tags: "Etiketler",
    about: "Hakkında",
    archives: "Arşiv",
    search: "Ara",
  },
  post: {
    publishedAt: "Yayınlanma",
    updatedAt: "Güncellendi",
    sharePostIntro: "Bu yazıyı paylaş:",
    sharePostOn: "Bu yazıyı {{platform}} üzerinde paylaş",
    sharePostViaEmail: "Bu yazıyı e-posta ile paylaş",
    tagLabel: "Etiketler",
    backToTop: "Başa dön",
    goBack: "Geri dön",
    editPage: "Sayfayı düzenle",
    previousPost: "Önceki Yazı",
    nextPost: "Sonraki Yazı",
  },
  pagination: {
    prev: "Önceki",
    next: "Sonraki",
    page: "Sayfa",
  },
  home: {
    socialLinks: "Sosyal Bağlantılar",
    featured: "Öne Çıkanlar",
    recentPosts: "Son Yazılar",
    allPosts: "Tüm Yazılar",
  },
  footer: {
    copyright: "Telif Hakkı",
    allRightsReserved: "Tüm hakları saklıdır.",
  },
  pages: {
    tagTitle: "Etiket",
    tagDesc: "Bu etikete sahip tüm yazılar",

    tagsTitle: "Etiketler",
    tagsDesc: "Yazılarda kullanılan tüm etiketler.",

    postsTitle: "Yazılar",
    postsDesc: "Yayınladığım tüm yazılar.",

    archivesTitle: "Arşiv",
    archivesDesc: "Arşivlediğim tüm yazılar.",

    searchTitle: "Ara",
    searchDesc: "Herhangi bir yazı ara ...",
  },
  a11y: {
    skipToContent: "İçeriğe geç",
    openMenu: "Menüyü aç",
    closeMenu: "Menüyü kapat",
    toggleTheme: "Temayı değiştir",
    searchPlaceholder: "Yazılarda ara...",
    noResults: "Sonuç bulunamadı",
    goToPreviousPage: "Önceki sayfaya git",
    goToNextPage: "Sonraki sayfaya git",
  },
  notFound: {
    title: "404 Bulunamadı",
    message: "Sayfa Bulunamadı",
    goHome: "Ana sayfaya dön",
  },
} satisfies UIStrings;
