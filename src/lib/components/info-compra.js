import React from 'react'
import '../style/info-compra.css'
import '../assets/icons/style.css'

const InfoBuy =() => (
  <div className="container">
    <div className="row info-compra">
      <div className="col-4 col-md-4 text-center info codigo align-self-center">
        <p>Payment code <br/> <strong>9125682</strong></p>
        </div>
      <div className="col-3 col-md-4 text-center info total align-self-center">
        <p><strong>Total</strong><br/>S/.140.00</p>
      </div>  
      <div className="col-5 col-md-4  text-center info fecha row d-flex justify-content-center">
          <div className=" col-3 col-md-4  align-self-center">
          <span className="icon-alarmclock"></span>
          </div>
          <div className="col-9 col-md-8 align-self-center expire">
            <p>Your order will expire: <br/><strong>23 Feb - 01:12 p.m.</strong></p>
         </div>
        </div>
    </div>
  </div>
)
export default InfoBuy