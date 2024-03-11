import './App.css';
import EventListener from './pages/EventListener';
import OnClick from './pages/OnClick';
import ReactOnClick from './pages/ReactOnClick';
import DispatchEvent from './pages/DispatchEvent';
import EventBubbling from './pages/EventBubbling';
import StopPropagation from './pages/StopPropagation';
import VariousInputs from './pages/VariousInputs';
import OnChange from './pages/OnChange';
import FileInput from './pages/FileInput';
import DragDrop from './pages/DragDrop';
import FileDrop from './pages/FileDrop';


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
// const App = () => {
//     return (
//         <ul>
//             <ClassComponent href="https://naver.com" text="go to naver"/>
//             <ArrowComponent href={"https://daum.net"} text={"go to daum!!"}/>
//         </ul>
//     )
// }
export default function App() {
    return (
        <div>
            <FileDrop/>
            <DragDrop/>
            <FileInput/>
            <OnChange/>
            <VariousInputs/>
            <StopPropagation/>
            <EventBubbling/>
            <DispatchEvent/>
            <ReactOnClick/>
            <OnClick/>
            <EventListener/>
        </div>
    )
}
