export const required = value => {
  switch (typeof value) {
    case 'string':
      return !!value.trim();
    case 'number':
      return true;
    default:
      return !!value;
  }
};

export const email = value =>
  typeof value === 'string' &&
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    value.trim()
  );
