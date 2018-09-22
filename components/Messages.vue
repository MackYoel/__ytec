<template>
	<div id="messages-container" class="messages-container">
		<section class="messages">
			<message v-for="x in messages" :key="x.id"
				:self="x.self" :corner="x.displayCorner" />
		</section>
	</div>
</template>

<script>
import Message from '@/components/Message'

export default {
	data() {
		return {
			messages: [],
			lastSelf: undefined
		}
	},

	mounted() {
		let items = []
		for (let i = 0; i < 20; i++) {
			let item = { id: i, self: i % 4 === 0, displayCorner: false }

			if (this.lastSelf !== item.self) {
				item.displayCorner = true
				this.lastSelf = item.self
			}
			items.push(item)
		}
		this.messages = items
	},

	components: {
		Message
	}
}	
</script>

<style scoped>

.messages-container {
	/*background-color: #f4f5f2;*/
	position: absolute;
	bottom: 62px;
	right: 0;
	left: 0;
	top: 62px;
	padding: 0;
}
.messages {
	overflow-y: scroll;
	/*background-color: #fbfbff;*/
	height: 100%;
	padding: 0 1em;
}
</style>