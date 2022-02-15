import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Content extends Component {

    constructor() {
        super();
        this.state = {
            buttonSelected: 'personal',
        }
    }

    personal = () => {
        this.setState({ buttonSelected: 'personal' });
    }
    buisness = () => {
        this.setState({ buttonSelected: 'buisness' });
    }

    render() {

        let renderContent = this.state.buttonSelected === 'personal' ? (<><form>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Phone Number" />
        </form>
        </>) : (<><form>
            <input type="text" placeholder="Buisness Name" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Phone Number" />
        </form>
        </>);
        return (
            <div>
                <h1>Beneficiary</h1>
                    <div className="choosing-buttons">
                        <button className="top-buttons" onClick={this.personal}>PERSONAL</button>
                        <button className="top-buttons" onClick={this.buisness}>BUISNESS</button>
                    </div>
                    <div className="form-content">
                        {renderContent}
                    </div>
                    <button className="next-btn1"><Link to='/bank'>NEXT</Link></button>
            </div>
        )
    }
}