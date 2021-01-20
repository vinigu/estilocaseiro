import React from "react";

import MofarrejPreFooter from "../../assets/mofarrej-pre-footer.png";
import HillPreFooter from "../../assets/hill-pre-footer.png";
import ToledoPreFooter from "../../assets/toledo-pre-footer.png";

export default function PreFooter(){
  return (
    <section className="prefooter">
      <div className="container itens-prefooter">
        <img src={MofarrejPreFooter} alt="Mofarrej"/>
        <img src={HillPreFooter} alt="Hill"/>
        <img src={ToledoPreFooter} alt="Toledo"/>
      </div>
    </section>
  )
}