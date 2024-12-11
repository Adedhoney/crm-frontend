import ReactGA from "react-ga4";
export const ActivityLabels = {
  COVER_LETTER_CREATED: "cover letter created",
  RESUME_UPLOADED: "resume uploaded",
  FEEDBACK_GIVEN: "feedback given",
  EDIT_COVER_LETTER: "edit cover letter",
  COPY_TO_CLIPBOARD: "Copy cover letter",
  RETRY_COVER_LETTER: "RETRY cover letter",
  SIGN_UP: "Signup Successful",
  LOGIN: "login Successful",
  PAYMENT_SUCCESS: "payment success",
};
export const trackButtonClick = (label: string) => {
  ReactGA.event({
    category: "Button",
    action: "Click",
    label: label,
  });
};
export const trackPageView = (title: string, location: string) => {
  ReactGA.send({
    hitType: "pageview",
    page: location,
    title: title,
  });
};
