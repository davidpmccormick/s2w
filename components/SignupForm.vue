<template>
  <transition name="slide-up">
    <form
      v-if="isAnimationFinished"
      @submit.prevent="trySubmit"
      action="https://somewheretowear.us19.list-manage.com/subscribe/post?u=641ee46704f17c07dc0e3c08e&amp;id=4e403bb31e"
      method="post"
      class="signup-form"
      target="_blank"
      novalidate>
      <div class="signup-form__input-wrap">
        <label
          class="signup-form__label"
          for="email"><span class="visually-hidden">email </span>sign up</label>
        <div class="signup-form__box">
          <input
            @input="handleInput"
            id="email"
            ref="email"
            autofocus
            autocomplete="off"
            type="email"
            class="signup-form__input"
            placeholder="you@example.com"
            name="EMAIL"
            v-model="email">
          <div
            class="visually-hidden"
            aria-hidden="true">
            <input
              type="text"
              name="b_c31036b4cb3cb6fb30fac0130_3ad51ba9d5"
              tabindex="-1" />
          </div>
          <button :disabled="isPosting" class="signup-form__button">
            <span v-if="isPosting">...</span>
            <span v-else>go</span>
          </button>
        </div>
      </div>
      <transition name="slide-up">
        <p
          v-if="message !== ''"
          class="signup-form__message"
          v-html="message" />
      </transition>
    </form>
  </transition>
</template>

<script>
import {mapState} from 'vuex';
import jsonp from 'jsonp';

function parseMailchimpMessage(message) {
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

export default {
  data() {
    return {
      email: '',
      valid: false,
      result: '',
      message: '',
      isPosting: false
    };
  },
  methods: {
    handleInput(event) {
      this.message = '';
      this.setValid(event);
    },
    setValid(event) {
      this.valid = this.email.trim().length !== 0 && event.target.validity.valid;
    },
    async trySubmit(event) {
      const apiUrl =
        'https://somewheretowear.us19.list-manage.com/subscribe/post-json?u=641ee46704f17c07dc0e3c08e&amp;id=4e403bb31e';

      if (this.valid) {
        this.isPosting = true;
        jsonp(`${apiUrl}&EMAIL=${this.email}`, {param: 'c'}, (err, data) => {
          if (err) {
            this.message = 'Something went wrong. Try again';
            console.error(err.message);
          } else {
            this.result = data.result;
            this.message = parseMailchimpMessage(data.msg);
            this.email = '';
            this.valid = false;
          }

          this.isPosting = false;
        });
      } else {
        this.message = `That doesn't look like a valid email address. Try again.`;
        this.email = '';
      }

      this.$refs.email.focus();
    }
  },
  computed: {
    ...mapState(['isAnimationFinished'])
  }
};
</script>

<style lang="scss">
.signup-form__box {
  padding: 0.5em 2.5em 0.5em 0.5em;
  position: relative;
  border: 2px solid #333;
  border-radius: 6px;
  display: flex;
  align-items: center;
  transition: border-color 2000ms ease;
  overflow: hidden;

  @media (min-width: 400px) {
    padding: 1em;
  }
}

.signup-form__input-wrap {
  height: 100%;
  width: 100%;
}

.signup-form__label {
  left: 0;
  font-size: 0.5em;
  font-weight: bold;
  text-transform: uppercase;

  @media (min-width: 600px) {
    font-size: 0.6em;
  }
}

.signup-form__input,
.signup-form__button {
  font-size: 4vw;
  width: 3.3em;

  @media (min-width: 800px) {
    font-size: 30px;
  }
}

.signup-form__input {
  height: 100%;
  width: 100%;
  appearance: none;
  font-family: 'Avenir';
  padding: 0;
  border: 0;
  color: #333;
  background-clip: padding-box;

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px white inset;
  }

  &:focus {
    outline: 0;
  }
}

.signup-form__button {
  position: absolute;
  appearance: none;
  transition: background 600ms ease, colour 600ms ease;
  font-family: 'Avenir';
  text-align: center;
  color: #333;
  border: 0;
  padding: 0 1em;
  border-left: 2px solid #333;
  top: -2px;
  right: -2px;
  bottom: -2px;

  &:focus,
  &:hover {
    outline: 0;
  }
}

.signup-form__message {
  font-size: 3.5vw;
  margin-top: 1em;

  @media (min-width: 600px) {
    font-size: 18px;
  }
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 1500ms ease;
}

.slide-up-enter,
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(20%);
}
</style>
