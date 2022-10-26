<script>
  import { Card, Button, Label, Input, Checkbox } from "flowbite-svelte";
  import { Helper } from "flowbite-svelte";
  export let form;
  // $: console.log(form)
</script>
<section class="main w-full flex flex-col flex-1 items-center justify-center ">
<Card class="w-full md:w-1/2 lg:w-1/3">
	<form class="flex flex-col space-y-6" method="POST" action="?/register">
		<h3 class="text-xl font-medium text-gray-900 dark:text-white p-0">Sign up to our platform</h3>
		<Label class="space-y-2">
			<span>Name</span>
			<Input color={form?.errors?.name ? 'red' : 'base'} type="text" name="name" placeholder="John Doe" required />
			{#if form?.errors?.name}
				<Helper class="mt-2" color="red">{form?.errors?.name[0]}</Helper>
			{/if}
		</Label>
		<Label class="space-y-2">
			<span>Email</span>
			<Input color={form?.errors?.email ? 'red' : 'base'} type="email" name="email" placeholder="name@company.com" required />
			{#if form?.errors?.email}
				<Helper class="mt-2" color="red">{form?.errors?.email[0]}</Helper>
			{/if}
		</Label>
		<Label class="space-y-2">
			<span>Your password</span>
			<Input color={form?.errors?.password ? 'red' : 'base'}  type="password" name="password" placeholder="•••••" required />
			{#if form?.errors?.password}
				<Helper class="mt-2" color="red">{form?.errors?.password[0]}</Helper>
			{/if}
		</Label>
		<Label class="space-y-2">
			<span>Confirm password</span>
			<Input color={form?.errors?.passwordConfirm ? 'red' : 'base'}  type="password" name="passwordConfirm" placeholder="•••••" required />
			{#if form?.errors?.passwordConfirm}
				<Helper class="mt-2" color="red">{form?.errors?.passwordConfirm[0]}</Helper>
			{/if}
		</Label>
		<Button type="submit" class="w-full">Register</Button>
			<div class="text-sm font-medium text-gray-500 dark:text-gray-300">
				Already have an account? <a href="/login" class="text-blue-700 hover:underline dark:text-blue-500">Login now!</a>
			</div>
	</form>
</Card>
</section>
<style>
  section.main {
    min-height: 85vh;
  }
</style>