<script>
  import { getContext } from 'svelte';
	const { close } = getContext('simple-modal');
	import { store, recById } from '../storage.js';
	
  export let message;
	export let hasForm = false;
	export let onCancel = () => {};
	export let onOkay = () => {};
	export let id;
	export let rec; 
	let value;
	let onChange = () => {};
	
	function _onCancel() {
		onCancel();
		close();
	}
	
	function _onOkay() {
		if (id == 0) {
			store.update(n => {
				rec.id = n.length ? n.reduce((cur,max) => cur.id > max.id ? cur.id : max.id)+1 : 1;
				console.log(rec);
				rec.date = new Date(rec.date);
				return n.length ? [...n,rec] : [rec];
			});
		} else {
			store.update(n => {
				n[n.map((x, i) => [i, x]).filter(x =>  x[1].id == rec.id)[0][0]] = recById(id);
				return n;
			});
		}
	
		onOkay(value);
		close();
	}
	
	$: onChange(value)
</script>

<style>
  h3 {
		font-size: 1rem;
		text-align: center;
	}
	
	input, select {
		width: 100%;
	}
	
	.buttons {
		display: flex;
		justify-content: space-between;
	}
</style>

{#if hasForm}
<h3>{id == 0 ? 'New record' : 'Editing'}</h3>
<hr/>
	<input type="string" bind:value={rec.name}/>
	<input type="number" bind:value={rec.value}/>
 	<select bind:value={rec.typeValue}>
			<option value=1>Income</option>
			<option value=-1>Expense</option>
	</select>
	<input type="date" bind:value={rec.date}/>
<hr/>
{/if}

<div class="buttons">
	<button on:click={_onCancel}>Cancel</button>
	<button on:click={_onOkay}>Okay</button>
</div>
