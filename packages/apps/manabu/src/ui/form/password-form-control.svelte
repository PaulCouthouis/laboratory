<script lang="ts">
  import { createEventDispatcher } from 'svelte'

	import '@fortawesome/fontawesome-free/css/fontawesome.css'
	import '@fortawesome/fontawesome-free/css/solid.css'

  export let isValid: boolean

  let isVisiblePassword = false
  let type = 'password'

  const lookPassword = () => {
    isVisiblePassword = !isVisiblePassword
    type = isVisiblePassword ? 'text' : 'password'
  }

  const dispatch = createEventDispatcher<{input: string}>();
  const dispatchInput = (e: { currentTarget: EventTarget & HTMLInputElement; }) => {
    dispatch('input', e.currentTarget.value)
  }

</script>

<div class="form-control">
  <label class="label" for="password">
    <span class="label-text"><slot /></span>
  </label>
  <div class="relative">
    <input 
      required
      class="input w-full"
      class:input-success={isValid}
      class:input-warning={!isValid}
      id="password"
      minlength={8}
      maxlength={255}
      {type}
      on:input={dispatchInput}
    />
    <button 
      class="absolute h-full top-0 right-0 mr-4" 
      type="button" 
      on:click={lookPassword}
    >
      <i
        class="fa-solid"
        class:fa-eye={!isVisiblePassword}
        class:fa-eye-slash={isVisiblePassword}
      />
    </button>
  </div>
</div>