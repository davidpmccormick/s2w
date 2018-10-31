import track from '~/utils/track';

export default (message) => {
  if (/Almost finished/.test(message)) {
    return `Nearly there… we've sent you an email.` ;
  }

  if (/is already subscribed/.test(message)) {
    return `Looks like you're already subscribed. <a href="${message.split('"')[1]}">Manage your settings</a>.`;
  }

  if (/too many recent/.test(message)) {
    return `Are you a bot? Stop trying to sign up with that email address.`;
  }

  track({
    command: 'send',
    hitType: 'event',
    category: 'error',
    action: 'parseMailchimpMessage',
    label: message
  });

  return `Something's not right. Try again.`;
};
