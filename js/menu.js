const menuList = document.getElementById("menu-list");

function renderMenu(data) {
  menuList.innerHTML = "";

  data.forEach((menu) => {
    menuList.innerHTML += `
<div
    class="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

    <!-- Gambar -->
    <div class="relative overflow-hidden">
        <img
            src="${menu.gambar}"
            alt="${menu.nama}"
            class="w-full h-48 sm:h-56 md:h-48 lg:h-56 object-cover group-hover:scale-110 transition duration-500" />

        <!-- Badge Kategori -->
        <span
            class="absolute top-3 left-3 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
            ${menu.kategori}
        </span>

        <!-- Badge Label -->
        ${
            menu.label
                ? `
        <span
            class="absolute top-3 right-3 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow flex items-center gap-1">
            🔥 ${menu.label}
        </span>
        `
                : ""
        }
    </div>

    <!-- Content -->
    <div class="p-5 sm:p-6 flex flex-col">

        <!-- Nama -->
        <h3 class="text-xl sm:text-2xl font-bold text-gray-900 line-clamp-1">
            ${menu.nama}
        </h3>

        <!-- Deskripsi -->
        <p class="mt-3 text-sm sm:text-base text-gray-500 leading-6 sm:leading-7 line-clamp-2">
            ${menu.deskripsi}
        </p>

        <!-- Harga & Rating -->
        <div class="mt-6 flex items-center justify-between">
            <div>
                <p class="text-xs text-gray-400">
                    Harga
                </p>

                <h4 class="text-xl sm:text-2xl font-extrabold text-primary">
                    Rp ${menu.harga.toLocaleString("id-ID")}
                </h4>
            </div>

            <div class="flex items-center gap-1 bg-yellow-50 px-3 py-1 rounded-full">
                <span class="text-yellow-500">⭐</span>

                <span class="text-sm font-semibold text-gray-700">
                    ${menu.rating || "4.8"}
                </span>
            </div>
        </div>

        <!-- Tombol GoFood -->
        <a
            href="https://gofood.link/u/xxxxxxxx"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-6 w-full bg-red-600 hover:bg-orange-700 text-white flex gap-3 items-center px-3 justify-center text-center font-semibold py-3 rounded-xl transition duration-300">
             <i class="fa-solid fa-utensils"></i>
            Pesan via GoFood
        </a>

    </div>

</div>
        `;
  });
}
renderMenu(menus);

// tombol kategori
const categoryButtons = document.querySelectorAll(".category-btn");

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Menghilangkan class aktif dari semua tombol
    categoryButtons.forEach((btn) => {
      btn.classList.remove("bg-primary", "text-white");
      btn.classList.add("bg-orange-50", "text-gray-700");
    });

    // Memberi class aktif pada tombol yang diklik
    button.classList.remove("bg-orange-50", "text-gray-700");
    button.classList.add("bg-primary", "text-white");

    // Ambil kategori dari data-category
    const kategori = button.dataset.category;

    // Filter menu
    if (kategori === "semua") {
      renderMenu(menus);
    } else {
      const hasil = menus.filter((menu) => menu.kategori === kategori);
      renderMenu(hasil);
    }
  });
});
