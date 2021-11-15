const button = document.getElementById('submit');
luggage = ["Books", "Clothes", "Shoes", "Computer"]
luggage_values = {"Books": 2, "Clothes": 3, "Shoes": 4, "Computer": 5};



            
button.addEventListener('click' ,function (e) {
    //There was a misundertanding in task in luggage section.
    e.preventDefault();
    // document.querySelector('input[id="yes"]').addEventListener("click", function(){
    // luggage.forEach(function (element) {
    //     var myDiv = document.getElementById("luggage_checkboxes");
    //     var checkbox = document.createElement('input');
    //     checkbox.type = "checkbox";
    //     checkbox.name = "name";
    //     checkbox.value = Number(luggage_values[element]);
    //     checkbox.id = element;
            
    //     var label = document.createElement('label');
            
    //     label.htmlFor = element;
            
    //     label.appendChild(document.createTextNode(element));
            
    //     myDiv.appendChild(checkbox);
    //     myDiv.appendChild(label);
    //     myDiv.appendChild(br)
    // });
    // });
    var cost = Number(document.booking.destination.value);
    var ageGroupIndex = Number(document.booking.age_group.value);
    var tripTypeIndex = Number(document.booking.trip_type.value);
    var classTypeIndex = Number(document.booking.class_type.value);
    var overAllCost = cost*ageGroupIndex*tripTypeIndex*classTypeIndex;
    document.querySelector("h2").innerHTML = `The overall cost of your ticket is: ${overAllCost}`;
})


