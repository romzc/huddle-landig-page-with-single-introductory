import { Content } from "./Content";
import { Portal } from "./Portal";

const Main = () => {
    return (
        <div className='main-container'>
            <Portal />
            <Content />
        </div>
    )
}

export { Main }