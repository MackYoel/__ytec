<template>
	<div id="messages-container" class="messages-container">
		<section class="messages">
			<message v-for="x in messages()" :key="x"
				:self="x % 2 === 0" />
		</section>
	</div>
</template>

<script>
import Message from '@/components/Message'

export default {
	data() {
		return {
			messages: () => {
				let items = []
				for (let i = 0; i < 20; i++) {
					items.push(i)
				}
				return items
			}
		}
	},
	components: {
		Message
	}
}	
</script>

<style scoped>
::-webkit-scrollbar-track {
	background-color: transparent;
}

::-webkit-scrollbar {
	width: 6px;
	background-color: transparent;
}

::-webkit-scrollbar-thumb {
	background-color: rgba(0, 0, 0, 0.2);
}

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