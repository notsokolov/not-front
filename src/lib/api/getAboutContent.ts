import { fetchAPI } from './index';

export async function getAboutContent() {
  const data = await fetchAPI(
    `
    query {
      about {
        content
      }
    }
  `
  );
  return data?.about;
}
