// ALL DATA MUST BE ENTERED IN RAILWAY TIME

function classifyAlg(data: string[][][]) {
  //3d array; 1d = Names; 2d = Sched; 3d = Free time

  let people = data.length; //Number of people / scheds because of data sets
  console.log(people);
  let curfewtime: string[] = ["0:7"];
  
  let lastStuff: string[] | null = null;
  for (let x = 0; x < people; x++) {
    if(lastStuff === null) {
      lastStuff = data[x][0];
    } else {
      if(data[x][0] === lastStuff) {
        if(x + 1 === people) return lastStuff; 
      }
    }
  }
}

function freeTimeAlg() {

}

/*
USE RAILWAY TIME
- Check for the current free time instances / Check for all instances of free time coorelating to the groups
- Check for what matches the closest to everyone's time
- If free time in curfew time then don't match
- Closest times link them and return
- */
