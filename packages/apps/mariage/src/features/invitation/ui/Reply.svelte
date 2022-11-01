<script lang='ts'>
  import type { ReplyCard, ReplyCardMember } from "../domain/values"

  export let members: string[]

  let completed = false
  let loading = false
  let message = ''
  let cardMembers = members.map<ReplyCardMember>(member => ({
    diet: '',
    name: member,
    status: 'wait'
  }))

  const handleSubmit = () => {
    const body: ReplyCard = {
      members: cardMembers,
      message
    }

    loading = true

    fetch('/api/reply', {
      body: JSON.stringify(body),
      method: 'POST'
    }).then(() => {
      completed = true
    })
  }
</script>

<form class="mt-4" on:submit|preventDefault={handleSubmit}>
  {#each cardMembers as card }
    <fieldset class="my-4">
      <legend class="text-center">- {card.name} -</legend>
      <div class="flex justify-between my-2">
        <label>
          <input disabled={completed} type="radio" bind:group={card.status} name={card.name} value={'accept'}  /> Présent
        </label>
        <label>
          <input disabled={completed} type="radio" bind:group={card.status} name={card.name} value={'decline'} /> Absent
        </label>
        <label>
          <input disabled={completed} type="radio" bind:group={card.status} name={card.name} value={'wait'} /> Indécis
        </label>
      </div>
      <input
        class="border p-2 w-full text-gray-700 disabled:text-gray-700"
        placeholder="Régime alimentaire* (facultatif)"
        type="text"
        bind:value={card.diet}
        disabled={completed} 
      />
    </fieldset>
  {/each}
  <textarea
    class="border h-28 p-2 w-full text-gray-700 disabled:text-gray-700"
    placeholder="Message (facultatif)"
    bind:value={message}
    disabled={completed} 
  />
  {#if completed}
    <p class="text-right mt-5">
      Merci pour votre réponse !
    </p>
  {:else}
  <div class="text-right mt-4">
    <button class="btn text-white text-right bg-primary rounded p-4" class:pl-9={!loading} class:loading={loading} type="submit">
      Envoyer le coupon-réponse
    </button>
  </div>
  {/if}
</form>
<p class="text-xs text-gray-300 mt-2 text-right">
  * allergie, végétarien, raison religieuse, etc
</p>

