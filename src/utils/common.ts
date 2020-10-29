import numeral from "numeral";
import slugify from "slugify";

export const formatStatistic: (
  stat: number,
  label?: string,
  plural?: boolean,
) => string = (stat, label, plural) => {
  let text = stat < 1000 ? stat.toString() : numeral(stat).format("0.00a");

  if (text.includes(".00")) {
    text = text.replace(".00", "");
  }

  if (!label) return text;
  if (plural) return `${text} ${label}s`;
  text = `${text} ${stat > 1 ? `${label}s` : label}`;
  return text;
};

export const getSlug: (value: string) => string = (value) => {
  return slugify(value, { lower: true, remove: /[*+~.()'"!?:@]/g });
};
