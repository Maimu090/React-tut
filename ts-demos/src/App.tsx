import Button from "./components.tsx/Button";

const App = () => {
  return (
    <div>
      <Button
        label="Click me"
        onClick={() => console.log("Clicked!")}
        disabled={false}
      />
    </div>
  );
};

export default App;
