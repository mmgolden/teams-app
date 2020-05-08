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
  level: number;
}

interface Country {
  id: number;
  name: string;
  slug: string;
}

interface Region {
  id: number;
  name: string;
  slug: string;
  country: Country;
}

interface City {
  id: number;
  name: string;
  slug: string;
  region: Region;
}

interface Usage {
  specialists: number;
  tasks: number;
}

interface Deliverable {
  base_amount: number;
  base_points: number;
  base_unit_plural: string;
  base_unit_singular: string;
  brief: string;
  description: string;
  id: number;
  name: string;
  status: string;
  usage: Usage;
}

interface Cause {
  id: number;
  description: string | null;
  name: string;
  reason: string | null;
}

export interface Specialist {
  assets: [];
  balance: number;
  causes: Cause[];
  checkpoints: Checkpoint[];
  city: City;
  deliverables: Deliverable[];
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
