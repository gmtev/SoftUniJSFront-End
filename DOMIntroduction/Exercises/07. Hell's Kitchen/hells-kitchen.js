function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);

    function onClick() {
        let restaurants = {};
        let inputArray = JSON.parse(document.querySelector("textarea").value);

        inputArray.forEach(entry => {
            let [restaurantName, workersData] = entry.split(" - ");
            let workers = workersData.split(", ").map(w => {
                let [name, salary] = w.split(" ");
                return { name, salary: Number(salary) };
            });

            if (!restaurants[restaurantName]) {
                restaurants[restaurantName] = { workers: [] };
            }

            restaurants[restaurantName].workers.push(...workers);
            updateRestaurantStats(restaurants[restaurantName]);
        });

        let bestRestaurant = Object.values(restaurants)
            .sort((a, b) => b.avgSalary - a.avgSalary)[0];

        document.querySelector("#bestRestaurant p").textContent =
            `Name: ${Object.keys(restaurants).find(r => restaurants[r] === bestRestaurant)} ` +
            `Average Salary: ${bestRestaurant.avgSalary.toFixed(2)} ` +
            `Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`;

        document.querySelector("#workers p").textContent =
            bestRestaurant.workers
                .sort((a, b) => b.salary - a.salary)
                .map(w => `Name: ${w.name} With Salary: ${w.salary}`)
                .join(" ");
    }

    function updateRestaurantStats(restaurant) {
        let salaries = restaurant.workers.map(w => w.salary);
        restaurant.bestSalary = Math.max(...salaries);
        restaurant.avgSalary = salaries.reduce((sum, s) => sum + s, 0) / salaries.length;
    }
}
