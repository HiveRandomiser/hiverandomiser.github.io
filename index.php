<!DOCTYPE html>
<html>
	<head>
		<title>The HiveMC Game Randomiser</title>
		<link rel="stylesheet" type="text/css" href="style.css">
	</head>
	<body>

		<div class="header">

			<?php
			
			$josh = 19;

			if ($josh < 20 ) {

				echo "Background colour changer is currently disabled!";
			} else {

				echo "Background colour changer is active!";
			} ?>
		
		</div>


		<?php

		$input = array("Music Masters", "Electric Floor", "Battery Dash", "One in the Chamber", "Splegg", "Draw It", "The Herobrine", "Sploop", "Heroes", "Slaparoo", "RestaurantRush", "Cranked", "Bed Wars: Teams", "Bed Wars: Solo", "Bed Wars: Duo", "Hide and Seek", "SkyWars: Solo", "SkyWars: Duos", "SkyGiants", "SkyGiants: Mini", "DeathRun", "Trouble in Mineville", "Murder in Mineville", "BlockParty", "SurvivalGames", "SurvivalGames 2.0", "Cowboys and Indians", "Gravity", "The Lab", "SkyWars: Teams");
		
		$game = $input[mt_rand(0, count($input) -1)];

		?>

		<h1>
			<a style="cursor:default" href="https://hivemc.com" target="_blank"><img src="https://hivemc.com/img/header-logo.png"></a></br>
		Game Randomiser
		</h1>

		
		<div class="game">
		
			<?php
				echo $game;
			?>
		
		</div>
 
		<BR>
		<INPUT TYPE=BUTTON VALUE="Generate" onClick="window.location.reload()" id="button"><BR>

		<div class="info">
			Having problems with the randomiser? Click <a href="#">HERE</a> to use the old version
		</div>


		<div class="footer">

			Made with 💛 by <a href="https://hivemc.com/player/nerdi" target="_blank">Josh</a> 2017 &nbsp; 🐝 &nbsp; Website not affiliated with The Hive &nbsp; 🐝 &nbsp; Logo &copy; <a href="https://hivemc.com" target="_blank">HiveMC</a>
		
		</div>

	</body>

</html>
