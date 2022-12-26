export function CatAnimations(target, element) {
  target.click(function () {
    $(this).children(element).slideToggle();
  });
}