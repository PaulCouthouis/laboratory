<script lang='ts'>
  import { supabase } from '../../database/supabase'
  import FormControl from "../../ui/form/form-control.svelte"
  import PasswordFormControl from "../../ui/form/password-form-control.svelte"
  import SubmitButton from "../../ui/form/submit-button.svelte"
  import { createLoginStore, SignInPayloadKey } from '../login'
  
  const { input, submit } = createLoginStore(supabase.auth)

  const inputByKey = (key: SignInPayloadKey) => {
    return ({ detail }: CustomEvent<string>) => {
      input(key, detail)
    }
  }
</script>

<form on:submit|preventDefault={submit}>
  <FormControl
    id="email" 
    placeholder="pika@pi.ka" 
    type="email"
    minlength={1}
    maxlength={255} 
    isValid={true}
    on:input={inputByKey('email')}
  >
    Email *
  </FormControl>
  <PasswordFormControl
    isValid={true}
    on:input={inputByKey('password')}
  >
    Mot de passe *
  </PasswordFormControl>
  <SubmitButton
    disabled={false} 
    loading={false}
  >
    S'identifier
  </SubmitButton>
</form>