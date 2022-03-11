const dataPenjualanNovel = [
    {
        idProduct: "BOOK002421",
        namaProduk: "Pulang - Pergi",
        penulis: "Tere Liye",
        hargaBeli: 60000,
        hargaJual: 86000,
        totalTerjual: 150,
        sisaStok: 17,
    },
    {
        idProduct: "BOOK002351",
        namaProduk: "Selamat Tinggal",
        penulis: "Tere Liye",
        hargaBeli: 75000,
        hargaJual: 103000,
        totalTerjual: 171,
        sisaStok: 20,
    },
    {
        idProduct: "BOOK002941",
        namaProduk: "Garis Waktu",
        penulis: "Fiersa Besari",
        hargaBeli: 67000,
        hargaJual: 99000,
        totalTerjual: 213,
        sisaStok: 5,
    },
    {
        idProduct: "BOOK002941",
        namaProduk: "Laskar Pelangi",
        penulis: "Andrea Hirata",
        hargaBeli: 55000,
        hargaJual: 68000,
        totalTerjual: 20,
        sisaStok: 56,
    },
];

const getInfoPenjualan = (dataPenjualanNovel) => {
    let totalKeuntungan = 0,
        totalModal = 0,
        totalJual = 0;
    let bukuTerlaris = dataPenjualanNovel[0];
    let error = false;

    dataPenjualanNovel.forEach((buku) => {
        if (
            typeof buku.totalTerjual !== "number" ||
            typeof buku.hargaBeli !== "number" ||
            typeof buku.hargaJual !== "number" ||
            typeof buku.sisaStok !== "number"
        ) {
            error = true;
            return;
        }

        totalKeuntungan +=
            buku.hargaJual * buku.totalTerjual -
            buku.hargaBeli * (buku.totalTerjual + buku.sisaStok);
        totalModal += buku.hargaBeli * (buku.totalTerjual + buku.sisaStok);
        totalJual += buku.hargaJual * buku.totalTerjual;

        if (bukuTerlaris.totalTerjual < buku.totalTerjual) bukuTerlaris = buku;
    });
    if (error)
        return "Error : There are property of data that should be a number";


    let presentaseKeuntungan = (totalKeuntungan / totalModal) * 100;
    presentaseKeuntungan = (
        Math.round(presentaseKeuntungan * 100) / 100
    ).toFixed(2);

    totalKeuntungan = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
    }).format(totalKeuntungan);
    totalModal = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
    }).format(totalModal);
    totalJual = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
    }).format(totalJual);

    return {
        totalKeuntungan,
        totalModal,
        totalJual,
        presentaseKeuntungan: `${presentaseKeuntungan}%`,
        produkBukuTerlaris: bukuTerlaris.namaProduk,
        penulisTerlaris: bukuTerlaris.penulis,
    };
};
console.log(getInfoPenjualan(dataPenjualanNovel));
