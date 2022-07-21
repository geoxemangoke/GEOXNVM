

let table = [
    ['name', 'lokasi', 'usia', 'cars'],
    ['Udin', 'sumedang', '33', ['honda', 'mazda']],
    ['Bambang', 'jakarta', '25', ['audi', 'bmw']]
];

table.push(['Bambang Sedunia', 'bandung', ['wuling', 'toyota', 'genesis']]);

let mobilKorea = ['hyundai', 'kia'];

/*
Bambang Sedunia dia pengen koleksi mobil china dan korea, jadi di perlu menjual mobil toyota
['Bambang Sedunia', 'bandung', ['wuling', 'hyundai', 'kia', 'genesis']
keyword: method splice
*/
console.log(table[3]); // ['Bambang Sedunia', 'bandung', ['wuling', 'hyundai', 'kia', 'genesis']

table[3][2].splice(1, 1, ...mobilKorea);

console.log(table[3]); // ['Bambang Sedunia', 'bandung', ['wuling', 'hyundai', 'kia', 'genesis']

// console.log(mobilKorea.indexOf('kia'))