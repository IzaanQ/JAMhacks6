function algorithm() {
  let reqtime = "2"
  let array = "16:00|17:00";
  let array2 = "17:00|18:00";
  let begintime1 = parseInt(array.split("|")[0]);
  let endtime1 = parseInt(array.split("|")[1]);
  
  let begintime2 = parseInt(array2.split("|")[0]);
  let endtime2 = parseInt(array2.split("|")[1]);
  // console.log(begintime1, begintime2, endtime1, endtime2);
  
  switch (begintime1 > begintime2) {
    case true:
      switch(endtime1 > endtime2) {
        case true:
          if (endtime2 < begintime1) return false;
        case false:
          if(endtime1 - begintime1 >= parseInt(reqtime) && endtime2 - begintime2 >= parseInt(reqtime)) return true;
          else return false;
      }
    case false:
      switch(endtime1 > endtime2) {
        case true:
          if (endtime2 - begintime2 >= parseInt(reqtime) && endtime1 - begintime1 >= parseInt(reqtime)) return true;
          else return false;
        case false:
          if(endtime1 <= begintime2) return false;
      }
    
      if (begintime1 === begintime2) {
        switch (endtime1 > endtime2) {
          case true:
            if (endtime2 - begintime2 >= parseInt(reqtime)) return true;
            else return false;
          case false:
            if (endtime1 - begintime1 >= parseInt(reqtime)) return true;
            else return false;
        }
      }
  }
  return false;
}

console.log(algorithm());
/*
USE RAILWAY TIME
FULL HOURS ONLY DONT USE INCREMENTS
*/
