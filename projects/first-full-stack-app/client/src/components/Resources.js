import React from 'react';

const Resources = () => {
    return (
        <div className="resourcesPage">
            {/* <div className="pageContent"> */}
                
                <div className="wallStImg">
                    <h1 className="resourcesTitle">Resources</h1>
                </div>
                <h4 className="italicQuote">"Rule number one:  Don't lose money. Rule number two:  See rule number one." -Warren Buffet</h4>
                <ul className="resourcesList">
                    <li><a href="https://www.investopedia.com/" target="_blank" rel="noopener noreferrer">Investopedia:  A site with a wealth of investing information.</a></li>
                    <li><a href="https://www.bogleheads.org/wiki/Main_Page" target="_blank" rel="noopener noreferrer">Bogle Heads:  Wiki site devoted to the teachings of investment guru John Bogle.</a></li>
                    <li><a href="https://www.fool.com/knowledge-center/tax-penalties-for-selling-stock.aspx" target="_blank" rel="noopener noreferrer">Motley Fool Tax Article: Capital gains tax information</a></li>
                    <li><a href="https://www.robinhood.com/" target="_blank" rel="noopener noreferrer">Robinhood: An app for buying and selling stock for free.</a></li>
                </ul>
            {/* </div> */}
        </div>
    )
}

export default Resources;
