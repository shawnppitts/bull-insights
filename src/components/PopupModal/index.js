import React, { Component } from 'react';
import { Button, Popup } from 'semantic-ui-react'

class PopupModal extends Component{
    render(){
        return(
            <Popup
                content={
                    <div className="terms">
                        <p><b>Current Assets</b> - Assets that can be converted to cash (liquidated) within 1 year</p>
                        <p><b>Current Liabilities</b> - Debts that need to be paid within 1 year</p>
                    </div>
                }
                on='click'
                popper={{ id: 'popper-container', style: { zIndex: 2000 } }}
                wide="very"
                trigger={<Button>Terms Dictionary</Button>}
            />
        )
    }
}

export default PopupModal;