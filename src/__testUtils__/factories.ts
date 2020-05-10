import { User } from '../typings/user';
import { Specialist } from '../typings/specialist';
import { Project, Organization } from '../typings/project';

/**
 * Generates a user
 * @param {object} values - Key value pairs that override the default values
 * @returns {object}
 */
export const userFactory = (values?: { [key: string]: string }): User => ({
  id: 1,
  created_at: '2020-05-04 17:09:43',
  email: 'michael@dundermifflin.com',
  first_name: 'Michael',
  last_name: 'Scott',
  permissions: [],
  checkpoints: [],
  phone_number: null,
  roles: [],
  ...values,
});

/**
 * Generates an organization
 * @param {object} values - Key value pairs that override the default values
 * @returns {object}
 */
export const organizationFactory = (values?: {
  [key: string]: string;
}): Organization => ({
  about: null,
  description: null,
  id: 1,
  name: 'Dunder Mifflin',
  notes: null,
  overview: null,
  slug: 'dunder-mifflin',
  tldr: null,
  website_url: null,
  ...values,
});

/**
 * Generates a project
 * @param {object} values - Key value pairs that override the default values
 * @returns {object}
 */
export const projectFactory = (values?: {
  [key: string]: string;
}): Project => ({
  accountstrategist: userFactory(),
  brief: null,
  checkpoints: [],
  contacts: [],
  created_at: '2020-05-04 17:09:43',
  currentscope: null,
  description: 'Ratione a velit quod voluptatum.',
  emoji: null,
  id: 1,
  links: [],
  milestones: [],
  name: 'Schrute Farms',
  notes: null,
  organization: organizationFactory(),
  payment_model: 'full',
  scopes: [],
  slack_channel: null,
  slug: 'schrute-farms',
  sow_template_organization: null,
  sow_template_specialist: null,
  specialists: [],
  statement_of_purpose: 'Possimus est ea cupiditate facilis.',
  status: 'sales',
  tags: [],
  teamlead: userFactory(),
  ...values,
});

/**
 * Generates a specialist
 * @param {object} values - Key value pairs that override the default values
 * @returns {object}
 */
export const specialistFactory = (values?: {
  [key: string]: string;
}): Specialist => ({
  assets: [],
  balance: 0,
  causes: [],
  checkpoints: [],
  deliverables: [],
  description: '',
  experience: [],
  has_transactions: 0,
  id: 1,
  languages: [],
  links: [],
  next_payment_at: null,
  notes: null,
  payable: false,
  paymentrails_widget_url: '',
  profile_image: '',
  projects: [{ ...projectFactory() }],
  raw: '',
  slug: null,
  title: '',
  tldr: null,
  user: userFactory(),
  city: null,
  tags: [],
  ...values,
});
