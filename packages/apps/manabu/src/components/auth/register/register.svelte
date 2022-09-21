<script lang="ts">
  import { register } from "../../../features/student/controller"
  import FormControl from "../../../ui/form/form-control.svelte"
  import PasswordFormControl from "../../../ui/form/password-form-control.svelte"
  import SubmitButton from "../../../ui/form/submit-button.svelte"
  import { createRegisterHelper, RegisterFormKey } from "./helper"
  import PasswordRules from "./password-rules/password-rules.svelte"

  let password = ''

  const { 
    isValidEmail, 
    isValidForm, 
    isValidNickname, 
    isValidPassword, 
    input,
    loading,
    submit
  } = createRegisterHelper(register)

  const inputByKey = (key: RegisterFormKey) => {
    return ({ detail }: CustomEvent<string>) => {
      input(key, detail)

      if(key === 'password') {
        password = detail
      }
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
  <PasswordRules {password} />

  <SubmitButton 
    disabled={!$isValidForm} 
    loading={$loading}
  >
    S'inscrire
  </SubmitButton>
</form>