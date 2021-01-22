//variable that is an empty array 
let allThePlantsGrowing = []


//a function called addPlant, accepts a seed object as input(parameter)
export const addPlant = (seedObject) => {
    allThePlantsGrowing.push(seedObject)//add the seed to the field using .push
}


//a function called usePlants, returns a copy of the array of plants
export const usePlants = () => {
   let plantContainerArray = allThePlantsGrowing
    return plantContainerArray.slice()
}