import { Specialist } from './specialist';

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

interface SummaryTask {
  id: number;
  name: string;
  brief: string;
  deliverable_description: string;
  base_points: number;
  base_amount: number;
  base_unit: string | null;
  units: string;
  quantity: number;
  assigned_specialist_id: number | null;
  total_points: number;
  grandtotal_points: number;
  total_points_released: number;
  total_points_started: number;
  total_points_completed: number;
  total_points_accepted: number;
  accepted_at: string | null;
  roletags: [];
}

interface Role {}

interface Specialists {}

interface SummaryCategory {
  id: number;
  name: string;
  description: string;
  total_points: number;
  total_points_released: number;
  total_points_completed: number;
  total_points_accepted: number;
  tasks: SummaryTask[];
  roles: Role;
  specialists: Specialists;
}

interface Summary {
  summarized_at: string;
  point_value: string;
  specialist_point_value: string;
  management_amount: number;
  management_price: number;
  management_points: number;
  total_points: number;
  subtotal_points: number;
  discount_points: number | null;
  discount_name: string;
  grandtotal_points: number;
  grandtotal_price: number;
  total_points_released: number;
  total_points_completed: number;
  total_points_accepted: number;
  grandtotal_points_remaining: number;
  points_deficit: number;
  version_reason: string | null;
  status: string;
  signature_status: string;
  progress: number;
  categories: SummaryCategory[];
  new_revenue: number;
  subtotal_price: number;
  subtotal_specialist_price: number;
  management_specialist_price: number;
  grandtotal_specialist_price: number;
}

interface Usage {
  specialists: number;
  tasks: number;
}

interface Deliverable {
  id: number;
  name: string;
  description: string;
  brief: string;
  base_amount: number;
  base_unit_singular: string;
  base_unit_plural: string;
  base_points: number;
  status: string;
  usage: Usage;
}

interface CurrentScopeTask {
  id: number;
  brief: string;
  total_points: number;
  amount: number;
  units: string;
  base_points: number;
  base_amount: number;
  base_unit_singular: string;
  base_unit_plural: string;
  deliverable_description: string;
  quantity: number;
  assigned_specialist_id: number | null;
  accepted_at: string | null;
  sort: number;
  base_points_override: number | null;
  base_points_override_reason: string | null;
  total_points_override: number | null;
  total_points_override_reason: string | null;
  total_points_released: number;
  deliverable: Deliverable;
  tags: [];
  roletags: [];
}

interface CurrentScopeCategory {
  id: number;
  name: string;
  description: string;
  sort: number;
  tasks: CurrentScopeTask[];
}

interface CurrentScope {
  id: number;
  name: string;
  description: string;
  smartsheet_sheet_id: number | null;
  smartsheet_sheet_url: string | null;
  status: string;
  signature_status: string;
  version_reason: string | null;
  summary: Summary;
  project_id: number;
  organization_id: number | null;
  current: number;
  revision_rounds: number | null;
  notes: string | null;
  expire_at: string;
  searchable: number;
  point_value: number;
  point_value_override: string | null;
  point_value_override_reason: string | null;
  specialist_point_value: string;
  specialist_point_value_override: string | null;
  specialist_point_value_override_reason: string | null;
  discount_points: number | null;
  discount_name: string;
  management_amount: number;
  management_amount_override: string | null;
  management_amount_override_reason: string | null;
  management_points_override: number | null;
  management_points_override_reason: string | null;
  categories: CurrentScopeCategory[];
  checkpoints: [];
}

interface Organization {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  overview: string | null;
  about: string | null;
  website_url: string | null;
  notes: string | null;
  tldr: string | null;
}

interface ScopeSummary {
  summarized_at: string;
  point_value: string;
  specialist_point_value: string;
  management_amount: number;
  management_price: number;
  management_points: number;
  total_points: number;
  subtotal_points: number;
  discount_points: number | null;
  discount_name: string;
  grandtotal_points: number;
  grandtotal_price: number;
  total_points_released: number;
  total_points_completed: number;
  total_points_accepted: number;
  grandtotal_points_remaining: number;
  points_deficit: number;
  version_reason: string | null;
  status: string;
  signature_status: string;
  progress: number;
  categories: SummaryCategory[];
  new_revenue: number;
  subtotal_price: number;
  subtotal_specialist_price: number;
  management_specialist_price: number;
  grandtotal_specialist_price: number;
}

interface Scope {
  id: number;
  name: string;
  description: string;
  smartsheet_sheet_id: number | null;
  smartsheet_sheet_url: string | null;
  status: string;
  signature_status: string;
  version_reason: string | null;
  summary: ScopeSummary;
}

interface TeamLead {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string | null;
  created_at: string;
  permissions: [];
}

export interface Project {
  accountstrategist: AccountStrategist;
  brief: string | null;
  checkpoints: [];
  contacts: [];
  created_at: string;
  currentscope: CurrentScope;
  description: string;
  emoji: string | null;
  id: number;
  links: Link[];
  milestones: [];
  name: string;
  notes: string | null;
  organization: Organization;
  payment_model: string;
  scopes: Scope[];
  slack_channel: string | null;
  slug: string;
  sow_template_organization: string | null;
  sow_template_specialist: string | null;
  specialists: Specialist[];
  statement_of_purpose: string;
  status: string;
  tags: [];
  teamlead: TeamLead;
}
