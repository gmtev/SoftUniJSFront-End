function solve() {
    let inputText = document.querySelector("textarea").value;
    let restaurantsData = JSON.parse(inputText);
    
    let restaurants = {};

    for (let entry of restaurantsData) {
        let [restaurantName, workersInfo] = entry.split(" - ");
        let workersArr = workersInfo.split(", ");

        if (!restaurants[restaurantName]) {
            restaurants[restaurantName] = {
                workers: [],
                avgSalary: 0,
                bestSalary: 0
            };
        }

        for (let worker of workersArr) {
            let [workerName, salary] = worker.split(" ");
            salary = Number(salary);

            restaurants[restaurantName].workers.push({ name: workerName, salary });
        }

        let totalSalary = restaurants[restaurantName].workers.reduce((sum, worker) => sum + worker.salary, 0);
        let bestSalary = Math.max(...restaurants[restaurantName].workers.map(w => w.salary));

        restaurants[restaurantName].avgSalary = totalSalary / restaurants[restaurantName].workers.length;
        restaurants[restaurantName].bestSalary = bestSalary;
    }

    let bestRestaurantName = Object.keys(restaurants)
        .sort((a, b) => restaurants[b].avgSalary - restaurants[a].avgSalary)[0];

    let bestRestaurant = restaurants[bestRestaurantName];
    bestRestaurant.workers.sort((a, b) => b.salary - a.salary); 

    let bestRestaurantOutput = document.querySelector("#bestRestaurant span");
    bestRestaurantOutput.textContent = 
        `Name: ${bestRestaurantName} Average Salary: ${bestRestaurant.avgSalary.toFixed(2)} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`;

    let bestWorkersOutput = document.querySelector("#workers span");
    bestWorkersOutput.textContent = bestRestaurant.workers
        .map(worker => `Name: ${worker.name} With Salary: ${worker.salary}`)
        .join(" ");
}