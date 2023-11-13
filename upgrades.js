const upgradeCosts = {
   throwSpeed: 5,
};

$(() => {
   $("#upg-tspeed").click(() => {
      if (planesFolded < upgradeCosts.throwSpeed) {
         alert("YOU DO NOT HAVE ENOUGH FOLDS. CHOP CHOP PLANE BOY");
         return;
      }

      upgradeCosts.throwSpeed += 5;
      throwSpeed -= 100;

      const bgColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      const textColor = bgColor > "#888888" ? "#000" : "#fff";

      $("body").css({
         backgroundColor: bgColor,
         color: textColor,
      });

      updateUpgradesHUD();
   });

   $("#upg-hold").click(() => {
      alert(
         "Feature is still in development. To support the developer, send gcash: +63 927 512 6933."
      );
   });
});

const updateUpgradesHUD = () => {
   $("#upg-tspeed").text(upgradeCosts.throwSpeed + " folds");
   $("#upg-tspeed .upgrade-bar").html("<i>+</i>" * upgradeCosts);
};
