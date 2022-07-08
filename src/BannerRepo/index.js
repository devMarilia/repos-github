import axios from "axios";
import React from "react";
import { ContainerApp } from "./styled";


export default function BannerRepo() {
  const [search, setSearch] = React.useState("");
  const [name, setName] = React.useState("");
  const [bio, setBio] = React.useState("");
  const [avatar, setAvatar] = React.useState("");
  const [followers, setFollowers] = React.useState(0);

  function msgerror() {
    document.getElementById("msg-error").style.display = "block";

    setTimeout(function () {
      document.getElementById("msg-error").style.display = "none";
    }, 3000);
    clear();
  }

  function clear() {
    setSearch("");
    setName("");
    setBio("");
    setAvatar("");
    setFollowers(0);
  }

  function validateFields() {
    if (search === "") {
      msgerror();
      return false;
    } else if (search.length < 3) {
      alert("O campo de busca deve conter no mínimo 3 caracteres");
      return false;
    } else {
      return true;
    }
  }

  const handleSearch = (e) => {
    e.preventDefault();
    if (validateFields()) {
      axios
        .get(`https://api.github.com/users/${search}`)
        .then((response) => {
          setName(response.data.name);
          setBio(response.data.bio);
          setAvatar(response.data.avatar_url);
          setFollowers(response.data.followers);
          console.log(response.data);
        
        })
        .catch((error) => {
          alert("Erro ao buscar usuário");
          console.log(error);
        
        });
    }
  };

  return (
    <ContainerApp>
      <header className="header-top">

        <h1>Busca de usuário no GitHub</h1>
        <p>Pesquise um usuário</p>
          <form>
         
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Buscar repos"
            />
            <button onClick={handleSearch} type="submit">
              Buscar
            </button>
          </form>
          <div id="msg-error" className="msg-error">
          Usuário não encontrado
        </div>
      </header>
     
      <main>
       
        {name && (
          <>
          <div className="user-info">
           <img src={avatar} alt={name} />
            
          </div>
          <div className="content-user-info">
          <p>Nome: {name}</p>
          <p>Bio: {bio}</p>
          <p>Seguidores: {followers}</p>
          </div>
          </>
        )}
        {name === "" && bio === "" && avatar === "" && (
          <div className="user-info">
            <p>Aguardando...</p>
          </div>
        )}
      
      </main>
    </ContainerApp>
  );
}
