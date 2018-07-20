// I am going to make an app that catalogs my social network
// I actually want start with my professional network

var proReferences = [
    {
        name: "Jon Myrick",
        industry: "Full-stack Web Dev",
        jobTitle: "Software Architect",
        company: "JJUMPP",
        years: 1,
        specificSkills: ["SQL", "Express", "Angular", "Node"],
        willHelp: true,
        haveBeenInTouch: false,
        secondaryConnections: [
            {
                name: "Sang",
                relation: "Former classmate and former roommate.",
                industry: "Full-stack Web Dev",
                tertiaryConnections: []
            }
        ],
        reachOut: function () {
            this.haveBeenInTouch === true;
            console.log(this.name + " has been contacted.")
        }
    },
    {
        name: "Ife George",
        industry: "Business Intelligence and Analytics",
        jobTitle: "Software Engineer / Java Developer",
        company: "Domo",
        years: 3,
        specificSkills: ["Java", "algorithms", "business intelligence"],
        willHelp: true,
        haveBeenInTouch: false,
        secondaryConnections: [],
        reachOut: function () {
            this.haveBeenInTouch === true;
            console.log(this.name + " has been contacted.")
        }
    },
    {
        name: "Eric Jin",
        industry: "National Defense",
        jobTitle: "Software Engineer",
        company: "Northrup Grumman",
        years: "unknown",
        specificSkills: "unknown",
        willHelp: true,
        haveBeenInTouch: false,
        secondaryConnections: [],
        reachOut: function () {
            this.haveBeenInTouch === true;
            console.log(this.name + " has been contacted.")
        }
    }
]

console.log(proReferences);
proReferences[0].reachOut();
console.log(proReferences[0]);