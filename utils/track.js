export default ({ command, hitType, category, action, label, value, fields }) => {
  if (process.env.NODE_ENV === 'development') return;

  ga(command, hitType, category, action, label, value, fields);
}

