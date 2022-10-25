////////////////////////////////
// Easy Going
////////////////////////////////
// for(let i = 1; i <= 20; i++){
//     console.log(i)
// }

////////////////////////////////
// Get Even
////////////////////////////////
// const getEven = () => {
//     for(let i = 0; i <= 200; i ++){
//         if(i % 2 == 0 && i !== 0) {
//             console.log(i)
//         }
//     }
// }
// getEven()
////////////////////////////////
// Fizz Buzz
////////////////////////////////
// const getMyNumbers = () =>{
//     let num;
//         for(let i=1; i<101; i++){
//             num=i;
        
//         if(num%3===0 && num%5===0){
//             console.log(`FizzBuzz`);
//         }
//         else if(num%3===0){
//             console.log(`Fizz`);
//         }
//         else if(num%5===0){
//             console.log(`Buzz`);
//         }
//         else {
//             console.log(num);
//         }
//     }
// }
// getMyNumbers();


////////////////////////////////
// Wild Wild Life
////////////////////////////////
// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
// const sharky = ["Sharky", "shark", 20, "Left Coast"]
// const plantee = ["Plantee", "plant",  5000 , "Mordor"]
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
// const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// plantee[2] += 1
// wolfy[3] = "gotham city"
// dart[3] += 'hawkings'
// wolfy.shift()
// wolfy.unshift('Gameboy')
// console.log(wolfy)

////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////
// let ninjaTurtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo']

// let i = 0
// for (const turtle of ninjaTurtles) {
//     ninjaTurtles[i] = turtle.toUpperCase()
//     i++
// }
// console.log(ninjaTurtles)
////////////////////////////////
// Methods, Revisited
////////////////////////////////
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

console.log(favMovies.indexOf('Titanic'))
console.log(favMovies.sort())// put the array in alphabetical array and it is permanently changed
favMovies.pop()
favMovies.push('Guardians of the Galaxy')
favMovies.reverse()
favMovies.shift()
favMovies.unshift()// returns length of the array
favMovies.indexOf('Django Unchained')
console.log(favMovies.splice(favMovies.indexOf('Django Unchained'), 1, 'Avatar'))// permanently alters array
let slicedFavMovies = favMovies.slice(0, Math.floor(favMovies.length/2)) // does not alter original array
console.log(slicedFavMovies)
console.log(slicedFavMovies.indexOf('Fast and Furious'))// logs -1 for things that are outside of the array
////////////////////////////////
// Where is Waldo
////////////////////////////////
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];
//whereIsWaldo.splice(whereIsWaldo.indexOf('Eggbert'),1)

for(people of whereIsWaldo) {
    if(typeof people != 'string') {
        if(people.includes("Neff")) {
            people.splice(people.indexOf("Neff"),1);
            }
         }
         console.log(people);
}
console.log(whereIsWaldo)
////////////////////////////////
//  Excited Kitten
////////////////////////////////


////////////////////////////////
//  Find the Median
////////////////////////////////
