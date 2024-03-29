import React from 'react';

const Resume = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f4f4', color: '#333', maxWidth: '800px', margin: '20px auto', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            <h1 style={{ color: '#333', textAlign: "center", backgroundColor: '#FF7474', padding: "20px", fontFamily: "arial", fontWeight: "200" }}>Ishaan Agarwal's Resume</h1>
            <div style={{ display: "flex"}}>
                <div style={{ flex: 1, }}>
                    <div style={{borderRight:"2px solid black",borderBottom:"2px solid black",padding:"10px"}}>
                        <h2 style={{ color: '#555', fontWeight: 'bold', marginBottom: '10px' }}>Core Qualifications</h2>
                        <ul style={{ listStyleType: 'disc', paddingLeft: "30px" }}>
                            <li>Cash register operation</li>
                            <li>POS system operation</li>
                            <li>Sales expertise</li>
                            <li>Teamwork</li>
                            <li>Inventory management</li>
                            <li>Accurate money handling</li>
                            <li>Documentation &amp; record-keeping</li>
                            <li>Retail merchandising expertise</li>
                        </ul>
                    </div>

                    <div style={{borderRight:"2px solid black",borderBottom:"2px solid black",padding:"10px" }}>
                        <h2 style={{ color: '#555', fontWeight: 'bold', marginBottom: '10px' }}>Education</h2>
                        <p style={{ paddingLeft: "10px" }}>Financial Accounting, 2018<br />
                            Oxford Software Institute &amp; Oxford School of English, New Delhi, India</p>
                    </div>

                    <div style={{borderRight:"2px solid black",borderBottom:"2px solid black",padding:"10px" }}>
                        <h2 style={{ color: '#555', fontWeight: 'bold', marginBottom: '10px' }}>Languages</h2>
                        <ul style={{ listStyleType: 'disc', paddingLeft: "30px" }}>
                            <li>Hindi (native)</li>
                            <li>English (fluent)</li>
                            <li>Bengali (intermediate)</li>
                        </ul>
                    </div>

                    <div style={{borderRight:"2px solid black",borderBottom:"2px solid black",padding:"10px" }}>
                        <h2 style={{ color: '#555', fontWeight: 'bold', marginBottom: '10px' }}>Additional Information</h2>
                        <ul style={{ listStyleType: 'disc', paddingLeft: "30px" }}>
                            <li>Taught lifesaving skills and CPR classes</li>
                            <li>Red Cross volunteer</li>
                        </ul>
                    </div>

                    <div style={{borderRight:"2px solid black",borderBottom:"2px solid black",padding:"10px" }}>
                        <h2 style={{ color: '#555', fontWeight: 'bold', marginBottom: '10px' }}>Interests</h2>
                        <ul style={{ listStyleType: 'disc', paddingLeft: "30px" }}>
                            <li>Recreational Football League: team captain, two-time league champions</li>
                            <li>Local community theatre: organized several shows and performances</li>
                        </ul>
                    </div>
                </div>

                <div style={{ flex: 2, }}>
                    <div style={{borderBottom:"2px solid black",padding:"10px" }}>
                        <h2 style={{ color: '#555', fontWeight: 'bold', marginBottom: '10px' }}>Professional Summary</h2>
                        <p style={{paddingLeft: "20px"}}>Customer-focused Retail &amp; Sales professional with in-depth understanding of retail dynamics, marketing, and customer service. Offering 5 years of experience providing quality product recommendations and solutions to meet customer expectations and needs. Demonstrated record of exceeding revenue targets by leveraging sales expertise and communication skills.</p>
                    </div>

                    <div style={{borderBottom:"2px solid black",padding:"10px" }}>
                        <h2 style={{ color: '#555', fontWeight: 'bold', marginBottom: '10px' }}>Experience</h2>
                        <p style={{padding:"10px 0"}}>Retail Sales Associate, 02/201to Current<br />
                            ZARA - New Delhi, India</p>
                        <ul style={{ listStyleType: 'disc', paddingLeft: "30px" }}>
                            <li>Increased monthly sales 10% by effectively upselling and cross-selling products to maximize profitability</li>
                            <li>Prevented store losses by leveraging awareness, attention to detail, and integrity to identify and investigate concerns</li>
                            <li>Processed payments and maintained accurate drawers to meet financial targets</li>
                        </ul>
                        <p style={{ paddingLeft: "30px" }}>Barista, 03/2019 to 01/2021<br />
                            Dunkin' Donuts - New Delhi, India</p>
                        <ul style={{ listStyleType: 'disc', paddingLeft: "30px" }}>
                            <li>Upsold seasonal drinks and pastries, boosting average store sales by 1500 weekly</li>
                            <li>Managed morning rush of over 300 customers daily with efficient, level-headed customer service</li>
                            <li>Trained entire staff of 15 baristas in new smoothie program offerings and procedures</li>
                        </ul>
                        <p style={{ paddingLeft: "30px" }}>Cashier, 07/201 to 02/2019<br />
                            Burger King - New Delhi, India</p>
                        <ul style={{ listStyleType: 'disc', paddingLeft: "30px" }}>
                            <li>Processed all sales transactions accurately and promptly to prevent long customer wait times</li>
                            <li>Entered requested menu items into POS terminal, modifying with substitutions and add-ons to customize orders</li>
                            <li>Accurately made change for cash transactions</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resume;
