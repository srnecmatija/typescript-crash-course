let sports: string[] = ["golf", "cricket", "tennis", "football"];

/*for (let i=0; i < sports.length; i++) {
    console.log(sports[i]);
}*/

for (let sport of sports) {
    if (sport == "football") {
        console.log(sport + " is my favorite")
    } 
    else {
        console.log(sport);
    }
}