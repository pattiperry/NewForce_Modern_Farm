import { addPlant } from "./field.js"
import { createAsparagus } from "./seeds/asparagus.js"

export const plantSeeds = (plantingPlan) => {
    for(let i=0; i<plantingPlan.length; i++){
        for(let j=0; j<plantingPlan[i].length; i++){
            if(plantingPlan[j] === "asparagus"){
                addPlant(createAsparagus)
            }
             
        }

    }
}