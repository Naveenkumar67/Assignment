var stateObject = {
    "India": { "Delhi": ["new Delhi", "North Delhi","South Delhi"],
    "Kerala": ["Thiruvananthapuram", "Palakkad" ,"Kochi"],
    "Telangan": ["Hyderabad", "Suryapet","Nalgonda"],
    },
    "Australia": {
    "South Australia": ["Dunstan", "Mitchell","Adelaide"],
    "Victoria": ["Altona", "Euroa","hume region"],
    "Brisbane":["South bank arena","Moreton Island","Milton"]
    }, "Canada": {
    "Alberta": ["Acadia", "Bighorn","foothills county"],
    "Columbia": ["Washington", "Santa marta","Cartagena"],
    "Manitoba":["Central Manitoba","Selkirk Arena","SwanV Valley"]
    },
    }
    window.onload = function () {
    var countySel = document.getElementById("country"),
    stateSel = document.getElementById("state"),
    districtSel = document.getElementById("district");
    for (var country in stateObject) {
    countySel.options[countySel.options.length] = new Option(country, country);
    }
    countySel.onchange = function () {
    stateSel.length = 1; 
    districtSel.length = 1;
    if (this.selectedIndex < 1) return; 
    for (var state in stateObject[this.value]) {
    stateSel.options[stateSel.options.length] = new Option(state, state);
    }
    }
    countySel.onchange(); 
    stateSel.onchange = function () {
    districtSel.length = 1; 
    if (this.selectedIndex < 1) return; 
    var district = stateObject[countySel.value][this.value];
    for (var i = 0; i < district.length; i++) {
    districtSel.options[districtSel.options.length] = new Option(district[i], district[i]);
    }
    }
    }