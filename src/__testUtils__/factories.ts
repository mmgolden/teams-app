export const userFactory = (values?: { [key: string]: string }) => ({
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
