const allBoardGames = [
  {
    name: "Wybuchajace kotki",
    rate: 9.9,
    url:
      "https://www.empik.com/rebel-gra-towarzyska-eksplodujace-kotki-rebel,p1163282331,zabawki-p",
    imgUrl:
      "https://ecsmedia.pl/c/rebel-gra-towarzyska-eksplodujace-kotki-w-iext51126317.jpg"
  },
  {
    name: "Znak starszych bogów",
    rate: 8,
    url:
      "https://www.rebel.pl/product.php/1,1010/22968/Znak-Starszych-Bogow.html",
    imgUrl:
      "https://image.ceneostatic.pl/data/products/15466279/i-znak-starszych-bogow.jpg"
  }
];

export function getAllBoardGames() {
  const promise = new Promise((resolve, rejected) => {
    setTimeout(() => {
      resolve(allBoardGames);
    }, 3000);
  });

  return promise;
}
