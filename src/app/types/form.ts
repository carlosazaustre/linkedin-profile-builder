export type Language = 'es' | 'en';

export type ToneOfVoice = 
  | 'profesional' 
  | 'formal' 
  | 'inspiracional' 
  | 'cercano' 
  | 'creativo'
  | 'professional'
  | 'formal'
  | 'inspirational'
  | 'friendly'
  | 'creative';

export interface ProfileFormData {
  fullName: string;
  currentRole: string;
  yearsOfExperience: number;
  technologiesUsed: string;
  previousExperience: string;
  achievements: string;
  toneOfVoice: ToneOfVoice;
  language: Language;
}
