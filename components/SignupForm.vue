<template>
  <transition name="slide-down">
    <form
      v-show="isAnimationFinished"
      @submit.prevent="trySubmit"
      action="https://sumnoise.us19.list-manage.com/subscribe/post?u=c31036b4cb3cb6fb30fac0130&amp;id=3ad51ba9d5"
      method="post"
      class="signup-form"
      target="_blank"
      novalidate>
      <div
        class="signup-form__box"
        :class="{'is-success': isSuccess}">
        <div v-if="result === 'success'">
          <p>check your email to confirm, yeah?</p>
        </div>
        <div v-else class="signup-form__input-wrap">
          <label
            class="signup-form__label"
            for="email"><span class="visually-hidden">email </span>sign up</label>
          <input
            @input="handleInput"
            id="email"
            ref="email"
            autofocus
            autocomplete="off"
            type="email"
            class="signup-form__input"
            :placeholder="placeholder"
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
          <button class="signup-form__button">go</button>
        </div>
      </div>
    </form>
  </transition>
</template>

<script>
import { mapState } from 'vuex';
import jsonp from 'jsonp';

export default {
  data() {
    return {
      email: '',
      valid: false,
      result: '',
      message: '',
    };
  },
  methods: {
    handleInput(event) {
      this.setValid(event);
    },
    setValid(event) {
      this.valid = this.email.trim().length !== 0 && event.target.validity.valid;
    },
    async trySubmit(event) {
      const apiUrl = 'https://sumnoise.us19.list-manage.com/subscribe/post-json?u=c31036b4cb3cb6fb30fac0130&amp;id=3ad51ba9d5';

      if (this.valid) {
        jsonp(`${apiUrl}&EMAIL=${this.email}`, {param: 'c'}, (err, data) => {
          if (err) {
            console.error(err.message);
          } else {
            this.result = data.result;
            this.message = data.msg;
            this.email = '';
          }
        });
      } else {
        this.result = 'invalid';
        this.email = '';
      }

      this.$refs.email.focus();
    }
  },
  computed: {
    ...mapState(['isAnimationFinished']),
    placeholder() {
      return this.result === 'error'
      ? 'try again, yeah?'
      : this.result === 'invalid'
        ? `doesn't look like a real email, yeah?`
        : 'you@example.com';
    },
    isSuccess() {
      return this.result === 'success';
    }
  }
}
</script>

<style lang="scss">
  .signup-form__box {
    padding: 0.5em 2.5em 0.5em 0.5em;
    position: relative;
    border: 1px solid #eee;
    border-radius: 6px;
    display: flex;
    align-items: center;
    transition: border-color 2000ms ease;

    &.is-success {
      border-color: transparent;
    }

    @media (min-width: 400px) {
      padding: 1em;
    }
  }

  .signup-form__input-wrap {
    height: 100%;
    width: 100%;
  }

  .signup-form__label {
    position: absolute;
    top: -1.5em;
    left: 0;
    font-size: 0.6em;
    font-weight: bold;
    text-transform: uppercase;

    @media (min-width: 800px) {
      font-size: 0.7em;
    }
  }

  .signup-form__input,
  .signup-form__button {
    font-size: 4vw;

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
    background: transparent;
    transition: background 600ms ease, colour 600ms ease;
    font-family: 'Avenir';
    text-align: center;
    color: #333;
    border: 0;
    padding: 0 1em;
    border-left: 1px solid #eee;
    top: 5px;
    right: 0;
    bottom: 5px;
    border-radius: 0 6px 6px 0;

    &:focus,
    &:hover {
      outline: 0;
    }
  }


  .slide-down-enter-active,
  .slide-down-leave-active {
    transition: all 1500ms ease;
  }

  .slide-down-enter,
  .slide-down-leave-to {
    opacity: 0;
    transform: translateY(20%);
  }

</style>
