import React from 'react';
import { Facebook, Twitter, Instagram, LinkedIn, YouTube } from '@mui/icons-material';
import { IconButton } from '@mui/material';

const Footer = () => {
  return (
    <div className="blank bg-zinc-900 w-full">
      <div className='bg-zinc-900 w-full flex justify-center h-100 flex-row p-30'>
        <div className="company w-1/4 mr-20">
          <img src="/images/MindTradeLogo.png" alt="logo" />
          <p className='text-zinc-200'> © 2010 - 2025, Zerodha Broking Ltd. All rights reserved.</p>
            <div className="social flex w-1/6 justify-around">
              <IconButton
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook sx={{ color: 'white', fontSize: '2rem' }} />
              </IconButton>

              <IconButton
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter sx={{ color: 'white', fontSize: '2rem' }} />
              </IconButton>

              <IconButton
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram sx={{ color: 'white', fontSize: '2rem' }} />
              </IconButton>

              <IconButton
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedIn sx={{ color: 'white', fontSize: '2rem' }} />
              </IconButton>

              <IconButton
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <YouTube sx={{ color: 'white', fontSize: '2rem' }} />
              </IconButton>
            </div>
        </div>
        {/* link */}

        <div className="links flex gap-5 flex-col w-1/4">
          <h3 className='text-zinc-200 text-xl'>Company</h3>
          <div className="links flex flex-col text-zinc-400">
            <a href="#">About</a>
            <a href="#">Products</a>
            <a href="#">Pricing</a>
            <a href="#">Support</a>
            <a href="#">Products</a>
            <a href="#">Pricing</a>
            <a href="#">Support</a>
          </div>
        </div>


        <div className="links flex gap-5 flex-col w-1/4">
          <h3 className='text-zinc-200 text-xl'>Company</h3>
          <div className="links flex flex-col text-zinc-400">
            <a href="#">About</a>
            <a href="#">Products</a>
            <a href="#">Pricing</a>
            <a href="#">Support</a>
          </div>
        </div>

        <div className="links flex gap-5 flex-col w-1/4">
          <h3 className='text-zinc-200 text-xl'>Company</h3>
          <div className="links flex flex-col text-zinc-400">
            <a href="#">About</a>
            <a href="#">Products</a>
            <a href="#">Pricing</a>
            <a href="#">Support</a>
          </div>
        </div>
      </div>
      <div className="para px-30 text-zinc-600">
        <p>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF

          Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances

          Smart Online Dispute Resolution | Grievances Redressal Mechanism

          Investments in securities market are subject to market risks; read all the related documents carefully before investing.

          Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.

          "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>
      </div>
    </div>
  )
}

export default Footer