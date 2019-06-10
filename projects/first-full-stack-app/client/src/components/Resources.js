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
                    <li><a href="https://www.investopedia.com/">Investopedia:  A site with a wealth of investing information.</a></li>
                    <li><a href="https://www.bogleheads.org/wiki/Main_Page">Bogle Heads:  Wiki site devoted to the teachings of investment guru John Bogle.</a></li>
                    <li><a href="https://www.fool.com/knowledge-center/tax-penalties-for-selling-stock.aspx">Motley Fool Tax Article: Capital gains tax information</a></li>
                    <li><a href="https://www.robinhood.com/">Robinhood: An app for buying and selling stock for free.</a></li>
                </ul>
            {/* </div> */}
        </div>
    )
}

export default Resources;
