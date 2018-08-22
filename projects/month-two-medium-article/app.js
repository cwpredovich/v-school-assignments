let recruits = [
    {
      name: "Matin",
      pftScore: 300,
      rifleScore: 280,
      passedCrucible: true
    },
    {
      name: "Predo",
      pftScore: 260,
      rifleScore: 295,
      passedCrucible: true
    },
    {
      name: "Tsoy",
      pftScore: 300,
      rifleScore: 350,
      passedCrucible: true
    },
    {
      name: "Shmuckatelli",
      pftScore: 100,
      rifleScore: 100,
      passedCrucible: false
    }
  ];
  
  const makeMarines = recruits.filter(function(recruit) {
    return recruit.pftScore >= 110 &&
    recruit.rifleScore >= 190 &&
    recruit.passedCrucible === true
  })

  const sendToCoastGuard = recruits.filter(function(recruit) {
      return recruit.pftScore < 110 ||
      recruit.rifleScore < 190 ||
      recruit.passedCrucible === false
  })
  
  console.log(makeMarines)
  console.log(sendToCoastGuard)
