let kgRef = document.getElementById("kg");
let lbRef = document.getElementById("lb");
let ozRef = document.getElementById("oz");

let convertFromkg = () => {
    let kg = kgRef.value;
    lbRef.value = (kg * 2.205).toFixed(2);
    ozRef.value = (kg * 35.074).toFixed(2);
};

let convertFromlb = () => {
    let lb = lbRef.value;
    kgRef.value = (lb / 2.202).toFixed(2);
    ozRef.value = (lb * 16).toFixed(2);
};

let convertFromoz = () => {
    let oz = ozRef.value;
    kgRef.value = (oz / 35.274).toFixed(2);
    lbRef.value = (oz / 16).toFixed(2);
};
kgRef.addEventListener("input",convertFromkg);
lbRef.addEventListener("input",convertFromlb);
ozRef.addEventListener("input",convertFromoz);