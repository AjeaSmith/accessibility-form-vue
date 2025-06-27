<script setup></script>

<template>
  <!-- hi -->
  <form action="#">
    <div class="app-form">
      <h1 class="heading">Contact Us</h1>
      <fieldset>
        <div class="form-group">
          <div class="form-item" id="firstname">
            <label for="firstName">First Name *</label>
            <input autocomplete="off" required type="text" name="firstname" id="firstName" />
          </div>
          <div class="form-item" id="lastname">
            <label for="lastName">Last Name *</label>
            <input autocomplete="off" required type="text" name="lastName" id="lastName" />
          </div>
          <div class="form-item" id="email">
            <label for="emailAdress">Email Address *</label>
            <input autocomplete="off" required type="email" name="email" id="emailAdress" />
          </div>
        </div>
      </fieldset>
      <fieldset>
        <legend>Query Type *</legend>
        <div class="radio">
          <div class="radio-group">
            <div class="radio-item">
              <input
                autocomplete="off"
                required
                type="radio"
                id="general"
                name="type"
                value="General Enquiry"
              />
              <label for="general">General Enquiry</label>
            </div>
            <div class="radio-item">
              <input
                autocomplete="off"
                required
                type="radio"
                id="support"
                name="type"
                value="Support Request"
              />
              <label for="support">Support Request</label>
            </div>
          </div>
        </div>
      </fieldset>
      <fieldset>
        <div class="form-item">
          <label for="message">Message *</label>
          <textarea required name="message" id="message" rows="10" cols="30"></textarea>
        </div>
      </fieldset>
      <fieldset>
        <div class="terms">
          <input
            autocomplete="off"
            required
            type="checkbox"
            id="terms"
            name="terms"
            value="Consent"
          />
          <label for="terms">I consent to being contacted by the team *</label>
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
/* HOVER | ACTIVE | FOCUS */
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
