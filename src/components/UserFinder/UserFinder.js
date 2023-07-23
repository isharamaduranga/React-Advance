import {Component, Fragment} from 'react';
import Users from "../Users/Users";
import './UserFinder.css'
import UsersContext from "../Store/UsersContext";
import ErrorBoundary from "../ErrorBoundary";

class UserFinder extends Component {

    static contextType = UsersContext;
    constructor() {
        super();
        this.state={
            filteredUsers:[],
            searchTerm: ''
        }
    }


    searchChangeHandler(event) {
        this.setState({
            searchTerm: event.target.value
        })
    }
     componentDidUpdate(prevProps, prevState,snapshot) {
         if (prevState.searchTerm !== this.state.searchTerm){
             this.setState({
                 filteredUsers: this.context.users.filter((user) =>
                     user.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
             })
         }
     }
     componentDidMount() {
         this.setState({
             filteredUsers:this.context.users
         })
     }
    render() {
        return (
                <Fragment>
                    <div className='finder'>
                        <input type='search' onChange={this.searchChangeHandler.bind(this)}/>
                    </div>
                    <ErrorBoundary>
                    <Users users={this.state.filteredUsers}/>
                    </ErrorBoundary>
                </Fragment>


        );
    }
}
/**
 const UserFinder = () => {
    const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        setFilteredUsers(
            DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
        );
    }, [searchTerm]);

    const searchChangeHandler = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <Fragment>
            <div className='finder'>
                <input type='search' onChange={searchChangeHandler} />
            </div>
            <Users users={filteredUsers} />
        </Fragment>
    );
};
 */
export default UserFinder;