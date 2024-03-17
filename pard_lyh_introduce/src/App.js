import "./App.css";
import walk from "./Assets/walk1.gif";
import stand from "./Assets/stand.png";
import pokemon from "./Assets/pokemon.gif";
import cat from "./Assets/cat.gif";
import coffee_milk from "./Assets/coffee_milk.gif";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="container-box">
          <img src={walk} className="walk_image"></img>
          <img src={stand} className="stand_img"></img>
          <div className="talk_box">
            <span className="talk1">안녕하세요! </span>
            <span className="talk2">저는 21학번 언론정보/ICT 융합 이유현입니다! </span>
            <span className="talk3">좋아하는 것은 바닐라 라떼, 포켓몬 게임, 고양이입니다. </span>
            <span className="talk4">이번 학기 목표는 배운 내용 꾸준히 복습하기입니다.</span>
            <span className="talk5">다들 잘 부탁드려요!</span>
          </div>
          <img src={pokemon} className="pokemon_img"></img>
          <img src={cat} className="cat_img"></img>
          <img src={coffee_milk} className="coffee_milk_img"></img>
        </div>
      </div>
      <div className="App_orangeline1"></div>
      <div className="App_orangeline2"></div>
    </div>
  );
}
export default App;
