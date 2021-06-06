import { fetchAPI } from "./index";

export async function getResumeContent() {
  const data = await fetchAPI(
    `
    query {
      resume {
        content
      }
    }
  `
  );
  return data?.resume;
}
