import Users from "./component/contextComponent/users";
import {Myprovider} from "./context/index";
const App = () => {
    return (
        <Myprovider>
            <Users />
        </Myprovider>
    );
};

export default App;
