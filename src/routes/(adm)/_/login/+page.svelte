<script>
  import { Card, Button, Label, Input, Checkbox } from "flowbite-svelte";
</script>
<section class="main w-full flex flex-col flex-1 items-center justify-center ">

<Card class="w-full md:w-1/2 lg:w-1/3">
	<form class="flex flex-col space-y-6" method="POST" action="?/login">
		<h3 class="text-xl font-medium text-gray-900 dark:text-white p-0">Sign in to our platform (Admin)</h3>
		<Label class="space-y-2">
			<span>Email</span>
			<Input type="email" name="email" placeholder="name@company.com" required />
		</Label>
		<Label class="space-y-2">
			<span>Your password</span>
			<Input type="password" name="password" placeholder="•••••" required />
		</Label>
		<div class="flex items-start">
				<Checkbox>Remember me</Checkbox>
				<a href="/" class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost password?</a>
		</div>
		<Button type="submit" class="w-full">Login to your account</Button>
			<div class="text-sm font-medium text-gray-500 dark:text-gray-300">
				Not registered? <a href="/register" class="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
			</div>
	</form>
</Card>
</section>
<style>
  section.main {
    min-height: 85vh;
  }
</style>