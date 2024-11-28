import { useState } from "react";

interface ContactFormState {
  name: string;
  email: string;
  
}

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormState>({
    name: "",
    email: "",
    
  });

const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();
    console.log("Form submitted:", formData);
} 
 return (
    <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />


          <label htmlFor="email">Email:</label>
          <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          />

        </div>

        <button type="submit">Submit</button>

      </form>
    
  );
};

export default ContactForm;
