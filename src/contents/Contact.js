import React, {Component} from 'react'
import Social from '../components/Social'
import Address from '../components/Address'


class Resume extends Component {
    render() {
        return ( 
            <div id="Contact" className="component">
                <h2>CONTACT</h2>
                <table>
                    <tr>
                        <td className="ColumnLeft">
                            <Address/>
                        </td>
                        <td className="ColumnRight">
                            <Social/>
                        </td>
                    </tr>
                </table>
                
            </div>
        )
    }
}

export default Resume

