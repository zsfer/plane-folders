let foldIdx = 0;
let planesFolded = 0;
let canFold = true;
let offscreen = false;

let throwSpeed = 1000;

$(() => {
   updatePlane();

   $(".game").click(update);
   $(document).keydown((e) => {
      if (e.which === 32) {
         update();
      }
   });
});

const update = () => {
   if (!canFold) return;
   foldIdx = (foldIdx + 1) % 5;
   updatePlane();

   updateHud();
};

const updatePlane = () => {
   if (foldIdx === 4) {
      canFold = false;
      $(".plane__container").animate({ top: -800 }, throwSpeed, () => {
         canFold = true;
         offscreen = true;
         foldIdx = 0;
      });
      planesFolded++;
      return;
   }

   if (offscreen) {
      foldIdx = 0;
      canFold = false;
      $(".plane__container").animate({ top: "50%" }, throwSpeed, () => {
         canFold = true;
         offscreen = false;
      });
   }

   $(".plane__container").html(
      `<img src="/assets/images/plane/${foldIdx + 1}.png"/>`
   );
};

const updateHud = () => {
   $("#hud__planes-folded h1").text(planesFolded);
};
