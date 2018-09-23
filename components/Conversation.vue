<template>
	<div class="conversation-container">
		<avatar-section />
		<messages :messages="messages" />
		<chat-input @send-message="sendMessage"/>
	</div>
</template>

<script>
import AvatarSection from '@/components/AvatarSection'
import Messages from '@/components/Messages'
import ChatInput from '@/components/ChatInput'

export default {
	data() {
		return {
			messages: []
		}
	},

	methods: {
		sendMessage(message) {
			this.messages.push(message)
		}
	},

	components: {
		AvatarSection,
		Messages,
		ChatInput
	}
}
</script>

<style scoped>
.conversation-container {
	position: relative;
	height: 100%;
}
</style>