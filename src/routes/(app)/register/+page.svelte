<script>
  import { Card, Button, Label, Input, Checkbox } from "flowbite-svelte";
  export let form;
</script>
<section class="main w-full flex flex-col flex-1 items-center justify-center ">
<Card class="w-full md:w-1/2 lg:w-1/3">
	<form class="flex flex-col space-y-6" method="POST" action="?/register">
		<h3 class="text-xl font-medium text-gray-900 dark:text-white p-0">Sign up to our platform</h3>
		<Label class="space-y-2">
			<span>Name</span>
			<Input type="name" name="name" placeholder="John Doe" required />
		</Label>
		<Label class="space-y-2">
			<span>Email</span>
			<Input type="email" name="email" placeholder="name@company.com" required />
		</Label>
		<Label class="space-y-2">
			<span>Your password</span>
			<Input type="password" name="password" placeholder="•••••" required />
		</Label>
		<Label class="space-y-2">
			<span>Confirm password</span>
			<Input type="password" name="passwordConfirm" placeholder="•••••" required />
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