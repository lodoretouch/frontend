import React from "react";
import './Home.css';

const Home = () => {
    const links = [
        { href: "https://test-os-amihanovica-os.cms.skole.hr/skolsko-zvono/", text: "Školsko zvono" },
        { href: "https://test-os-amihanovica-os.cms.skole.hr/skolski-autobus/", text: "Školski autobus" },
        { href: "https://test-os-amihanovica-os.cms.skole.hr/skolski-jelovnik/", text: "Školska kuhinja" },
        { href: "https://test-os-amihanovica-os.cms.skole.hr/kutak-za-roditelje/", text: "Kutak za roditelje" }
    ];

    const colors = ["bg-red-500", "bg-green-500", "bg-yellow-500", "bg-blue-500", "bg-purple-500", "bg-pink-500"];

    return (
        <div>
            <div className="flex justify-center gap-4 p-4">
                {links.map((link, index) => (
                    <a key={index}
                        href={link.href}
                        className={`text-white py-2 px-4 rounded-lg shadow hover:opacity-80 transition ${colors[index % colors.length]}`}
                    >
                        {link.text}
                    </a>
                ))}
            </div>

            <div className="et_pb_section et_pb_section_2 et_pb_with_background et_section_regular">
                <div className="et_pb_row et_pb_row_3">
                    <div className="et_pb_column et_pb_column_1_2 et_pb_column_5 et_pb_css_mix_blend_mode_passthrough">
                        <div className="et_pb_module et_pb_text et_pb_text_0 et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                                <h2>
                                    <span style={{ fontFamily: 'Aclonica', color: '#03046b' }}>Naša mala zajednica broji:</span>
                                </h2>
                                <h3>
                                    <span style={{ fontFamily: 'Aclonica', fontWeight: 'normal', color: '#03046b' }}>
                                        – 337
                                    </span>
                                    <span style={{ color: '#02247a' }}> učenika</span>
                                </h3>
                                <h3>
                                    <span style={{ fontFamily: 'Aclonica', fontWeight: 'normal', color: '#02247a' }}>
                                        – 55 zaposlenika
                                    </span>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="et_pb_column et_pb_column_1_2 et_pb_column_6 et_pb_css_mix_blend_mode_passthrough et-last-child">
                        <div className="et_pb_module et_pb_image et_pb_image_0 et_had_animation">
                            <span className="et_pb_image_wrap has-box-shadow-overlay">
                                <div className="box-shadow-overlay"></div>
                                <img
                                    fetchpriority="high"
                                    decoding="async"
                                    width="500"
                                    height="500"
                                    src="https://test-os-amihanovica-os.cms.skole.hr/wp-content/uploads/sites/2537/2025/02/Lucija-Kucibradic-1.jpg"
                                    alt="Lucija Kučibradić"
                                    title="Lucija Kučibradić"
                                    className="wp-image-293826 lazyautosizes lazyloaded"
                                />
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="et_pb_section et_pb_section_3 et_pb_with_background et_section_regular et_pb_section--with-menu">
                <div className="et_pb_row et_pb_row_4">
                    <div className="et_pb_column et_pb_column_4_4 et_pb_column_7 et_pb_css_mix_blend_mode_passthrough et-last-child">
                        <div className="et_pb_module et_pb_text et_pb_text_2 et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                                <h2 style={{ textAlign: "center" }}>
                                    <span style={{ fontFamily: "Aclonica", fontWeight: "normal" }}>
                                        Učimo, rastemo…
                                    </span>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="et_pb_row et_pb_row_5 et_pb_row--with-menu" style={{ zIndex: 3 }}>
                    <div className="et_pb_column et_pb_column_4_4 et_pb_column_8 et_pb_css_mix_blend_mode_passthrough et-last-child et_pb_column--with-menu">
                        <div className="et_pb_module et_pb_menu et_pb_menu_0 et_pb_bg_layout_light et_pb_text_align_left et_dropdown_animation_fade et_pb_menu--without-logo et_pb_menu--style-centered">
                            <div className="et_pb_menu_inner_container clearfix">
                                <div className="et_pb_menu__wrap">
                                    <div className="et_pb_menu__menu">
                                        <nav className="et-menu-nav">
                                            <ul id="menu-srednji-izbornik" className="et-menu nav upwards">
                                                <li>
                                                    <a href="https://test-os-amihanovica-os.cms.skole.hr/category/skolska-zadruga/">
                                                        Školska zadruga
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://test-os-amihanovica-os.cms.skole.hr/category/nastava/">
                                                        Nastava
                                                    </a>
                                                    <ul className="sub-menu">
                                                        {[1, 2, 3, 4, 5, 6, 7, 8].map((grade) => (
                                                            <li key={grade}>
                                                                <a href={`https://test-os-amihanovica-os.cms.skole.hr/category/nastava/${grade}-razred/`}>
                                                                    {grade}. razred
                                                                </a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="https://test-os-amihanovica-os.cms.skole.hr/category/projekti/">Projekti</a>
                                                    <ul className="sub-menu">
                                                        {[
                                                            { name: "Biosigurnost i biozaštita", slug: "biosigurnost-i-biozastita" },
                                                            { name: "E-twinning", slug: "e-twinning" },
                                                            { name: "Globe", slug: "globe" },
                                                        ].map((project) => (
                                                            <li key={project.slug}>
                                                                <a href={`https://test-os-amihanovica-os.cms.skole.hr/category/projekti/${project.slug}/`}>
                                                                    {project.name}
                                                                </a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
