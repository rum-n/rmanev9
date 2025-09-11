import styled from "styled-components";
import { WindowFrame } from "../components/WindowFrame";
import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";

const ContactContainer = styled.div`
  width: 100%;
  max-width: 800px;
`;

const ContactSection = styled.section`
  margin-top: var(--space-2xl);
`;

const ContactHeader = styled.div`
  margin-bottom: var(--space-2xl);
`;

const ContactTitle = styled.h1`
  color: var(--text-primary);
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: 700;
  line-height: 1.2;
  margin: 0 0 var(--space-md) 0;
  letter-spacing: -0.02em;
`;

const ContactDescription = styled.p`
  color: var(--text-secondary);
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 0;
`;

const ContactForm = styled.form`
  background: var(--bg-surface);
  border: 1px solid var(--bg-surface-hover);
  border-radius: var(--radius-xl);
  padding: var(--space-2xl);
  backdrop-filter: blur(10px);
  max-width: 500px;
`;

const FormGroup = styled.div`
  margin-bottom: var(--space-lg);
`;

const FormLabel = styled.label`
  display: block;
  color: var(--text-primary);
  font-weight: 500;
  margin-bottom: var(--space-sm);
  font-size: 0.9rem;
`;

const FormInput = styled.input`
  width: 100%;
  padding: var(--space-md) var(--space-lg);
  border: 1px solid var(--bg-surface-hover);
  border-radius: var(--radius-lg);
  background: var(--bg-secondary);
  color: var(--text-primary);
  font-size: 1rem;
  transition: all var(--transition-normal);

  &::placeholder {
    color: var(--text-tertiary);
  }

  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
    background: var(--bg-tertiary);
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: var(--space-md) var(--space-lg);
  border: 1px solid var(--bg-surface-hover);
  border-radius: var(--radius-lg);
  background: var(--bg-secondary);
  color: var(--text-primary);
  font-size: 1rem;
  font-family: inherit;
  resize: vertical;
  min-height: 120px;
  transition: all var(--transition-normal);

  &::placeholder {
    color: var(--text-tertiary);
  }

  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
    background: var(--bg-tertiary);
  }
`;

const SubmitButton = styled.button<{ disabled: boolean }>`
  background: ${(props) =>
    props.disabled
      ? "var(--bg-surface)"
      : "linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)"};
  color: ${(props) => (props.disabled ? "var(--text-tertiary)" : "white")};
  border: none;
  padding: var(--space-md) var(--space-xl);
  border-radius: var(--radius-lg);
  font-weight: 600;
  font-size: 1rem;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: all var(--transition-normal);
  box-shadow: ${(props) => (props.disabled ? "none" : "var(--shadow-md)")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }
`;

const SuccessMessage = styled.div`
  background: var(--success);
  color: white;
  padding: var(--space-lg);
  border-radius: var(--radius-lg);
  text-align: center;
  font-weight: 500;
  margin-top: var(--space-lg);
`;

const ContactInfo = styled.div`
  margin-top: var(--space-2xl);
  padding: var(--space-xl);
  background: var(--bg-surface);
  border: 1px solid var(--bg-surface-hover);
  border-radius: var(--radius-xl);
  backdrop-filter: blur(10px);
`;

const ContactInfoTitle = styled.h3`
  color: var(--text-primary);
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 var(--space-md) 0;
`;

const ContactInfoText = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  margin: 0;
`;

const mailIcon = `data:image/svg+xml;base64,${btoa(`
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
  <rect x="1" y="3" width="14" height="10" fill="white" stroke="#808080" stroke-width="1"/>
  <polygon points="1,3 8,8 15,3" fill="none" stroke="#808080" stroke-width="1"/>
  <line x1="1" y1="13" x2="6" y2="8" stroke="#808080" stroke-width="1"/>
  <line x1="15" y1="13" x2="10" y2="8" stroke="#808080" stroke-width="1"/>
</svg>
`)}`;

export const Contact = () => {
  const [state, handleSubmit] = useForm("xvodgbdk");
  const [value, setValue] = useState("");

  if (state.succeeded) {
    return (
      <WindowFrame title="Mail - Message Sent" icon={mailIcon}>
        <ContactContainer>
          <ContactSection>
            <ContactHeader>
              <ContactTitle>Thanks for reaching out!</ContactTitle>
              <ContactDescription>
                I'll get back to you as soon as possible.
              </ContactDescription>
            </ContactHeader>
            <SuccessMessage>
              Your message has been sent successfully!
            </SuccessMessage>
          </ContactSection>
        </ContactContainer>
      </WindowFrame>
    );
  }

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  const btnDisabled = () => {
    if (state.submitting || !value) {
      return true;
    }
    return false;
  };

  return (
    <WindowFrame title="Mail - New Message" icon={mailIcon}>
      <ContactContainer>
        <ContactSection>
          <ContactHeader>
            <ContactTitle>Get in Touch</ContactTitle>
            <ContactDescription>
              Have a project in mind or just want to say hello? I'd love to hear
              from you!
            </ContactDescription>
          </ContactHeader>

          <ContactForm onSubmit={handleSubmit}>
            <FormGroup>
              <FormLabel htmlFor="email">Email Address</FormLabel>
              <FormInput
                placeholder="your.email@example.com"
                id="email"
                type="email"
                name="email"
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </FormGroup>

            <FormGroup>
              <FormLabel htmlFor="message">Message</FormLabel>
              <FormTextarea
                placeholder="Tell me about your project or just say hello..."
                id="message"
                name="message"
                value={value}
                onChange={handleChange}
                required
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </FormGroup>

            <SubmitButton type="submit" disabled={btnDisabled()}>
              {state.submitting ? "Sending..." : "Send Message"}
            </SubmitButton>
          </ContactForm>

          <ContactInfo>
            <ContactInfoTitle>Other Ways to Connect</ContactInfoTitle>
            <ContactInfoText>
              You can also reach me through LinkedIn, GitHub, or Medium. I'm
              always open to discussing new opportunities and collaborations.
            </ContactInfoText>
          </ContactInfo>
        </ContactSection>
      </ContactContainer>
    </WindowFrame>
  );
};
