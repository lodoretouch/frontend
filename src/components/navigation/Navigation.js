import React from 'react';
import { Link } from 'react-router-dom';  // Importirajte Link
import "./Navigation.css"


const Navigation = () => {
  return (
    <div className="et_pb_row et_pb_row_1_tb_header et_pb_row--with-menu" style={{ zIndex: 3 }}>
      <div className="et_pb_column et_pb_column_4_4 et_pb_column_2_tb_header et_pb_css_mix_blend_mode_passthrough et-last-child et_pb_column--with-menu">
        <div className="et_pb_with_border et_pb_module et_pb_menu et_pb_menu_0_tb_header et_pb_bg_layout_light et_pb_text_align_center et_dropdown_animation_fade et_pb_menu--without-logo et_pb_menu--style-left_aligned">
          <span className="et_pb_background_mask"></span>
          <div className="et_pb_menu_inner_container clearfix">
            <div className="et_pb_menu__wrap">
              <div className="et_pb_menu__menu">
                <nav className="et-menu-nav">
                  <ul id="menu-glavni-izbornik" className="et-menu nav">
                    <li className="et_pb_menu_page_id-home menu-item">
                      <Link to="/" aria-current="page">Naslovna</Link>  {/* Koristimo Link umjesto <a> */}
                    </li>
                    <li className="et_pb_menu_page_id-294426 menu-item">
                          <Link to="https://test-os-amihanovica-os.cms.skole.hr/category/zakoni/dokumenti/">Blog</Link>  {/* Ruta za blogove*/}
                        </li>
                    
                    <li className="et_pb_menu_page_id-75 menu-item">
                      <Link to="/o-skoli">O školi</Link>  {/* Ruta za O školi */}
                      <ul className="sub-menu">
                        <li className="et_pb_menu_page_id-294426 menu-item">
                          <Link to="https://test-os-amihanovica-os.cms.skole.hr/povijest-skole/">Povijest škole</Link>  {}
                                                  </li>
                      </ul>
                    </li>
                    <li className="et_pb_menu_page_id-78 menu-item">
                      <Link to="/nastava">Nastava</Link>  {/* Ruta za Nastavu */}
                      <ul className="sub-menu">
                        <li className="et_pb_menu_page_id-294189 menu-item">
                          <Link to="https://test-os-amihanovica-os.cms.skole.hr/nastava/294189-2/">Razredna nastava</Link>
                        </li>
                        <li className="et_pb_menu_page_id-294204 menu-item">
                          <Link to="https://test-os-amihanovica-os.cms.skole.hr/nastava/predmetna-nastava/">Predmetna nastava</Link>
                        </li>
                      </ul>
                      
                    </li>
                    {/* Dodajte ostale linkove za ostale stranice */}
                    <li className="et_pb_menu_page_id-292956 menu-item">
                      <Link to="https://test-os-amihanovica-os.cms.skole.hr/kontakt/">Kontakt</Link>  {/* Ruta za Kontakt */}
                    </li>
                    </ul>
                    
                
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
