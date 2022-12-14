import styled from "styled-components";
export const NavLayout = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: rgb(77, 149, 151);
  position: sticky;
  &.logged {
    background-color: #648136;
  }
  #pages-menu {
    display: flex;
    gap: 2rem;
    padding: 0.5rem 1rem;
    list-style-type: none;
    .nav-link {
      text-decoration: none;
      color: rgb(29, 54, 54);
      font-size: 1.3rem;
      font-weight: bold;
      &.active {
        color: firebrick;
      }
    }
  }
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  width: fit-content;
`;
const form = Card.withComponent("form");
export const FormLayout = styled(form)`
  background-color: #295055;

  .form-title {
    color: white;
    font-size: 1.2rem;
  }
  input {
    padding: 0.25rem 1rem;
  }
  .buttons {
    display: flex;
    justify-content: space-around;
    button {
      color: #d3cbda;
      padding: 0.5rem 1rem;
      border: none;
      //font-weight: bold;
      font-size: 1.1rem;
      &[type="reset"] {
        background-color: #303021;
      }
      &[type="submit"] {
        background-color: #0a2c07;
      }
    }
  }
`;
export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1rem;
  align-items: flex-start;
  justify-content: center;
  background: ${(props) => props.background || "burlywood"};
`;
export const SpinnerBlock = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  background-image: linear-gradient(green 20%, violet 80%);
  //mix-blend-mode: overlay;
  //background-blend-mode: screen;
  @keyframes spinning {
    to {
      transform: rotate(1turn);
    }
  }
  animation: spinning 3s linear infinite forwards;
  & > #inner {
    border-radius: 50%;
    width: 7rem;
    height: 7rem;
    background-color: navy;
    margin: auto;
    z-index: -2;
  }
`;
export const ProductLayout = styled(Card)`
  background-color: ${(props) => props.adminMode || "lightblue"};
  font-weight: bold;
  width: 20rem;
  .brand {
    font-size: large;
    font-style: italic;
    color: #0f6d7e;
  }
  .image {
    background-image: ${(props) => `url(${props.imageUrl})`};
    height: 15rem;
    width: 100%;
    background-size: cover;
    background-position: center;
    margin: auto;
  }
  select {
    font-size: 1.1rem;
    background-color: #dbc290;
    padding: 0.25rem;
  }
  .buttons {
    display: flex;
    justify-content: space-around;
    button {
      color: #d3cbda;
      padding: 0.5rem 1rem;
      border: none;
      //font-weight: bold;
      font-size: 1.1rem;
      &.edit {
        background-color: #858505;
      }
      &.delete {
        background-color: #c95919;
      }
    }
  }
`;
export const SpecificProductLayout = styled(ProductLayout)`
  width: ${(props) => props.width || "30rem"};
  .image {
    height: 30rem;
  }
  .buttons {
    justify-content: center;
    gap: 2rem;
  }
`;
