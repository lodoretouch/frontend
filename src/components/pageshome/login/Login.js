import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Login.css"


const Login = () => {
  const [form, setForm] = useState({
    username:"",
    password:""
});
  
  const navigate = useNavigate();
  const handleLogin = (e) => {
    setForm({
      ...form,
      [e.target.name] : e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    SVGAnimateTransformElement({
        ...form,
        [e.target.name] : e.target.value
    });
    

    fetch(
        "https://test-os-amihanovica-os.cms.skole.hr/wp-json/wp/v2/posts", {
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(form)
        }
    )
    
    .then((response) => {
        console.log(response);
        return response.json;
    }
    )
    .then((data) => {
        localStorage.setItem("token",data.token);
        localStorage.setItem("username", data.user_display_name);
        console.log(data);

        navigate("/");
        window.location.reload();
    }
);


  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 login-intro">
          <img src="img/logo.jpg" alt="Logo" />
          <h1 className="text-2xl font-bold">Dobrodošli na stranicu LoDoRe touch</h1>
          <p className="mt-2">Na ovoj stranici saznajte sve o nama i našim uslugama. Obratite nam se s povjerenjem!</p>
          <img src="img/oklagije.jpeg" alt="Oklagije" className="mt-4" />
        </div>

        <div className='col-md-6'>
          <div className="login-form">
            <h2>Dobrodošli nazad!</h2>
            <p className="mb-4">Podaci za prijavu</p>
            <form onSubmit={handleSubmit}>
              <label className="block">E-mail ili telefonski broj</label>
              <input
                type="text"
                placeholder="Upišite svoj mail ili broj telefona"
                value={form.username}
                onChange={handleLogin}
                className="w-full p-2 border rounded mb-2"
              />
              <label className="block">Lozinka</label>
              <input
                type="password"
                placeholder="Upišite lozinku"
                value={form.password}
                onChange={handleLogin}
                className="w-full p-2 border rounded mb-2"
              />
              <Link to="/forgot-password" className="text-blue-500 text-sm">Zaboravili ste lozinku?</Link>
              <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded mt-4">Prijavi se</button>
            </form>
            <p className="mt-4">Nemate račun? <Link to="/register" className="text-blue-500">Izradi ga</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
