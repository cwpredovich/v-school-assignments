import React from 'react';
// import Service from './Service';



const Services = () => {
    const servicesOffered = [
        {
            name: "Geneology",
            img: "",
            description: "Provided some basic info, we can find a long line of your ancestors and relatives living all over the world.",
            price: "$ 100.00"
        },
        {
            name: "Trip Planning",
            img: "",
            description: "Now that you know the places your family came from, which country of origin will be your first destination?",
            price: "$ 100.00"
        },
        {
            name: "Booking",
            img: "",
            description: "Family Trace has exclusive partnerships with major airlines and hotels which allows you to have a comfortable stay at a great price.",
            price: "TBD"
        },
        {
            name: "Guided Tours",
            img: "",
            description: "Travel with our guides to discover the tale of your family's unique journey.",
            price: "$ 200.00 per family member"
        },
        {
            name: "Reconnect",
            img: "",
            description: "Chances are that you still have relatives living in other countries. Through our Reconnect service, your Family Trace guide will help you meet those family members you may not have even met yet.",
            price: "Included"
        }
    ]
    return (
        <div>
            {/* <Service /> */}
            {servicesOffered.map((service, index) => 
                <div key={service.name + index}>
                    <h3>{service.name}</h3>
                    <p>{service.description}</p>
                    <p>Price: {service.price}</p>
                </div>
            )}
        </div>
    )
}

export default Services;