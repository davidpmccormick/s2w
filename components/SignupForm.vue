<template>
  <form
    @submit.prevent="trySubmit"
    action="https://somewheretowear.us19.list-manage.com/subscribe/post?u=641ee46704f17c07dc0e3c08e&amp;id=4e403bb31e"
    method="post"
    class="yo-o yo-slow yo-ease sm:mx-auto mt-16 font-haas max-w-xs overflow-hidden"
    target="_blank"
    novalidate>
    <div class="w-full h-full">
      <label
        class="font-semibold text-xs uppercase inline-block mb-1"
        for="email"><span class="invisible absolute">email </span>sign up</label>
      <div class="mx-auto p-3 md:p-4 relative border-black border-solid border-2 flex center">
        <input
          @input="handleInput"
          id="email"
          ref="email"
          autofocus
          autocomplete="off"
          type="email"
          class="dmc-input font-normal s:font-lg h-full w-full font-haas pr-12 py-0 pl-0 border-0 text-black focus:outline-none appearance-none"
          placeholder="you@example.com"
          name="EMAIL"
          v-model="email">
        <div
          class="invisible absolute"
          aria-hidden="true">
          <input
            type="text"
            name="b_641ee46704f17c07dc0e3c08e_4e403bb31e"
            tabindex="-1" />
        </div>
        <button :disabled="isPosting" class="dmc-button font-normal sm:font-lg font-haas absolute text-black px-4 center border-l-2 border-solid border-black focus:outline-none hover:outline-none appearance-none focus:text-white hover:text-white focus:bg-black hover:bg-black yo-cs yo yo-ease">
          <span v-if="isPosting">...</span>
          <span v-else>go</span>
        </button>
      </div>
    </div>
    <p
      v-if="message !== ''"
      class="mt-2 text-sm"
      v-html="message" />
  </form>
</template>

<script>
import jsonp from 'jsonp';
import parseMailchimpMessage from '~/utils/parse-mailchimp-message';

export default {
  mounted() {
    this.$el.classList.add('opacity-0');

    setTimeout(() => {this.$el.classList.remove('opacity-0');}, 2500);
  },
  data() {
    return {
      email: '',
      valid: false,
      result: '',
      message: '',
      isPosting: false,
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
  }
};
</script>

<style lang="scss" scoped>
  .dmc-input {
    background-clip: padding-box;

    &:-webkit-autofill {
      box-shadow: 0 0 0 30px white inset;
    }
  }

  .dmc-button {
    top: -2px;
    right: -1px;
    bottom: -2px;
  }
</style>
