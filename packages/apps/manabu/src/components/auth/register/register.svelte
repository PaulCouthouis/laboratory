<script lang="ts">
  import { createStudentController } from "../../../features/student/controller"
  import { createRegisterHelper, RegisterFormKey } from "./helper"

  const { register } = createStudentController()
  const { 
    isValidEmail, 
    isValidForm, 
    isValidNickname, 
    isValidPassword, 
    input,
    submit
  } = createRegisterHelper(register)

  const inputByKey = (key: RegisterFormKey) => {
    return (e: { currentTarget: EventTarget & HTMLInputElement; }) => {
      input(key, e.currentTarget.value)
    }
  }
  
</script>

<form on:submit|preventDefault={submit}>
  <div class="form-control">
    <label class="label" for="nickname">
      <span class="label-text">Pseudo / Surnom *</span>
    </label>
    <input 
      required
      minlength="1"
      maxlength="255" 
      class="input" 
      id="nickname" 
      placeholder="Pikachu" 
      type="text"
      class:input-success={$isValidNickname}
      class:input-warning={!$isValidNickname}
      on:input={inputByKey('nickname')}
    />
  </div>
  <div class="form-control">
    <label class="label" for="email">
      <span class="label-text">Email *</span>
    </label>
    <input 
      required
      minlength="5"
      maxlength="255" 
      class="input" 
      id="email" 
      placeholder="pika@pi.ka" 
      type="email"
      class:input-success={$isValidEmail}
      class:input-warning={!$isValidEmail}
      on:input={inputByKey('email')}
    />
  </div>
  <div class="form-control">
    <label class="label" for="password">
      <span class="label-text">Mot de passe *</span>
    </label>
    <input 
      required 
      minlength="8"
      maxlength="255" 
      class="input" 
      id="password"
      type="password"
      class:input-success={$isValidPassword}
      class:input-warning={!$isValidPassword}
      on:input={inputByKey('password')}
    />
  </div>
  <div class="form-control mt-6">
    <button class="btn btn-primary" type="submit" disabled={!$isValidForm}>S'inscrire</button>
  </div>
</form>