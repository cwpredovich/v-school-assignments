import React, {Component} from 'react';
import axios from 'axios';
import Target from './Target';

class Targets extends Component {
    constructor(){
        super()
        this.state = {
            data: []
        }
    }

    componentDidMount(){
        axios.get("http://api.vschool.io:6543/hitlist.json").then(response => {
            this.setState({
                data: response.data
            })
        }).catch(err => {
            console.log(err)
        })
    }

    render() {

        

        const mappedHitList = this.state.data.map(target => {
            return (
                <Target
                    {...target}
                    key={target.name} />
            )
        })

        const targetsStyle = {
            height: '800px',
            width: '800px',
            display: 'grid',
            gridGap: "25px",
            textAlign: 'center',
            gridTemplateColumns: "1fr 1fr 1fr",
            gridTemplateRows: "1fr 1fr 1fr 1fr"
        }

        return(
            <div style={targetsStyle}>
                { mappedHitList }
            </div>
        )
    }
}


export default Targets;