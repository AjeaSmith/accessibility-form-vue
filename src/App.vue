<script setup>
import { useAnnouncer } from '@vue-a11y/announcer'
import { toTypedSchema } from '@vee-validate/zod'
import * as zod from 'zod'

import { useForm, useField } from 'vee-validate'
import { ref } from 'vue'

const schema = zod.object({
  firstName: zod.string({ message: 'This is required' }),
  lastName: zod.string({ message: 'This is required' }),
  queryType: zod.string({ message: 'Please select a query type' }),
  message: zod.string({ message: 'This is required' }),
  terms: zod.boolean({ message: 'To submit this form, please consent to being contacted' }),
  email: zod
    .string({ message: 'This is required' })
    .email({ message: 'Please enter a valid email address' }),
})

const { assertive } = useAnnouncer()
const showToast = ref(false)

const { handleSubmit, errors, resetForm } = useForm({
  validationSchema: toTypedSchema(schema),
})

const { value: email } = useField('email')
const { value: firstName } = useField('firstName')
const { value: lastName } = useField('lastName')
const { value: queryType } = useField('queryType')
const { value: message } = useField('message')
const { value: terms } = useField('terms')

const onSubmit = handleSubmit(() => {
  assertive('Message Sent! Thanks for completing the form. We’ll be in touch soon!')
  showToast.value = true

  setTimeout(() => {
    showToast.value = false

    resetForm()
  }, 3000)
})
</script>

<template>
  <section class="form-wrapper">
    <div v-if="showToast" class="toast-box">
      <p class="toast-message">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="21"
          fill="none"
          viewBox="0 0 20 21"
        >
          <path
            fill="#fff"
            d="M14.28 7.72a.748.748 0 0 1 0 1.06l-5.25 5.25a.748.748 0 0 1-1.06 0l-2.25-2.25a.75.75 0 1 1 1.06-1.06l1.72 1.72 4.72-4.72a.75.75 0 0 1 1.06 0Zm5.47 2.78A9.75 9.75 0 1 1 10 .75a9.76 9.76 0 0 1 9.75 9.75Zm-1.5 0A8.25 8.25 0 1 0 10 18.75a8.26 8.26 0 0 0 8.25-8.25Z"
          />
        </svg>
        Message Sent!
      </p>
      <p>Thanks for completing the form. We’ll be in touch soon!</p>
    </div>
    <form @submit="onSubmit">
      <div class="app-form">
        <h1 class="heading">Contact Us</h1>

        <div class="form-group">
          <div class="form-item" id="firstname">
            <label for="firstName">First Name *</label>
            <input
              v-model="firstName"
              type="text"
              id="firstName"
              name="firstName"
              aria-required="true"
              :aria-describedby="errors.firstName ? 'firstName-error' : null"
              :aria-invalid="!!errors.firstName"
              :class="{ errorField: errors.firstName }"
            />
            <span v-if="errors.firstName" class="errorMessage" id="firstName-error" role="alert">{{
              errors.firstName
            }}</span>
          </div>
          <div class="form-item" id="lastname">
            <label for="lastName">Last Name *</label>
            <input
              v-model="lastName"
              type="text"
              name="lastName"
              id="lastName"
              aria-required="true"
              :aria-describedby="errors.lastName ? 'lastName-error' : null"
              :aria-invalid="!!errors.lastName"
              :class="{ errorField: errors.lastName }"
            />
            <span v-if="errors.lastName" class="errorMessage" id="lastName-error" role="alert">{{
              errors.lastName
            }}</span>
          </div>
          <div class="form-item" id="email">
            <label for="emailAdress">Email Address *</label>
            <input
              id="emailAdress"
              v-model="email"
              autocomplete="off"
              type="email"
              name="email"
              aria-required="true"
              :aria-describedby="errors.email ? 'email-error' : null"
              :aria-invalid="!!errors.email"
              :class="{ errorField: errors.email }"
            />
            <span v-if="errors.email" class="errorMessage" id="email-error" role="alert">{{
              errors.email
            }}</span>
          </div>
        </div>

        <fieldset>
          <legend>Query Type *</legend>
          <div class="radio">
            <div class="radio-group" :class="{ queryTypeError: errors.queryType }">
              <div class="radio-item">
                <input
                  v-model="queryType"
                  type="radio"
                  id="general"
                  value="General Enquiry"
                  :aria-describedby="errors.queryType ? 'queryType-error' : null"
                  :aria-invalid="!!errors.queryType"
                />
                <label for="general">General Enquiry</label>
              </div>
              <div class="radio-item">
                <input
                  v-model="queryType"
                  type="radio"
                  id="support"
                  value="Support Request"
                  :aria-describedby="errors.queryType ? 'queryType-error' : null"
                  :aria-invalid="!!errors.queryType"
                />
                <label for="support">Support Request</label>
              </div>
            </div>
            <span v-if="errors.queryType" class="errorMessage" id="queryType-error" role="alert">{{
              errors.queryType
            }}</span>
          </div>
        </fieldset>
        <section>
          <div class="form-item">
            <label for="message">Message *</label>
            <textarea
              v-model="message"
              name="message"
              id="message"
              rows="5"
              aria-required="true"
              :aria-describedby="errors.message ? 'message-error' : null"
              :aria-invalid="!!errors.message"
              :class="{ errorField: errors.message }"
            ></textarea>
            <span v-if="errors.message" class="errorMessage" id="message-error">{{
              errors.message
            }}</span>
          </div>
        </section>
        <section>
          <div class="terms">
            <div class="terms-wraps">
              <input
                v-model="terms"
                type="checkbox"
                id="terms"
                name="terms"
                aria-required="true"
                :aria-describedby="errors.terms ? 'terms-error' : null"
                :aria-invalid="!!errors.terms"
              />
              <label for="terms">I consent to being contacted by the team *</label>
            </div>
            <span v-if="errors.terms" class="errorMessage" id="terms-error" role="alert">{{
              errors.terms
            }}</span>
          </div>
        </section>
        <button type="submit">Submit</button>
      </div>
    </form>
  </section>
  <VueAnnouncer />
</template>

<style scoped>
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.form-wrapper {
  position: relative;

  .toast-box {
    position: absolute;
    top: 7%;
    left: 50%;
    transform: translateX(-50%);
    max-width: 450px;
    width: 100%;
    padding: 1.5rem;
    border-radius: 12px;
    color: var(--clr-white);
    background-color: var(--clr-green-900);
  }
  .toast-message {
    margin-bottom: 12px;
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: 8px;
  }
}
input[type='text'],
input[type='email'],
.radio-item,
textarea {
  padding: 1rem;
  border-radius: 8px;
  border: 1.3px solid var(--clr-green-500);
}
/* HOVER | ACTIVE | FOCUS | ERROR */
input[type='text']:hover,
input[type='email']:hover,
.radio-item:hover,
textarea:hover {
  cursor: pointer;
  border: 1.4px solid var(--clr-green-600);
}
button:hover {
  cursor: pointer;
  background-color: var(--clr-green-900);
}

input[type='text']:focus-visible,
input[type='email']:focus-visible,
textarea:focus-visible {
  outline: 1px solid var(--clr-green-600);
}

.radio-item:has(input:checked) {
  background-color: var(--clr-green-200);
  outline: 1px solid var(--clr-green-600);
}

form {
  display: grid;
  align-content: center;
  max-width: 46rem;
  margin-inline: auto;
  padding-inline: 2.25rem;
  height: 100vh;
}

.heading {
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: -1px;
  margin-bottom: 2rem;
}
.app-form {
  border-radius: 1rem;
  background-color: var(--clr-white);
  padding: 2.5rem;

  h1 {
    margin-bottom: 2rem;
  }
}
label {
  margin-bottom: 0.5rem;
}
#email {
  margin-bottom: 1rem;
}
fieldset {
  border: none;
  padding: 0;
  margin-bottom: 1.5rem;

  legend {
    margin-block: 0.5rem;
  }

  label[for='general'],
  label[for='support'],
  label[for='terms'] {
    margin-bottom: 0;
  }
}

.form-group {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 1.5rem;
}
.form-item {
  display: flex;
  flex-direction: column;
}

.radio-group {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .radio-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem;
    border-radius: 8px;
  }
}

textarea {
  resize: none;
  padding: 0.5rem;
  border-radius: 8px;
}

.text-md,
.text-md-bold {
  font-size: 1.125rem;
  letter-spacing: 0;
}
.text-md-bold {
  font-weight: 700;
}

.terms {
  margin-block:2.5rem;
  display: flex;
  flex-direction: column;
  input {
    margin-right: 0.5rem;
  }
}
button {
  width: 100%;
  border: none;
  padding: 1rem;
  border-radius: 8px;
  font-weight: bold;
  color: var(--clr-white);
  background-color: var(--clr-green-600);
}

.errorMessage {
  margin-top: 0.5rem;
  color: var(--clr-red);
}
input.errorField,
textarea.errorField {
  border: 1.4px solid var(--clr-red);
}
.queryTypeError {
  margin-bottom: 0.5rem;
}

@media (min-width: 37.5rem) {
  .form-group {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      'first last'
      'email email';
    gap: 1rem;

    #firstname {
      grid-area: first;
    }
    #lastname {
      grid-area: last;
    }
    #email {
      grid-area: email;
      column-span: 1/2;
    }
  }
  .radio-group {
    flex-direction: row;
    .radio-item {
      flex: 1;
    }
  }
}
</style>
