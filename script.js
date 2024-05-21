const canvas = document.getElementById("renderSurface");
let myFluid = new Fluid(canvas);

myFluid.mapBehaviors({
    paused:false,
    pressure:0.1,
    curl:1,
})

myFluid.activate();
