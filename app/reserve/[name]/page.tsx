import Header from "./components/Header";
import Form from "./components/Form";

const page = () => {
  return (
    <div className="border-0 border-t border-solid border-gray-300 h-screen">
      <div className="py-9 m-auto w-3/5">
        <Header />
        <Form />
      </div>
    </div>
  );
};

export default page;
