console.log("Welcome to the main module")

import {createPlan} from "./plan.js"
import { createAsparagus } from "./seeds/asparagus.js"
import {usePlants} from "./field.js"
import {addPlant} from "./field.js"
import { createCorn } from "./seeds/corn.js"
import {plantSeeds} from "./tractor.js"

const yearlyPlan = createPlan()

createPlan()
//createAsparagus()
const asparagusSeed = createAsparagus()
console.log(asparagusSeed)

addPlant(createCorn)
addPlant(asparagusSeed)
usePlants()

console.log(usePlants())

plantSeeds(yearlyPlan)
console.log(plantSeeds(yearlyPlan))
