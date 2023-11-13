class Plane {
   foldIdx = 0;
   canFold = true;
   offscreen = false;

   start(throwSpeed) {
      this.drawPlane();
      this.throwSpeed = throwSpeed;
   }

   drawPlane() {
      if (this.foldIdx === 4) {
         this.canFold = false;
         $(".plane__container").animate({ top: -800 }, this.throwSpeed, () => {
            thiscanFold = true;
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
   }
}

export default Plane;
