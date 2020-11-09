import slugify from "slugify";
import getFirebaseAnalytics from "./firebase";

export const getSlug: (value: string) => string = (value) => {
  return slugify(value, { lower: true, remove: /[*+~.()'"!?:@]/g });
};

export const sendGtagEvent: (
  category: string,
  action: string,
  label?: string,
  value?: number,
) => void = (category, action, label, value) => {
  const analytics = getFirebaseAnalytics();

  analytics?.logEvent(action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
