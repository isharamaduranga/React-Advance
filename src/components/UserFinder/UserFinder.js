import {Component, Fragment} from 'react';
import Users from "../Users/Users";
import './UserFinder.css'

const DUMMY_USERS = [
    {id: 'u1', name: 'Max'},
    {id: 'u2', name: 'Manuel'},
    {id: 'u3', name: 'Julie'},
];

class UserFinder extends Component {
    constructor() {
        super();

        this.state={
            filteredUsers:DUMMY_USERS,
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
                 filteredUsers: DUMMY_USERS.filter((user) =>
                     user.name.includes(this.state.searchTerm))
             })
         }
     }
    render() {
        return (
            <Fragment>
                <div className='finder'>
                    <input type='search' onChange={this.searchChangeHandler.bind(this)}/>
                </div>
                <Users users={this.state.filteredUsers}/>
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