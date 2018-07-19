var banana = {
    color: "yellow",
    quantity: 10,
    isRipe: false
};

var javaScriptStudents = {
    quantity: 15,
    allTheSameSkillLevel: false,
    haveReceivedInstruction: true,
    slcRegulators: {
        presentInClass: true,
        quantity: 3,
        names: ['Chris', 'Gustavo', 'Tucker']
    }
};

var entrances = {
    quantity: 2,
    types: ['elevator', 'stairs'],
    elevator: {
        isUsable: true,
        alsoAnExit: true,
        location: "The elevator is located at the south east corner of the third floor."
    },
    stairs: {
        isUsable: true,
        alsoAnExit: true,
        location:"The stairs can be accessed at the SE corner just past the elevator."
    },
    thirdFloorStatus: function () {
        console.log("On VS-3, there are " + this.quantity + " entrances.");
        if (this.elevator.isUsable = true) {
            console.log("The elevator is in service");
        } else {
            console.log("The elevator is non-operational");
        }
    }
};

entrances.thirdFloorStatus();



