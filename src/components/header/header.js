
import React from 'react';

import "./Header.css";

const Header = () => {
  return (
    <header>
     
    <div className="et_pb_row et_pb_row_0_tb_header et_had_animation">
      <div className="et_pb_column et_pb_column_1_2 et_pb_column_0_tb_header et_pb_css_mix_blend_mode_passthrough et_pb_column_empty"></div>
      <div className="et_pb_column et_pb_column_1_2 et_pb_column_1_tb_header et_pb_css_mix_blend_mode_passthrough et-last-child">
        <div className="et_pb_with_border et_pb_module et_pb_text et_pb_text_0_tb_header et_pb_text_align_center et_pb_bg_layout_light">
          <div className="et_pb_text_inner">
            <h1 style={{ textAlign: 'center' }}>
              <span style={{ color: '#063ea5' }}>Osnovna škola Antuna Mihanovića</span>
            </h1>
            <h1 style={{ textAlign: 'center' }}>
              <span style={{ color: '#063ea5' }}>Osijek</span>
              <span style={{ fontFamily: 'Aclonica', fontWeight: 'normal' }}>
                <strong>
                  <span style={{ color: '#0054bc', fontSize: 'xx-large' }}></span>
                </strong>
              </span>
            </h1>
            <p>
              <span style={{ fontFamily: 'Aclonica', fontWeight: 'normal' }}>
                <strong>
                  <span style={{ color: '#0054bc', fontSize: 'xx-large' }}></span>
                </strong>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>

    </header>

    );
};

export default Header;