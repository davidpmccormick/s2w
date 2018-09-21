<template>
  <form @submit.prevent="trySubmit"
      action="https://sumnoise.us19.list-manage.com/subscribe/post?u=c31036b4cb3cb6fb30fac0130&amp;id=3ad51ba9d5"
      method="post"
      class="signup-form"
      target="_blank"
      novalidate>
    <div class="signup-form__box" :class="{'is-success': isSuccess}">
      <div v-if="result === 'success'">
        <p>Check your email to confirm, yeah?</p>
      </div>
      <div v-else class="signup-form__input-wrap">
        <label class="visually-hidden" for="email">Email Address</label>
        <input @input="handleInput"
                id="email"
                ref="email"
                autofocus
                autocomplete="off"
                type="email"
                class="signup-form__input"
                :placeholder="placeholder"
                name="EMAIL"
                v-model="email">
        <div class="visually-hidden" aria-hidden="true">
          <input type="text" name="b_c31036b4cb3cb6fb30fac0130_3ad51ba9d5" tabindex="-1" />
        </div>
        <button class="signup-form__button">Go</button>
      </div>
    </div>
  </form>
</template>

<script>
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
    placeholder() {
      return this.result === 'error'
      ? 'Try again, yeah?'
      : this.result === 'invalid'
        ? `Doesn't look like a real email, yeah?`
        : 'Enter your email, yeah?';
    },
    isSuccess() {
      return this.result === 'success';
    }
  }
}
</script>

<style lang="scss">
  .signup-form__box {
    padding: 1em;
    height: 100px;
    position: relative;
    border: 4px solid #333;
    display: flex;
    align-items: center;
    transition: border-color 2000ms ease;

    &.is-success {
      border-color: transparent;
    }
  }

  .signup-form__input-wrap {
    height: 100%;
    width: 100%;
  }

  .signup-form__input {
    height: 100%;
    width: 100%;
    appearance: none;
    font-family: 'helvetica neue';
    font-weight: bold;
    font-size: 20px;
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
    transition: all 600ms ease;
    font-family: 'helvetica neue';
    font-size: 20px;
    text-align: center;
    font-weight: bold;
    color: #333;
    border: 0;
    border-left: 4px solid #333;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100px;

    &:focus,
    &:hover {
      background: #333;
      color: #fff;
      outline: 0;
    }
  }

</style>
