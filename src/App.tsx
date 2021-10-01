import "./styles.css";
import { UserCard } from "./components/UserCard";
import { useAllUsers } from "./hooks/useAllUsers";

export default function App() {
  const { getUsers, userPrifiles, loading, error } = useAllUsers();
  const onClickFetchUser = () => getUsers();

  return (
    <div className="App">
      <button onClick={onClickFetchUser}>Get Data</button>
      <br />
      {error ? (
        <p style={{ color: "red" }}>fail to get data</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {userPrifiles.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </>
      )}
    </div>
  );
}
