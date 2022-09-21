<script lang="ts">
	export let isChecked: boolean
</script>

<li class:text-success={isChecked}>
	<i class="fa-solid" class:fa-square-check={isChecked} class:fa-square-minus={!isChecked} />
	<slot />
</li>
