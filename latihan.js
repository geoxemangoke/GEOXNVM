const data = [
    {
      name: 'udin',
      budget: 5000,
      wantedCar: ['audi-r6', 'mercedes-cla', 'lexus-ux', 'hyundai-creta', 'honda-brio'],
      garage: []
    },
    {
      name: 'bambang',
      budget: 1500,
      wantedCar: ['lexus-ux', 'mercedes-cla', 'hyundai-creta', 'honda-brio'],
      garage: []
    }
  ]
  
  const carDealership = [
    {
      brand: 'audi-r6',
      price: 4300
    },
    {
      brand: 'hyundai-creta',
      price: 400
    },
    {
      brand: 'mercedes-cla',
      price: 990
    },
    {
      brand: 'lexus-ux',
      price: 880
    },
    {
      brand: 'honda-brio',
      price: 150
    }
  ]

//   let buyACar = data => data
//   .filter(dat => dat.name === 'udin')
//   .map(dat => dat.name)

let currentBudget = 0

let buyACar = (data) => {
    for (let i = 0; i < data.length; i++) {
        let currentBudget = data[i].budget
        const wantedCars = data[i].wantedCar;

        for (let j = 0; j < wantedCars.length; j++) {            
            for (let k = 0; k < carDealership.length; k++) {
                if(carDealership[k].brand == wantedCars[j]) {                    
                    if(currentBudget >= carDealership[k].price) {
                        currentBudget-=carDealership[k].price
                        data[i].budget = currentBudget
                        data[i].garage.push(wantedCars[j])
                    }
                }
            }
        }
    }

    return data
}

  console.log(buyACar(data))

//   console.log(data)
  
  /*
  const result = buyACar(data, carDealership)
  console.log(result)
  [
    {
      name: 'udin',
      budget: 150, => sebelumnya 5k
      wantedCar: ['audi-r6', 'mercedes-cla', 'lexus-ux' 'hyundai-creta', 'honda-brio'],
      garage: ['audi-r6', 'hyundai-creta', 'honda-brio'] => 4300 + 400 + 150
    },
    {
      name: 'bambang',
      budget: 70, => 1500
      wantedCar: ['lexus-ux', 'mercedes-cla', 'hyundai-creta', 'honda-brio'],
      garage: ['lexus-ux', 'hyundai-creta', 'honda-brio'] 880 + 400 + 150
    }
  ]
  */