<template>
	<div class="user-container">

		<div class="user">
			<div class="avatar">
				<img src="https://instagram.faqp2-2.fna.fbcdn.net/vp/5dfa30792109c3d53f506bbec753538e/5C23AC0B/t51.2885-19/s150x150/18161217_935749963195381_6033491103036997632_a.jpg">
			</div>
			<div class="info">
				<div class="name">Yoel Zalas</div>
				<div class="extra">En linea</div>
			</div>
		</div>

		<slot name="options"></slot>

	</div>
</template>

<script>
export default {}	
</script>

<style scoped>
.user-container {
	border: 1px solid #ededed;
	padding: 10px 16px;
}

.user {
	display: inline-flex;
	vertical-align: middle;
}

.user img {
	display: block;
	height: 40px;
	border-radius: 50%;
}

.info {
	padding-left: 15px;
	font-size: 90%;
	line-height: 1.4;
}

.name {
	padding-top: 3px;
	font-weight: 500;
}
.extra {
	font-size: 13px;
	line-height: 1.2;
	font-weight: 200;
}
</style>