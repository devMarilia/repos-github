import styled from "styled-components";

export const ContainerApp = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  width: 100%;
  margin: 0 auto;
  .msg-error {
    display: none;
    color: red;
    font-size: 1.2rem;
  }
  .msg-error.show {
    display: block;
  }

  main {
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: #f5f5f5;
    padding: 1rem;
    border-radius: 0.5rem;
    width: 90%;
    max-width: 960px;
    color: #21262d;
  }
  .user-info {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #f5f5f5;
    padding: 1rem;
  }
  .user-info img {
    width: 250px;
    height: 250px;
    border-radius: 50%;
  }
  .content-user-info {
    margin-left: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }
  .user-info p {
    margin-left: 1rem;
  }

  .form-container h1 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  .form-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }
   form {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
  }
   form input {
    margin-bottom: 1rem;
    width: 80%;
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: 1px solid #c9d1d9;
  }
 form button {
   
    height: 35px;
    border-radius: 0.5rem;
    border: 1px solid #c9d1d9;
    background-color: #21262d;
    color: white;
    font-size: 1.2rem;
    cursor: pointer;
  }
  form button:hover {
    background-color: #c9d1d9;
  }
 form button:disabled {
    background-color: #c9d1d9;
    color: #21262d;
    cursor: not-allowed;
  }
 form button:disabled:hover {
    background-color: #21262d;
  }
  @media (max-width: 768px) {
    header {
        align-items: center;
        display: flex;
        flex-direction: column;
    }
    main {
        width: 75%;
        display: flex ;
        flex-direction: column;
    }
    form {
        width: 85%;
    }
    form button {
        margin-left: 0.5rem;
    }
  }
`;
