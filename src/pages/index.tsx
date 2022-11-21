import { useUserStore } from "../stores/user-store";
import { z } from "zod";

const user_validator = z.object({
  name: z.string(),
});

function App() {
  const user_store = useUserStore();
  const user = user_store.getUser();

  const { setUser } = user_store;

  function submit(event: React.FormEvent<HTMLFormElement>) {
    const Form = new FormData(event.currentTarget);
    const username = Form.get("username");

    const submittable = { name: username };

    const validated = user_validator.parse(submittable);

    setUser(validated);
  }

  if (user.name !== "") {
    return (
      <div>
        <h1>Hello {user_store.user.name}</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>Hello there, I see that you're new in town!</h1>
      <h2>May I please have your name?</h2>
      <form onSubmit={submit}>
        <input type="text" name="username" placeholder="username" />
        <button>Set your name!</button>
      </form>
    </div>
  );
}

export default App;
