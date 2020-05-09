interface AccountStrategist {
  created_at: string;
  email: string;
  first_name: string;
  id: number;
  last_name: string;
  permissions: [];
  phone_number: string | null;
}

interface Link {
  title: string;
  url: string;
}

export interface Project {
  accountstrategist: AccountStrategist;
  brief: string | null;
  checkpoints: [];
  contacts: [];
  created_at: string;
  description: string;
  emoji: string | null;
  id: number;
  links: Link[];
  milestones: [];
  name: string;
  notes: string | null;
  payment_model: string;
  slack_channel: string | null;
  slug: string;
  sow_template_organization: string | null;
  sow_template_specialist: string | null;
  statement_of_purpose: string;
  status: string;
  tags: [];
}
