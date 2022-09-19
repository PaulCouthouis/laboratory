<script lang="ts">
  import { createEventDispatcher } from "svelte"

  export let id: string
  export let isValid: boolean
  export let minlength: number
  export let maxlength: number
  export let placeholder = ''
  export let type: 'text' | 'email'

  const dispatch = createEventDispatcher<{input: string}>();

  const dispatchInput = (e: { currentTarget: EventTarget & HTMLInputElement; }) => {
    dispatch('input', e.currentTarget.value)
  }
</script>

<div class="form-control">
  <label class="label" for={id}>
    <span class="label-text"><slot /></span>
  </label>
  <input 
    class="input"
    class:input-success={isValid}
    class:input-warning={!isValid}
    required
    {id}
    {minlength}
    {maxlength}
    {placeholder}
    {type}
    on:input={dispatchInput}
  />
</div>