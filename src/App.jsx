import "./App.css";
import { TwitterFollowCard } from "./Components/TwitterFollowCard";

const users = [
  { userName: "geroalfaro", name: "Geronimo", isFollowing: false },
  { userName: "catarapaline", name: "Catalina", isFollowing: true },
  { userName: "_larrivey", name: "Julian", isFollowing: true },
];

export function App() {
  return (
    <section className="App">
      {users.map(({ userName, name, isFollowing }) => {
        return (
          <TwitterFollowCard
          key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        );
      })}
    </section>
  );
}
