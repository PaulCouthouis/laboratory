<script lang='ts'>
  import type { ReadableAtom } from 'nanostores'
  import CheckListItem from "./check-list-item.svelte"

  export let hasLowerCase: ReadableAtom<boolean>
  export let hasUpperCase: ReadableAtom<boolean>
  export let hasFigure: ReadableAtom<boolean>
  export let hasSpecialChar: ReadableAtom<boolean>
  export let hasGoodLength: ReadableAtom<boolean>
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