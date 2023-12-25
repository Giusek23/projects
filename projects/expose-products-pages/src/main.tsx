import ReactDOM from 'react-dom/client'
import {App} from "./App.tsx";
import "./index.scss"

const root = ReactDOM.createRoot(document.getElementById('root')!);

// eslint-disable-next-line react-refresh/only-export-components
const FunctionToApply = (name : string) => `@${name}`

root.render(
    <section className={"section-followCards"}>
        <App
            userName = "GiuseppeK"
            name = "Giuseppe Kaligare A."
            imgSource = "https://media.licdn.com/dms/image/C4D03AQFS9LWbfK2G7Q/profile-displayphoto-shrink_800_800/0/1623903945653?e=2147483647&v=beta&t=sluBUHiDCaqY8CQolTfncHe5TVHw4ETKc1hlDUut-Uk"
            isFollowing = {true}
            formatUserName = {FunctionToApply}
        />
        <App
            userName = "GiuseppeK"
            name = "Giuseppe Kaligare A."
            imgSource = "https://media.licdn.com/dms/image/C4D03AQFS9LWbfK2G7Q/profile-displayphoto-shrink_800_800/0/1623903945653?e=2147483647&v=beta&t=sluBUHiDCaqY8CQolTfncHe5TVHw4ETKc1hlDUut-Uk"
            isFollowing = {true}
            formatUserName = {FunctionToApply}
        />
    </section>
)
