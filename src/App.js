import UserFinder from './components/UserFinder';
import UsersContext from './store/users-context';

const DUMMY_USERS = [
  { id: 'u1', name: 'Ronit' },
  { id: 'u2', name: 'Raj' },
  { id: 'u3', name: 'Meet' },
];

function App() {
  const usersContext = {
    users: DUMMY_USERS
  }

  return (
    <UsersContext.Provider value={usersContext}>
      <UserFinder />
    </UsersContext.Provider>
  );
}

export default App;

// import UserFinder from './components/UserFinder';

// function App() {
//   return (
//     <div>
//       <UserFinder />
//     </div>
//   );
// }

// export default App;
