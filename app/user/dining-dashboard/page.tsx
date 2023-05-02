import Form from "./components/Form";
import Menu from "./components/Menu";
import Title from "./components/Title";

const page = () => {
  return (
    <div>
      <div className="border-primary">
        <Title />
      </div>
      <div className="bg-gray-200">
        <div className="m-auto w-2/3 py-8 px-16 flex gap-5">
          <div className="p-2 w-[25%]">
            <Menu />
          </div>
          <div className="bg-white rounded p-6 w-[70%]">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
