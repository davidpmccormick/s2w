<template>
  <form @submit.prevent="trySubmit"
      action="https://sumnoise.us19.list-manage.com/subscribe/post?u=c31036b4cb3cb6fb30fac0130&amp;id=3ad51ba9d5"
      method="post"
      class="signup-form"
      target="_blank"
      novalidate>
    <div class="signup-form__box">
      <div v-if="result === 'success'">
        <p>You're signed up, yo!</p>
      </div>
      <div v-else class="signup-form__input-wrap">
        <label class="visually-hidden" for="email">Email Address</label>
        <input @input="handleInput"
                id="email"
                autofocus
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
    }
  },
  computed: {
    placeholder() {
      return this.result === 'error'
      ? 'Try again, yeah?'
      : this.result === 'invalid'
        ? `Doesn't look like a real email, yeah?`
        : 'Enter your email, yeah?';
    }
  }
}
</script>

<style lang="scss">
  .signup-form__box {
    padding: 1em;
    height: 100px;
    position: relative;
    border: 3px solid #333;
    display: flex;
    align-items: center;
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
    background: #333;
    transition: background 600ms ease;
    font-family: 'helvetica neue';
    font-size: 20px;
    text-align: center;
    font-weight: bold;
    color: white;
    border: 3px transparent;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100px;

    &:focus {
      outline: 0;
    }
  }

</style>
