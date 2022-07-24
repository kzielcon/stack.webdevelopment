const car = {
  manufacturer: "Toyota",
  model: "Corolla AE101",
  engine: "1,3 2E",
  style: "Sedan"
};

const carModel = ("Manufacturer: "+car.manufacturer+"<br>"+ "Make and Model: "+car.model+"<br>"+ "Engine: "+car.engine+"<br>"+ "Body Style: "+car.style)
document.getElementById("car").innerHTML = carModel