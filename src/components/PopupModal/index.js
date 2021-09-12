import React, { Component } from 'react';
import { Button, Popup } from 'semantic-ui-react'

class PopupModal extends Component{
    render(){
        return(
            <Popup
                content={
                    <div className="terms">
                        <p><b>Accounts Payable</b> - Accounts payable (AP) are amounts due to vendors or suppliers for goods or services received that have not yet been paid for</p>
                        <p><b>Current Assets</b> - represent all the assets of a company that are expected to be conveniently sold, consumed, used, or exhausted through standard business operations with one year</p>
                        <p><b>Current Liabilities</b> - Current liabilities are a company's short-term financial obligations that are due within one year or within a normal operating cycle</p>
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