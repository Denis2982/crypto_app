import { cryptoAssets, cryptoData } from "./data";


export function fetchCrypto() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cryptoData)
    }, 1500)
  })
}

export function fetchAssets() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cryptoAssets)
    }, 1500)
  })
}

// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     'X-API-KEY': 'A5/no3aTrehPADnVu4UOVfKoJDMdtPp+OrIJ5aL3S9I='
//   }
// };

// fetch('https://openapiv1.coinstats.app/coins', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));


// async function getCoins() {
//   let res = await fetch('https://openapiv1.coinstats.app/coins', options)
  
//   const coins = await res.json()
//   console.log(coins)
// }
// getCoins()