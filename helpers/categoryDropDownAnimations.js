export function CatAnimations(target) {
  target.click(function () {
    $(this.nextElementSibling).slideToggle();
  });
}