import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="p-5 border border-blue-700 rounded-xl">
      <h1>Home Page</h1>
      <Button className="w-10 h-10 px-10 py-5 bg-blue-700 text-white">
        Iniciar
      </Button>
    </div>
  );
};

export default Home;
