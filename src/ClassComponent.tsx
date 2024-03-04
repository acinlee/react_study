import {Component} from "react";

// ClassComponent의 속성 구현
type ClassComponentProps = {
    href: string
    text: string
}

// <ClassComponentProps>를 통해 속성 부여 - 속성 값은 필수가 아님
// react 에서 속성은 state이며 state가 변경되면 재렌더링
export default class ClassComponent extends Component<ClassComponentProps> {
    render() {
        const {href, text} = this.props
        return (
            <ul>
                <li>
                    <a href={href}>
                        <p>{text}</p>
                    </a>
                </li>
            </ul>
        )
    }
}