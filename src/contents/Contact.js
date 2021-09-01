import React, {Component} from 'react'
import Social from '../components/Social'
import Address from '../components/Address'


class Resume extends Component {
    render() {
        
        return ( 
            <div id="Contact" className="component">
                <h2>Contact</h2>
                <table>
                    <tr>
                        <td className="ColumnLeft">
                            <Address info={this.props.info}/>
                        </td>
                        <td className="ColumnRight">
                            <Social info={this.props.info}/>
                        </td>
                    </tr>
                </table>
                
            </div>
        )
    }
}

export default Resume

