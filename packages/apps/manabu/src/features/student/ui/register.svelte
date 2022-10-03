<script lang="ts">
  import FormControl from "../../../ui/form/form-control.svelte"
  import PasswordFormControl from "../../../ui/form/password-form-control.svelte"
  import SubmitButton from "../../../ui/form/submit-button.svelte"
  import { register } from "../controller"
  import { createRegistrationStore, RegistrationFormKey } from "../store/registration"
  import PasswordRules from "./password-rules.svelte"

  const { actions, state } = createRegistrationStore(register)
  const { input, submit } = actions
  const { isValidEmail, isValidForm, isValidNickname, isValidPassword, loading, ...passwordRules } = state

  const inputByKey = (key: RegistrationFormKey) => {
    return ({ detail }: CustomEvent<string>) => {
      input(key, detail)
    }
  }
</script>

<form on:submit|preventDefault={submit}>
  <FormControl
    id="nickname" 
    placeholder="Pikachu" 
    type="text"
    minlength={1}
    maxlength={255} 
    isValid={$isValidNickname}
    on:input={inputByKey('nickname')}
  >
    Pseudo / Surnom *
  </FormControl>

  <FormControl
    id="email" 
    placeholder="pika@pi.ka" 
    type="email"
    minlength={5}
    maxlength={255} 
    isValid={$isValidEmail}
    on:input={inputByKey('email')}
  >
    Email *
  </FormControl>

  <PasswordFormControl
    isValid={$isValidPassword}
    on:input={inputByKey('password')}
  >
    Mot de passe *
  </PasswordFormControl>
  <PasswordRules {...passwordRules} />

  <SubmitButton 
    disabled={!$isValidForm} 
    loading={$loading}
  >
    S'inscrire
  </SubmitButton>
</form>