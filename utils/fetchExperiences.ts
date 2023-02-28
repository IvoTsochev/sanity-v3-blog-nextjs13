import { Experience } from '../typings';
import { server } from '../config';

export const fetchExperiences = async () => {
  const res = await fetch(`${server}/api/getExperience`);
  const data = await res.json();
  const experiences: Experience[] = data.experiences;
  return experiences;
};
