import './App.css';
import ClassComponent from "./ClassComponent";
import ArrowComponent from "./ArrowComponent";

// 기본 함수형
// function App() {
//     return (
//         <ul>
//             <ClassComponent href="https://naver.com" text="go to naver"/>
//             <ClassComponent href="https://daum.net" text="go to daum"/>
//         </ul>
//     )
// }

// 화살표 방식 함수형
const App = () => {
    return (
        <ul>
            <ClassComponent href="https://naver.com" text="go to naver"/>
            <ArrowComponent href={"https://daum.net"} text={"go to daum!!"}/>
        </ul>
    )
}
export default App
