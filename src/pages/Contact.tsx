import { Layout } from "../components/Layout";
import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";

export const Contact = () => {
  const [state, handleSubmit] = useForm("xvodgbdk");
  const [value, setValue] = useState("");

  if (state.succeeded) {
    return (
      <Layout>
        <div className="w-full max-w-2xl overflow-x-hidden md:max-w-full sm:max-w-full">
          <section className="mt-6xl">
            <div className="mb-6xl">
              <h1 className="text-primary text-2xl md:text-xl font-bold leading-tight m-0 mb-md tracking-tight">
                Thanks for reaching out!
              </h1>
              <p className="text-secondary text-lg leading-normal m-0">
                I'll get back to you as soon as possible.
              </p>
            </div>
            <div className="bg-green-600 text-white px-lg py-lg rounded-lg text-center font-medium mt-lg">
              Your message has been sent successfully!
            </div>
          </section>
        </div>
      </Layout>
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
    <Layout>
      <div className="w-full max-w-2xl overflow-x-hidden md:max-w-full sm:max-w-full">
        <section className="mt-6xl">
          <div className="mb-6xl">
            <h1 className="text-primary text-2xl md:text-xl font-bold leading-tight m-0 mb-md tracking-tight">
              Get in Touch
            </h1>
            <p className="text-secondary text-lg leading-normal m-0">
              Have a project in mind or just want to say hello? I'd love to hear
              from you!
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-surface border border-surface-hover rounded-2xl px-6xl py-6xl backdrop-blur-sm max-w-md w-full overflow-x-hidden md:max-w-full md:w-full md:px-xl md:py-xl sm:max-w-full sm:w-full sm:px-lg sm:py-lg"
          >
            <div className="mb-lg">
              <label
                htmlFor="email"
                className="block text-primary font-medium mb-sm text-sm"
              >
                Email Address
              </label>
              <input
                placeholder="your.email@example.com"
                id="email"
                type="email"
                name="email"
                required
                className="w-full px-lg py-md border border-surface-hover rounded-lg bg-secondary text-primary text-base transition-all duration-normal placeholder:text-tertiary focus:outline-none focus:border-blue-600 focus:shadow-lg focus:bg-slate-800"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>

            <div className="mb-lg">
              <label
                htmlFor="message"
                className="block text-primary font-medium mb-sm text-sm"
              >
                Message
              </label>
              <textarea
                placeholder="Tell me about your project or just say hello..."
                id="message"
                name="message"
                value={value}
                onChange={handleChange}
                required
                className="w-full px-lg py-md border border-surface-hover rounded-lg bg-secondary text-primary text-base font-inherit resize-vertical min-h-30 transition-all duration-normal placeholder:text-tertiary focus:outline-none focus:border-blue-600 focus:shadow-lg focus:bg-slate-800"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            <button
              type="submit"
              disabled={btnDisabled()}
              className={`${
                btnDisabled()
                  ? "bg-surface text-tertiary opacity-50 cursor-not-allowed"
                  : "bg-gradient-to-br from-blue-600 to-blue-500 text-white shadow-md hover:-translate-y-0.5 hover:shadow-lg"
              } px-xl py-md rounded-lg font-semibold text-base transition-all duration-normal`}
            >
              {state.submitting ? "Sending..." : "Send Message"}
            </button>
          </form>

          <div className="mt-6xl px-xl py-xl bg-surface border border-surface-hover rounded-2xl backdrop-blur-sm">
            <h3 className="text-primary text-xl font-semibold m-0 mb-md">
              Other Ways to Connect
            </h3>
            <p className="text-secondary leading-normal m-0">
              You can also reach me through LinkedIn, GitHub, or Medium. I'm
              always open to discussing new opportunities and collaborations.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
};
