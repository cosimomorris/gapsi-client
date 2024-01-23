self.addEventListener("install", (event) => {
  console.log("Service Worker instalando.");
});

self.addEventListener("fetch", (event) => {
  console.log("Service Worker recuperando algo.");
});
