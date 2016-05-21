		var Modal= {
			show_lvl: function(lvl){
				
				lvl++;
				document.querySelector("#mapLevel").textContent=lvl;
			},
			show_ending:function(){
				$("#gameEnding").show();
				
			},
			show_distance:function(z){
				
				document.querySelector("#distance").textContent=z;
				
			},
			show_speed:function(speed){
				
				document.querySelector("#speed").textContent=speed;
			},
			show_winUi:function(winUi){
//				alert(1);
				$("#winUi").show();
			},
			hide_start: function(ui_start){
				document.querySelector("#startUi").style.display="none";
			},
			
		}
