import axios from "axios";
import React from "react";
import { ContainerApp } from "./styled";



export default function BannerRepo() {
  const [search, setSearch] = React.useState("");
  const [name, setName] = React.useState("");
  const [bio, setBio] = React.useState("");
  const [avatar, setAvatar] = React.useState("");
  const [followers, setFollowers] = React.useState(0);

 

  function clear() {
    setSearch("");
    setName("");
    setBio("");
  }



  function validateFields() {
    if (search === "") {
      document.getElementById("msg-error").style.display = "block";
      document.getElementById("msg-error").innerHTML = "Preencha o campo de busca";
      return false;
    } else if (search.length < 3) {
      document.getElementById("msg-error").style.display = "block"; 
      document.getElementById("msg-error").innerHTML = "Preencha o campo de busca com pelo menos 3 caracteres";
    } else if (search.length > 3) {
      document.getElementById("msg-error").style.display = "none";
      return true;
    } else {
      clear({
        search,
      })
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
          document.getElementById("msg-error").style.display = "block";
          document.getElementById("msg-error").innerHTML = "Usuário não encontrado";
          clear(
            setSearch(""),
          )
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
              onChange={(e) => setSearch(e.target.value)  }
              type="text"
              placeholder="Buscar repos"
              name="search"
              value={search}
            />
            <button 
            onClick={handleSearch} 
            type="submit"
            >
              Buscar
            </button>
          </form>
          <div id="msg-error" className="msg-error">
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
