const express = require('express')
const bountyRoutes = express.Router()

const bountyList = [
    {
        firstName: 'Obi Wan',
        lastName: 'Kenobi',
        living: true,
        bounty: 400,
        type: 'jedi',
        id: '1234'
    },
    {
        firstName: 'Mace',
        lastName: 'Windu',
        living: true,
        bounty: 400,
        type: 'jedi',
        id: '2234'
    },{
        firstName: 'Qui Gon',
        lastName: 'Jinn',
        living: true,
        bounty: 400,
        type: 'jedi',
        id: '3234'
    },
]

bountyRoutes.route('/')
    .get((req, res) => {
        res.send(bountyList)
    })
    .post((req, res) => {
        const newBounty = req.body;
        newBounty.id = uuid();
        bountyList.push(newBounty);
        res.send(newBounty);
    })

bountyRoutes.route('/:id')
    .get((req, res) => {
        const foundBounty = bountyList.find(bounty => bounty.id === req.params.id)
        if(foundBounty){
            res.send({
                msg: `Successfully found item ${req.params.id}`,
                bounty: foundBounty
            })
        }else {
            res.send('Bounty not found')
        }
        
    })
    .put((req, res) => {
        const foundBountyIndex = bountyList.findIndex(i => i.id === req.params.id);
        if (foundBountyIndex === -1) {
            res.sendStatus(404);
        }
        for (key in bountyList[foundBountyIndex])
            if (req.body[key])

        res.send(bountyList)
    })
    .delete((req, res) => {
        res.send('delete request')
    })

module.exports = bountyRoutes