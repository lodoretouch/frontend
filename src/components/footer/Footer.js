import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Adresa škole */}
          <div>
            <h2 className="text-lg font-semibold">Adresa škole</h2>
            <p>Gundulićeva 5a<br />31 000 Osijek</p>
            <a 
              href="https://www.google.com/maps/place/Ul.+Josipa+Marohni%C4%87a+5,+10000,+Zagreb" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-400 hover:underline"
            >
              Lokacija na mapi
            </a>
          </div>
          
          {/* Kontakt */}
          <div>
            <h2 className="text-lg font-semibold">Kontakt</h2>
            <p>031/202-744</p>
            <a href="mailto:ured@os-amihanovica-os.skole.hr" className="text-blue-400 hover:underline">
              ured@os-amihanovica-os.skole.hr
            </a>
          </div>
  
          {/* Korisni linkovi */}
          <div>
            <h2 className="text-lg font-semibold">Korisni linkovi</h2>
            <ul className="space-y-2">
              <li><a href="https://mzo.gov.hr" className="hover:underline">Ministarstvo znanosti i obrazovanja</a></li>
              <li><a href="https://www.carnet.hr" className="hover:underline">CARNET</a></li>
              <li><a href="https://www.carnet.hr/sluzba-za-podrsku-korisnicima" className="hover:underline">CARNET Helpdesk za škole</a></li>
              <li><a href="https://www.skole.hr" className="hover:underline">Portal za škole</a></li>
              <li><a href="https://edutorij.e-skole.hr" className="hover:underline">Edutorij</a></li>
              <li><a href="https://ocjene.skole.hr" className="hover:underline">e-Dnevnik za roditelje i učenike</a></li>
              <li><a href="https://cms.skole.hr/obavijest-o-privatnosti/" className="hover:underline">Politika privatnosti</a></li>
            </ul>
          </div>
  
          {/* Društvene mreže */}
          <div>
            <h2 className="text-lg font-semibold text-center">Zapratite nas</h2>
            <a 
              href="https://www.facebook.com/OSAntunaMihanovicaOsijek/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Facebook
            </a>
          </div>
        </div>
        
        {/* Sponzori */}
            
                <div className="container mx-auto flex flex-wrap justify-center gap-4 mt-8">
                     <a href="https://www.carnet.hr/" target="_blank" rel="noopener noreferrer">
                     <img src="https://test-os-amihanovica-os.cms.skole.hr/wp-content/uploads/sites/2537/2023/08/carnet.svg" alt="carnet" className="h-10" />
                        </a>
            
                
          <a href="https://european-union.europa.eu/index_hr" target="_blank" rel="noopener noreferrer">
            <img src="https://test-os-amihanovica-os.cms.skole.hr/wp-content/uploads/sites/2537/2023/08/eu.svg" alt="eu" className="h-12" />
          </a>
          <a href="https://strukturnifondovi.hr/" target="_blank" rel="noopener noreferrer">
            <img src="https://test-os-amihanovica-os.cms.skole.hr/wp-content/uploads/sites/2537/2023/08/eu-fondovi.svg" alt="eu-fondovi" className="h-10" />
          </a>
          <a href="https://www.esf.hr/" target="_blank" rel="noopener noreferrer">
            <img src="https://test-os-amihanovica-os.cms.skole.hr/wp-content/uploads/sites/2537/2023/08/eu-potencijal.svg" alt="eu-potencijal" className="h-12" />
          </a>
          <a href="https://strukturnifondovi.hr/eu-fondovi/esi-fondovi-2014-2020/op-konkurentnost-i-kohezija/" target="_blank" rel="noopener noreferrer">
            <img src="https://test-os-amihanovica-os.cms.skole.hr/wp-content/uploads/sites/2537/2023/08/eu-konkurentnost.svg" alt="eu-konkurentnost" className="h-12" />
          </a>
          </div>
        
  
        {/* Napomena */}
        <div className="text-center text-sm text-gray-400 mt-6">
          <p>Izradu ove mrežne stranice sufinancirala je Europska unija iz europskih strukturnih i investicijskih fondova.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  




  