import styled from "styled-components";
import { Layout } from "../components/Layout";
import { NavMenu } from "../components/NavMenu";
import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";

const TitleBox = styled.div`
  p {
    margin: 0 0 0 2rem;
  }
  font-family: "Lato", sans-serif;
`;

const ContactBox = styled.div`
  margin: 5rem 0 0 2rem;
  display: flex;
  justify-content: flex-end;
  height: 30%;
`;

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Contact = () => {
  const [state, handleSubmit] = useForm("xvodgbdk");
  const [value, setValue] = useState("");

  if (state.succeeded) {
    return (
      <div>
        <p>Thanks for reaching out!</p>;
      </div>
    );
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const btnDisabled = () => {
    if (state.submitting || !value) {
      return true;
    }
  };
  return (
    <Layout>
      <TitleBox>
        <NavMenu menuItem="Projects" />
        <ContactBox>
          <ContactWrapper>
            <form onSubmit={handleSubmit}>
              <label>Contact form</label>
              <input
                placeholder="Email Address"
                id="email"
                type="email"
                name="email"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <textarea
                placeholder="Your message"
                id="message"
                name="message"
                value={value}
                onChange={(e) => handleChange(e as any)}
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
              <button className="send" type="submit" disabled={btnDisabled()}>
                Send
              </button>
            </form>
          </ContactWrapper>
        </ContactBox>
      </TitleBox>
    </Layout>
  );
};
