export interface Role {
  id: number;
  name: string;
  permissions: [];
  slug: string;
}

export interface User {
  checkpoints: [];
  created_at: string;
  email: string;
  first_name: string;
  id: number;
  last_name: string;
  permissions: [];
  phone_number: string | null;
  roles: Role[];
}
