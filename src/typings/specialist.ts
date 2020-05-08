import { User } from './user';

interface Checkpoint {
  created_at: string;
  slug: string;
}

interface Project {
  brief: string | null;
  created_at: string;
  description: string;
  emoji: string | null;
  id: number;
  name: string;
  notes: string | null;
  payment_model: string;
  slack_channel: string | null;
  slug: string;
  sow_template_organization: string | null;
  sow_template_specialist: string | null;
  statement_of_purpose: string;
  status: string;
}

interface Link {
  title: string;
  url: string;
}

interface Experience {
  company?: string;
  description?: string;
  title: string;
  links?: Link[];
}

interface Language {
  code: string;
}

export interface Specialist {
  assets: [];
  balance: number;
  causes: [];
  checkpoints: Checkpoint[];
  deliverables: [];
  description: string;
  experience: Experience[];
  has_transactions: number;
  id: number;
  languages: Language[];
  links: Link[];
  next_payment_at: string | null;
  notes: string | null;
  payable: boolean;
  paymentrails_widget_url: string;
  profile_image: string;
  projects: Project[];
  raw: string;
  slug: string | null;
  tags: [];
  title: string;
  tldr: string | null;
  user: User;
}
