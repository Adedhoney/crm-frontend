import { useAuth } from "../providers/AuthProvider";
export const bytesToKilobytes = (bytes: number): number => {
  return Math.round(bytes / 1024) + 1;
};

export const fixesIssuesWithCoverLetter = (coverLetter: string): string => {
  const jsonRegExp = /\{[^}]+\}/;
  const stringWithoutJSON = coverLetter.replace(jsonRegExp, "");
  // STRINGS START FROM Dear
  const startIndex = stringWithoutJSON.indexOf("Dear");
  const stringWithoutPrefix = stringWithoutJSON.substring(startIndex);

  const tripleDoubleQuotesRegExp = /"""\s*[^"]*"""/;
  // Replace the matched text with an empty string
  const stringWithoutTripleDoubleQuotes = stringWithoutPrefix.replace(
    tripleDoubleQuotesRegExp,
    ""
  );
  return stringWithoutTripleDoubleQuotes;
};
export const ReplaceVariables = (object: any, originalString: string) => {
  const { userDetails } = useAuth();
  const name = object?.manualInfo?.firstName;
  const notableAchievement = object?.manualInfo?.notableAchievement;
  const role = object?.jobTitle;
  const employer = object?.employer;
  const replacedString = originalString
    ? originalString
        .replace(/\[Your Name\]/g, name ? name : userDetails?.user?.userName)
        .replace(/\[Company Name\]/g, employer)
        .replace(/\[Your Resume\]/g, "")
        .replace(/\[Enclosure: Resume\]/g, "")
        .replace(/\Enclosure: Resume/g, "")
        .replace(/\"""/g, "")
        .replace(/\[Role\]/g, role)
        .replace(/\[Role I am applying for\]/g, role)
        .replace(/\[Employer's Name\]/g, "Hiring Manager")
        .replace(/\[Employer Name\]/g, "Hiring Manager")
    : "";
  return replacedString;
};

export function isDateInFutureOrToday(dateString: string) {
  const date = new Date(dateString);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  date.setHours(0, 0, 0, 0);
  return date >= today;
}
