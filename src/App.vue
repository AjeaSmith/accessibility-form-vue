<script setup>
import { toTypedSchema } from '@vee-validate/zod'
import * as zod from 'zod'

import { useForm, useField } from 'vee-validate'

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

const { handleSubmit, errors } = useForm({
  validationSchema: toTypedSchema(schema),
})

const { value: email } = useField('email')
const { value: firstName } = useField('firstName')
const { value: lastName } = useField('lastName')
const { value: queryType } = useField('queryType')
const { value: message } = useField('message')
const { value: terms } = useField('terms')

const onSubmit = handleSubmit((values) => {
  // show success toast
  console.log(values)
})
</script>

<template>
  <form @submit="onSubmit">
    <div class="app-form">
      <h1 class="heading">Contact Us</h1>
      <fieldset>
        <div class="form-group">
          <div class="form-item" id="firstname">
            <label for="firstName">First Name *</label>

            <input
              v-model="firstName"
              type="text"
              id="firstName"
              name="firstName"
              :class="{ errorField: errors.firstName }"
            />

            <span v-if="errors.firstName" class="errorMessage">{{ errors.firstName }}</span>
          </div>
          <div class="form-item" id="lastname">
            <label for="lastName">Last Name *</label>
            <input
              v-model="lastName"
              type="text"
              name="lastName"
              id="lastName"
              :class="{ errorField: errors.lastName }"
            />
            <span v-if="errors.lastName" class="errorMessage">{{ errors.lastName }}</span>
          </div>

          <div class="form-item" id="email">
            <label for="emailAdress">Email Address *</label>
            <input
              v-model="email"
              autocomplete="off"
              type="email"
              name="email"
              :class="{ errorField: errors.email }"
            />
            <span v-if="errors.email" class="errorMessage">{{ errors.email }}</span>
          </div>
        </div>
      </fieldset>
      <fieldset>
        <legend>Query Type *</legend>
        <div class="radio">
          <div class="radio-group" :class="{ queryTypeError: errors.queryType }">
            <div class="radio-item">
              <input v-model="queryType" type="radio" id="general" value="General Enquiry" />
              <label for="general">General Enquiry</label>
            </div>
            <div class="radio-item">
              <input v-model="queryType" type="radio" id="support" value="Support Request" />
              <label for="support">Support Request</label>
            </div>
          </div>
          <span v-if="errors.queryType" class="errorMessage">{{ errors.queryType }}</span>
        </div>
      </fieldset>
      <fieldset>
        <div class="form-item">
          <label for="message">Message *</label>
          <textarea
            v-model="message"
            name="message"
            id="message"
            rows="5"
            :class="{ errorField: errors.message }"
          ></textarea>
          <span v-if="errors.message" class="errorMessage">{{ errors.message }}</span>
        </div>
      </fieldset>
      <fieldset>
        <div class="terms">
          <div class="terms-wraps">
            <input v-model="terms" type="checkbox" id="terms" name="terms" />
            <label for="terms">I consent to being contacted by the team *</label>
          </div>
          <span v-if="errors.terms" class="errorMessage">{{ errors.terms }}</span>
        </div>
      </fieldset>
      <button type="submit">Submit</button>
    </div>
  </form>
</template>

<style scoped>
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
fieldset {
  border: none;
  padding: 0;
  margin-bottom: 1.5rem;

  label {
    margin-bottom: 0.5rem;
  }
  legend {
    margin-bottom: 1rem;
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
