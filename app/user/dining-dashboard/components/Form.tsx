import Input from "@/app/components/Input";

const Form = () => {
  return (
    <div>
      <h4 className="text-3xl font-medium mb-6">About Me</h4>

      <form className="space-y-8">
        <Input
          type="text"
          placeholder="first name"
          id="first_name"
          label="First name"
        />
        <Input
          type="text"
          placeholder="last name"
          id="last_name"
          label="Last name"
        />
        <Input type="text" placeholder="email" id="email" label="Email" />
        <Input
          type="text"
          placeholder="Phone Number"
          id="phone"
          label="Phone Number"
        />
        <Input type="text" placeholder="City" id="city" label="City" />

        <button className="w-full text-center block bg-teal-500 py-3.5 text-teal-50 rounded-md text-lg active:scale-95 transition-all duration-200">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Form;
