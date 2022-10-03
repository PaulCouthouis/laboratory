<script lang='ts'>
  import FormControl from "../../ui/form/form-control.svelte"
  import PasswordFormControl from "../../ui/form/password-form-control.svelte"
  import SubmitButton from "../../ui/form/submit-button.svelte"
  
  import { signIn } from "../controller"

  let email = ''
  let password = ''

  const onInputEmail = ({ detail }: CustomEvent<string>) => {
    email = detail
  }

  const onInputPassword = ({ detail }: CustomEvent<string>) => {
    password = detail
  }

  const submit = () => {
    signIn({
      email, password
    })
  }

  $: isValidEmail = email.length > 0
  $: isValidPassword = password.length > 0
  $: isValidForm = isValidEmail && isValidPassword
</script>

<form on:submit|preventDefault={submit}>
  <FormControl
    id="email" 
    placeholder="pika@pi.ka" 
    type="email"
    minlength={1}
    maxlength={255} 
    isValid={isValidEmail}
    on:input={onInputEmail}
  >
    Email *
  </FormControl>
  <PasswordFormControl
    isValid={isValidPassword}
    on:input={onInputPassword}
  >
    Mot de passe *
  </PasswordFormControl>
  <SubmitButton
    disabled={!isValidForm} 
    loading={false}
  >
    S'identifier
  </SubmitButton>
</form>