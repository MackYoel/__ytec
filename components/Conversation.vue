<template>
	<div class="conversation-container">
		<avatar-section />
		<messages />
	</div>
</template>

<script>
import AvatarSection from '@/components/AvatarSection'
import Messages from '@/components/Messages'

export default {
	components: {
		AvatarSection,
		Messages
	}
}
</script>

<style scoped>
.conversation-container {
	position: relative;
	height: 100%;
}
</style>