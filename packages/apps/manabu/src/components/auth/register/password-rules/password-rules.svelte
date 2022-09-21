<script lang='ts'>
  import CheckListItem from "./check-list-item.svelte"
  import { createPasswordRulesChecker } from "./checker"

  export let password: string

  const { 
    hasFigure, 
    hasGoodLength, 
    hasLowerCase, 
    hasSpecialChar, 
    hasUpperCase,
    input
  } = createPasswordRulesChecker()

  $: {
    input(password)
  }
</script>

<ul class="my-2 mx-1 text-xs">
  <CheckListItem isChecked={$hasLowerCase}>
    Mon mot de passe contient une lettre minuscule.
  </CheckListItem>
  <CheckListItem isChecked={$hasUpperCase}>
    Mon mot de passe contient une lettre majuscule.
  </CheckListItem>
  <CheckListItem isChecked={$hasFigure}>Mon mot de passe contient un chiffre.</CheckListItem>
  <CheckListItem isChecked={$hasSpecialChar}>
    Mon mot de passe contient un caractère spécial.
  </CheckListItem>
  <CheckListItem isChecked={$hasGoodLength}>Mon mot de passe fait 8 caractères minimum.</CheckListItem>
</ul>