export type ContactPayload = {
  name: string;
  email: string;
  projectType: string;
  company?: string;
  message: string;
  // honeypot — real users never fill this in
  website?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactPayload(
  data: Partial<ContactPayload>
): Partial<Record<keyof ContactPayload, string>> {
  const errors: Partial<Record<keyof ContactPayload, string>> = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = "Enter your name.";
  }
  if (!data.email || !EMAIL_RE.test(data.email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  if (!data.projectType) {
    errors.projectType = "Select a project type.";
  }
  if (!data.message || data.message.trim().length < 10) {
    errors.message = "Tell me a little more about the project (10+ characters).";
  }

  return errors;
}
