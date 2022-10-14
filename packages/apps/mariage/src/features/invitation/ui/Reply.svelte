<script lang='ts'>
  export let members: string[]
</script>

<form class="mt-4">
  {#each members as member }
    <fieldset class="my-4">
        <legend class="text-center">- {member} -</legend>
        <div class="flex justify-between my-2">
          <label>
            <input type="radio" name={member} /> Présent
          </label>
          <label>
            <input type="radio" name={member} /> Absent
          </label>
          <label>
            <input type="radio" name={member} /> Indécis
          </label>
        </div>
        <input
          class="border p-2 w-full text-gray-700"
          placeholder="Régime alimentaire* (facultatif)"
          type="text"
        />
      </fieldset>
  {/each}
  <textarea
    class="border h-28 p-2 w-full text-gray-700"
    placeholder="Message (facultatif)"
  />
  <div class="text-right mt-4">
    <button
      class="text-right bg-primary rounded p-4"
      type="submit">Envoyer le coupon-réponse</button
    >
  </div>
</form>