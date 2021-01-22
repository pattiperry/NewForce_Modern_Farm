const types = ["Soybean", "Corn", "Asparagus", "Wheat", "Potato", "Sunflower"]

//defining a variable of yearlyPlan and referencing the container with an id of yearly-plan in html
//let yearlyPlan = document.querySelector("#yearly-plan")
export const createPlan = () => { //creating a function to export called createPlan that will return the plan
    const plan = []//the plan will iterate through both of the following loops

    for (let index = 0; index < 3; index++) {
        const row = [] //this loop creates 3 rows
        for (let j = 0; j < 6; j++) {
            row.push(crop.next().value)//this loop puts 6 crops in each row
        }
        plan.push(row)//calling the function plan with the parameter of row
    }
    //yearlyPlan.innerHTML = plan //pushing the plan into our HTML container
    return plan//returning everything we configured for plan;function createPlan stops here
}
//console.log(yearlyPlan)




/*
    This is a generator function used to randomly
    generate crop types to plants in each plot. It
    is not relevant for you implementing your code
    for this project.
*/
const crop = function* () {
    while (true) {
        const typeIdx = Math.floor(Math.random() * types.length)
        yield types[typeIdx]
    }
}()

