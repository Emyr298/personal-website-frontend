import {
  EducationHistory,
  ExperienceHistory,
  ProjectHistory,
  SkillCategory,
} from '../../interface';

export interface DetailBoxProps {
  description: string;
  educationHistoryList: EducationHistory[];
  experienceList: ExperienceHistory[];
  projectList: ProjectHistory[];
  skillCategories: SkillCategory[];
}
