export default {
  parse(message) {
    if (/Almost finished/.test(message)) {
      return `Nearly there… we've sent you an email.` ;
    }

    if (/is already subscribed/.test(message)) {
      return `Looks like you're already subscribed. <a href="${message.split('"')[1]}">Manage your settings</a>.`;
    }

    if (/too many recent/.test(message)) {
      return `Are you a bot? Stop trying to sign up with that email address.`
    }

    ga('send', 'event', 'error', 'parseMailchimpMessage', message);

    return `Something's not right. Try again.`;
  }
}
