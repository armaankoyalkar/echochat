export const WALLPAPER_SECTIONS = [
  { id: "sunset", title: "Sunsets" },
  { id: "abstract", title: "Abstract" },
];

export const WALLPAPERS = [
  {
    id: "moonlight-bay",
    category: "sunset",
    label: "Moonlight Bay",
    url: "/wallpapers/futuristic-moon-background.jpg",
  },
  {
    id: "glowing-sunset",
    category: "sunset",
    label: "Glowing Sunset",
    url: "/wallpapers/glowing-lines-human.jpg",
  },
  {
    id: "purple-sunset",
    category: "sunset",
    label: "Purple Sunset",
    url: "/wallpapers/purple-sunset-sky.jpg",
  },
  {
    id: "radial-blue",
    category: "abstract",
    label: "Radial Blue",
    url: "/wallpapers/radial-blue.jpg",
  },
  {
    id: "radial-green",
    category: "abstract",
    label: "Radial Green",
    url: "/wallpapers/radial-green.jpg",
  },
  {
    id: "ventura-dark",
    category: "abstract",
    label: "Ventura Dark",
    url: "/wallpapers/ventura-dark.jpg",
  },
];

export function frameStyleFromUrl(url) {
  return {
    backgroundImage: `url("${url}")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
}

export function getWallpaperById(id) {
  return WALLPAPERS.find((w) => w.id === id) ?? WALLPAPERS[0];
}