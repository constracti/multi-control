<?php

function l1home( array $i1s ): void {
?>
<div class="multi-control-home leaf flex-col root">
	<div class="multi-control-list leaf flex-col root">
<?php
	foreach ( $i1s as $i1 )
		l1item( $i1 );
?>
	</div>
	<div class="multi-control-new"><?php l1item(); ?></div>
	<div class="flex-row">
		<button class="multi-control-add leaf">add</button>
	</div>
</div>
<?php
}

function l1item( $i1 = NULL ): void {
	if ( is_null( $i1 ) ) {
		$i1 = [
			NULL,
			[ '1', '2', ],
		];
	}
?>
<div class="multi-control-item leaf flex-col root">
	<div class="flex-row">
		<input class="leaf" value="<?= $i1[0] ?>">
		<button class="multi-control-up leaf">up</button>
		<button class="multi-control-down leaf">down</button>
		<button class="multi-control-delete leaf">delete</button>
	</div>
<?php
	l2home( $i1[1] );
?>
</div>
<?php
}

function l2home( array $i2s ): void {
?>
<div class="multi-control-home leaf flex-col root">
	<div class="multi-control-list leaf flex-col root">
<?php
	foreach ( $i2s as $i2 )
		l2item( $i2 );
?>
	</div>
	<div class="multi-control-new"><?php l2item(); ?></div>
	<div class="flex-row">
		<button class="multi-control-add leaf">add</button>
	</div>
</div>
<?php
}

function l2item( $i2 = NULL ): void {
?>
<div class="multi-control-item leaf flex-row root">
	<input class="leaf" value="<?= $i2 ?>">
	<button class="multi-control-up leaf">up</button>
	<button class="multi-control-down leaf">down</button>
	<button class="multi-control-delete leaf">delete</button>
</div>
<?php
}

?>
<!DOCTYPE html>
<html>
	<head>
		<title>Multi Control</title>
		<link rel="stylesheet" href="style.css">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
		<script src="multi-control.js"></script>
	</head>
	<body class="flex-col root">
		<h1 class="leaf">Multi Control</h1>
<?php
	l1home( [
		[
			'a',
			[ 'a1', 'a2', ],
		],
		[
			'b',
			[ 'b1', 'b2', ],
		],
	] );
?>
	</body>
</html>
