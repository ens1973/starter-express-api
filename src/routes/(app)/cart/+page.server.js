/** @type {import('./$types').PageServerLoad} */
import { redirect } from '@sveltejs/kit';
import { client } from '$lib/api';
import { perPage } from '$lib/api';
import { serializeNonPOJOs } from '$lib/api';
import { serializeObj } from '$lib/api';
import { cart } from '$lib/stores/cart'

export const load = async () => {
	if (client.authStore.isValid)
		throw redirect(303, '/');
};

export const actions = {
	placeorder: async ({ request }) => {
        // const form_data = await request.formData();
        // console.log('form_data: ',form_data);
		const form_obj = Object.fromEntries(await request.formData());
        let cart = await serializeObj(form_obj.json);
        cart.customer_name = 'customer_name'
        cart.customer_phone = 'customer_phone'
        cart.customer_address = 'customer_address'

        try {
            const record = await client.records.create('customer_order', cart);
            // console.log(record);
        } catch (err) {
            const e = await serializeNonPOJOs(err);
            // console.log('Error:', e);
            return {
                error: true,
                msg: e.data
            };
        }

        // get bot info
        const page = 1;
        const response = await client.records.getList('telegram_bot', page, perPage, {
            filter: 'name = "orderbot"',
        });

        const bots = await serializeNonPOJOs(response);
        if (bots.totalItems !== 1) {
            // notifier.danger("Not found!");
            console.log('bots: ',bots);
            throw redirect(303, '/cart');
        }
        // send message
        const send_message = await fetch(`https://api.telegram.org/bot${bots.items[0].bot_key}/sendMessage`,{
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify({
                'chat_id': bots.items[0].group_id,
                'text': `KH ${cart.customer_name} có SĐT ${cart.customer_phone} đã đặt đơn hàng gồm ${cart.total_quantity} sản phẩm, vui lòng xử lý.`
            })
        })
        const message = await send_message.json()
        // console.log('message: ',message);



        // cart.set({
        //     'items': [],
        //     'total_quantity':0
        // })

		// try {
		// 	const { token, user } = await client.users.authViaEmail(data.email, data.password);
		// } catch (err) {
		// 	const e = await serializeNonPOJOs(err);
		// 	// console.log('Error:', e);
		// 	return {
		// 		error: true,
		// 		message: e.data,
		// 		email: data.email
		// 	};
		// }
		throw redirect(303, '/cart');
	}
};
