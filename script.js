// var items
// console.log(items)

// var minimarketStatus = "close"
// var minuteRemainingToOpen = 5
// if (minimarketStatus == "open") {
//     console.log("Saya akan membeli telur dan buah.")
// } else if (minuteRemainingToOpen <= 5) {
//     console.log("Minimarket buka sebentar lagi, saya tungguin.")
// } else {
//     console.log("Minimarket tutup, saya pulang lagi.")
// }

// Salah
// for (let i = 10; i > 0; i--) {
//     if (i % 2 !== 0) {
//         console.log("Ini ganjil")
//     } else {
//         console.log(i)
//     }
// }

// Benar
// for (let i = 10; i >= 0; i--) {
//     if (i % 2 !== 0) {
//         console.log("Ini ganjil")
//     } else {
//         console.log(i)
//     }
// }

// var book = {
//     name: "Kalkulus",
//     amountOfPage: 500,
//     color: "Black"
// }

// var { name: namaBuku } = book

// console.log(name)

// let arr = [5, 1, 2, 31]
// let tmp

// Salah
// for(var i = 0; i < arr.length; i++) {
//     for(var j = i; j < arr.length; j++) {
//         if (arr[i] > arr[j]) {
//             tmp = arr[i]
//             arr[i] = arr[j]
//             arr[j] = tmp
//         }
//     }
// }

// Bener
// for(var i = 0; i < arr.length; i++) {
//     for(var j = i + 1; j < arr.length; j++) {
//         if (arr[i] > arr[j]) {
//             tmp = arr[i]
//             arr[i] = arr[j]
//             arr[j] = tmp
//         }
//     }
// }

// console.log(arr)

// let array = [
//     "Saya",
//     "akan",
//     "menjadi",
//     "seorang",
//     "frontend",
//     "developer"
// ]

// for (let i = 0; i < array.length; i++) {
//     console.log(array[i])
// }

// let mobil = [
//     { merk: "BMW", warna: "Merah", tipe: "Sedan" },
//     { merk: "Toyota", warna: "Hitam", tipe: "Box" },
//     { merk: "Audi", warna: "Biru", tipe: "Sedan" },
// ]

// let filterOfMobil = mobil.filter((e) => {
//     return e.merk === "BMW"
// })

// console.log(filterOfMobil)

// function looping(iteration) {
//     if (iteration > 10) {
//         return interation + 2
//     } else {
//         return iteration
//     }
// }

// console.log(looping())

// let array = [
//     "Saya",
//     "akan",
//     "menjadi",
//     "seorang",
//     "frontend",
//     "developer"
// ]

// console.log(array.join(" "))

// var kataPertama = "ReactJs"
// var kataKedua = "Web Development"

// console.log(kataPertama.concat(" " + kataKedua))